import React, { useState } from 'react';
import axios from 'axios';

function AddDish() {
    const [dish, setDish] = useState({ name: '', price: '', category: 'Main Course', description: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8080/api/menu", dish);
            alert("Dish added successfully!");
            setDish({ name: '', price: '', category: 'Main Course', description: '' });
        } catch (err) {
            alert("Error connecting to backend.");
        }
    };

    return (
        <div className="card bg-dark border-secondary p-4 mx-auto" style={{ maxWidth: '600px' }}>
            <h3 className="text-success mb-4">Add New Menu Item</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="text-secondary small">Dish Name</label>
                    <input type="text" className="form-control bg-black border-secondary text-white"
                        value={dish.name} onChange={(e) => setDish({ ...dish, name: e.target.value })} required />
                </div>
                <div className="mb-3">
                    <label className="text-secondary small">Price (LKR)</label>
                    <input type="number" className="form-control bg-black border-secondary text-white"
                        value={dish.price} onChange={(e) => setDish({ ...dish, price: e.target.value })} required />
                </div>
                <button type="submit" className="btn btn-success w-100 rounded-pill mt-3">Save to Menu</button>
            </form>
        </div>
    );
}

export default AddDish;