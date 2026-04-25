import React, { useState } from 'react';
import axios from 'axios';

function AddRoom() {
    const [room, setRoom] = useState({
        title: '',
        price: '',
        desc: '',
        imageUrl: '',
        amenities: ''
    });

    const inputStyle = { backgroundColor: '#000', border: '1px solid #333', color: '#fff' };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Convert comma string to Array, matching the Java List<String>
        const roomData = {
            ...room,
            description: room.desc, // mapping 'desc' to 'description' for the backend
            amenities: room.amenities.split(',').map(item => item.trim())
        };

        try {
            await axios.post("http://localhost:8080/api/rooms", roomData);
            alert("Luxury Room added to The Royal Palms!");
            setRoom({ title: '', price: '', desc: '', imageUrl: '', amenities: '' });
        } catch (err) {
            console.error(err);
            alert("Failed to save room.");
        }
    };

    return (
        <div className="container py-5">
            <div className="card bg-dark border-secondary p-4 mx-auto shadow-lg" style={{ maxWidth: '700px', backgroundColor: '#1e1e1e' }}>
                <h3 className="text-success fw-bold mb-4 text-uppercase" style={{ letterSpacing: '2px' }}>Add New Room Type</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="text-secondary small fw-bold">ROOM TITLE</label>
                        <input type="text" className="form-control shadow-none" style={inputStyle} placeholder="e.g. Penthouse Suite"
                            value={room.title} onChange={(e) => setRoom({ ...room, title: e.target.value })} required />
                    </div>

                    <div className="mb-3">
                        <label className="text-secondary small fw-bold">PRICE PER NIGHT</label>
                        <input type="text" className="form-control shadow-none" style={inputStyle} placeholder="e.g. $500"
                            value={room.price} onChange={(e) => setRoom({ ...room, price: e.target.value })} required />
                    </div>

                    <div className="mb-3">
                        <label className="text-secondary small fw-bold">IMAGE URL</label>
                        <input type="text" className="form-control shadow-none" style={inputStyle} placeholder="Paste image link here"
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
        </div>
    );
}

export default AddRoom;