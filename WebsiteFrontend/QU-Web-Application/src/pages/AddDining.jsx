import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AddDining() {
    const [venues, setVenues] = useState([]);
    const [dining, setDining] = useState({
        name: '',
        type: '',
        description: '',
        imageUrl: ''
    });

    const inputStyle = { backgroundColor: '#000', border: '1px solid #333', color: '#fff' };

    // Fetch existing venues
    const fetchVenues = async () => {
        try {
            const res = await axios.get("http://localhost:8080/api/dining");
            setVenues(res.data);
        } catch (err) {
            console.error("Error fetching venues", err);
        }
    };

    useEffect(() => {
        fetchVenues();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8080/api/dining", dining);
            alert("New Dining Venue added successfully!");
            setDining({ name: '', type: '', description: '', imageUrl: '' });
            fetchVenues(); // Refresh list
        } catch (err) {
            console.error(err);
            alert("Error saving dining venue.");
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this venue?")) {
            try {
                await axios.delete(`http://localhost:8080/api/dining/${id}`);
                alert("Venue deleted.");
                fetchVenues(); // Refresh list
            } catch (err) {
                console.error(err);
                alert("Error deleting venue.");
            }
        }
    };

    return (
        <div className="container py-5">
            {/* Form Section */}
            <div className="card bg-dark border-secondary p-4 mx-auto shadow-lg mb-5" style={{ maxWidth: '700px', backgroundColor: '#1e1e1e' }}>
                <h3 className="text-info fw-bold mb-4 text-uppercase" style={{ letterSpacing: '2px' }}>Add Dining Venue</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="text-secondary small fw-bold">VENUE NAME</label>
                        <input type="text" className="form-control shadow-none" style={inputStyle} placeholder="e.g. The Grand Buffet"
                            value={dining.name} onChange={(e) => setDining({ ...dining, name: e.target.value })} required />
                    </div>

                    <div className="mb-3">
                        <label className="text-secondary small fw-bold">CUISINE / TYPE</label>
                        <input type="text" className="form-control shadow-none" style={inputStyle} placeholder="e.g. International"
                            value={dining.type} onChange={(e) => setDining({ ...dining, type: e.target.value })} required />
                    </div>

                    <div className="mb-3">
                        <label className="text-secondary small fw-bold">IMAGE FILENAME</label>
                        <input type="text" className="form-control shadow-none" style={inputStyle} placeholder="e.g. buffet.jpg"
                            value={dining.imageUrl} onChange={(e) => setDining({ ...dining, imageUrl: e.target.value })} required />
                    </div>

                    <div className="mb-3">
                        <label className="text-secondary small fw-bold">DESCRIPTION</label>
                        <textarea className="form-control shadow-none" style={inputStyle} rows="4" placeholder="Describe the atmosphere and food..."
                            value={dining.description} onChange={(e) => setDining({ ...dining, description: e.target.value })} required />
                    </div>

                    <button type="submit" className="btn btn-info w-100 fw-bold py-3 text-uppercase text-white" style={{ letterSpacing: '2px' }}>
                        Save Venue
                    </button>
                </form>
            </div>

            {/* Existing Venues Table */}
            <div className="card bg-dark border-secondary p-4 shadow-lg" style={{ backgroundColor: '#1e1e1e' }}>
                <h3 className="text-info fw-bold mb-4 text-uppercase" style={{ letterSpacing: '2px' }}>Manage Existing Venues</h3>
                <div className="table-responsive">
                    <table className="table table-dark table-hover align-middle">
                        <thead className="text-secondary small fw-bold">
                            <tr>
                                <th>IMAGE</th>
                                <th>NAME</th>
                                <th>TYPE</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {venues.map((v) => (
                                <tr key={v.id}>
                                    <td>
                                        <img src={`/assets/dining/${v.imageUrl}`} alt={v.name} style={{ width: '60px', height: '40px', objectFit: 'cover' }} className="rounded" />
                                    </td>
                                    <td className="fw-bold">{v.name}</td>
                                    <td>{v.type}</td>
                                    <td>
                                        <button onClick={() => handleDelete(v.id)} className="btn btn-outline-danger btn-sm">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {venues.length === 0 && (
                                <tr>
                                    <td colSpan="4" className="text-center text-secondary py-4">No venues found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default AddDining;