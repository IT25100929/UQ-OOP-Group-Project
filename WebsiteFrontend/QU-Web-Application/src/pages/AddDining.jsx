import React, { useState } from 'react';
import axios from 'axios';

function AddDining() {
    const [dining, setDining] = useState({
        name: '',
        type: '',
        description: '',
        imageUrl: ''
    });

    const inputStyle = { backgroundColor: '#000', border: '1px solid #333', color: '#fff' };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8080/api/dining", dining);
            alert("New Dining Venue added successfully!");
            setDining({ name: '', type: '', description: '', imageUrl: '' });
        } catch (err) {
            console.error(err);
            alert("Error saving dining venue.");
        }
    };

    return (
        <div className="container py-5">
            <div className="card bg-dark border-secondary p-4 mx-auto shadow-lg" style={{ maxWidth: '700px', backgroundColor: '#1e1e1e' }}>
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
        </div>
    );
}

export default AddDining;