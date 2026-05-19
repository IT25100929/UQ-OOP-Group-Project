import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AddRoom() {
    const [rooms, setRooms] = useState([]);
    const [room, setRoom] = useState({
        title: '',
        price: '',
        desc: '',
        imageUrl: '',
        amenities: ''
    });

    // Tracking state for row editing
    const [editingRoomId, setEditingRoomId] = useState(null);
    const [editingPrice, setEditingPrice] = useState('');

    const inputStyle = { backgroundColor: '#000', border: '1px solid #333', color: '#fff' };

    // Fetch rooms from backend
    const fetchRooms = async () => {
        try {
            const res = await axios.get("http://localhost:8080/api/rooms");
            setRooms(res.data);
        } catch (err) {
            console.error("Error fetching rooms", err);
        }
    };

    useEffect(() => {
        fetchRooms();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this room type?")) {
            try {
                await axios.delete(`http://localhost:8080/api/rooms/${id}`);
                alert("Room deleted successfully!");
                fetchRooms(); // Refresh the list
            } catch (err) {
                console.error("Error deleting room", err);
                alert("Failed to delete room.");
            }
        }
    };

    const startEditing = (id, currentPrice) => {
        setEditingRoomId(id);
        setEditingPrice(currentPrice);
    };

    const cancelEditing = () => {
        setEditingRoomId(null);
        setEditingPrice('');
    };

    const handleUpdatePrice = async (id) => {
        const cleanPrice = editingPrice.replace(/[$,]/g, '').trim();
        
        // Validation check for updating price
        if (!cleanPrice || isNaN(cleanPrice) || parseFloat(cleanPrice) <= 0) {
            alert("Please enter a valid positive number for the updated price.");
            return;
        }

        try {
            await axios.put(`http://localhost:8080/api/rooms/${id}/price`, { price: cleanPrice });
            alert("Price updated successfully!");
            setEditingRoomId(null);
            fetchRooms(); // Refresh list
        } catch (err) {
            console.error("Error updating price", err);
            alert("Failed to update price.");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const cleanPrice = room.price.replace(/[$,]/g, '').trim();

        // Client-side Price Validation
        if (!cleanPrice || isNaN(cleanPrice) || parseFloat(cleanPrice) <= 0) {
            alert("Please enter a valid numeric amount for the price (e.g., 500 or 500.00).");
            return;
        }

        const roomData = {
            title: room.title,
            price: cleanPrice, // Adjusted to match your Room model (String price)
            description: room.desc,
            imageUrl: room.imageUrl,
            amenities: room.amenities.split(',').map(item => item.trim())
        };

        try {
            await axios.post("http://localhost:8080/api/rooms", roomData);
            alert("Luxury Room added to The Royal Palms!");
            setRoom({ title: '', price: '', desc: '', imageUrl: '', amenities: '' });
            fetchRooms(); // Refresh the list
        } catch (err) {
            console.error(err);
            alert("Failed to save room.");
        }
    };

    return (
        <div className="container py-5">
            {/* Form Section */}
            <div className="card bg-dark border-secondary p-4 mx-auto shadow-lg mb-5" style={{ maxWidth: '700px', backgroundColor: '#1e1e1e' }}>
                <h3 className="text-success fw-bold mb-4 text-uppercase" style={{ letterSpacing: '2px' }}>Add New Room Type</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="text-secondary small fw-bold">ROOM TITLE</label>
                        <input type="text" className="form-control shadow-none" style={inputStyle} placeholder="e.g. Penthouse Suite"
                            value={room.title} onChange={(e) => setRoom({ ...room, title: e.target.value })} required />
                    </div>

                    <div className="mb-3">
                        <label className="text-secondary small fw-bold">PRICE PER NIGHT</label>
                        <input type="text" className="form-control shadow-none" style={inputStyle} placeholder="e.g. 500.00"
                            value={room.price} onChange={(e) => setRoom({ ...room, price: e.target.value })} required />
                    </div>

                    <div className="mb-3">
                        <label className="text-secondary small fw-bold">IMAGE URL</label>
                        <input type="text" className="form-control shadow-none" style={inputStyle} placeholder="/assets/room/image.jpg"
                            value={room.imageUrl} onChange={(e) => setRoom({ ...room, imageUrl: e.target.value })} required />
                    </div>

                    <div className="mb-3">
                        <label className="text-secondary small fw-bold">DESCRIPTION</label>
                        <textarea className="form-control shadow-none" style={inputStyle} rows="3" placeholder="Describe the luxury experience..."
                            value={room.desc} onChange={(e) => setRoom({ ...room, desc: e.target.value })} required />
                    </div>

                    <div className="mb-4">
                        <label className="text-secondary small fw-bold">AMENITIES (Comma Separated)</label>
                        <input type="text" className="form-control shadow-none" style={inputStyle} placeholder="WiFi, AC, Private Butler, Spa"
                            value={room.amenities} onChange={(e) => setRoom({ ...room, amenities: e.target.value })} required />
                    </div>

                    <button type="submit" className="btn btn-success w-100 fw-bold py-3 text-uppercase" style={{ letterSpacing: '2px' }}>
                        Publish Room Type
                    </button>
                </form>
            </div>

            {/* List Management Section */}
            <div className="card bg-dark border-secondary p-4 mx-auto shadow-lg" style={{ backgroundColor: '#1e1e1e' }}>
                <h3 className="text-success fw-bold mb-4 text-uppercase" style={{ letterSpacing: '2px' }}>Manage Existing Rooms</h3>
                <div className="table-responsive">
                    <table className="table table-dark table-hover align-middle">
                        <thead className="text-secondary small fw-bold">
                            <tr>
                                <th>TITLE</th>
                                <th>PRICE</th>
                                <th className="text-end">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rooms.map((r) => (
                                <tr key={r.id}>
                                    <td>{r.title}</td>
                                    <td>
                                        {editingRoomId === r.id ? (
                                            <div className="input-group input-group-sm" style={{ maxWidth: '150px' }}>
                                                <span className="input-group-text bg-black border-secondary text-success">$</span>
                                                <input 
                                                    type="text" 
                                                    className="form-control bg-black text-white border-secondary shadow-none"
                                                    value={editingPrice}
                                                    onChange={(e) => setEditingPrice(e.target.value)}
                                                />
                                            </div>
                                        ) : (
                                            <span className="text-success fw-bold">${r.price}</span>
                                        )}
                                    </td>
                                    <td className="text-end">
                                        {editingRoomId === r.id ? (
                                            <>
                                                <button
                                                    onClick={() => handleUpdatePrice(r.id)}
                                                    className="btn btn-success btn-sm px-3 me-2"
                                                >
                                                    Save
                                                </button>
                                                <button
                                                    onClick={cancelEditing}
                                                    className="btn btn-outline-secondary btn-sm px-3 me-2"
                                                >
                                                    Cancel
                                                </button>
                                            </>
                                        ) : (
                                            <button
                                                onClick={() => startEditing(r.id, r.price)}
                                                className="btn btn-outline-warning btn-sm px-3 me-2"
                                            >
                                                Edit Price
                                            </button>
                                        )}
                                        <button
                                            onClick={() => handleDelete(r.id)}
                                            className="btn btn-outline-danger btn-sm px-3"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default AddRoom;