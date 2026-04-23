import React, { useState } from 'react';
import axios from 'axios';

function AddRoom() {
    const [room, setRoom] = useState({ title: '', price: '', desc: '', amenities: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Converting comma-separated string to array for Spring Boot compatibility
        const roomData = { ...room, amenities: room.amenities.split(',') };

        try {
            await axios.post("http://localhost:8080/api/rooms", roomData);
            alert("Room type created!");
        } catch (err) {
            alert("Failed to save room.");
        }
    };

    return (
        <div className="card bg-dark border-secondary p-4 mx-auto" style={{ maxWidth: '600px' }}>
            <h3 className="text-info mb-4">Create Room Type</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" className="form-control mb-3 bg-black border-secondary text-white" placeholder="Room Title (e.g. Deluxe)"
                    onChange={(e) => setRoom({ ...room, title: e.target.value })} />
                <input type="text" className="form-control mb-3 bg-black border-secondary text-white" placeholder="Amenities (WiFi, AC, TV)"
                    onChange={(e) => setRoom({ ...room, amenities: e.target.value })} />
                <button type="submit" className="btn btn-info w-100 rounded-pill">Add Room</button>
            </form>
        </div>
    );
}

export default AddRoom;