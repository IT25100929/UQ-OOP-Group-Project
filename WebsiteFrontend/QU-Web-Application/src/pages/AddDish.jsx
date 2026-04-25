import React, { useState } from 'react';
import axios from 'axios';

function AddDish() {
    // Initial state matching your Spring Boot MenuItem entity
    const initialState = {
        name: '',
        price: '',
        category: 'Main Course',
        description: '',
        image: ''
    };

    const [dish, setDish] = useState(initialState);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Note: The URL must match the @PostMapping in your Controller
            await axios.post("http://localhost:8080/api/menu", dish);
            alert("Dish added successfully!");
            setDish(initialState);
        } catch (err) {
            console.error(err);
            alert("Error connecting to backend. Check if Spring Boot is running.");
        }
    };

    return (
        <div className="card bg-dark border-secondary p-4 mx-auto shadow-lg" style={{ maxWidth: '600px' }}>
            <h3 className="text-success mb-4">Add New Menu Item</h3>
            <form onSubmit={handleSubmit}>
                {/* Name */}
                <div className="mb-3">
                    <label className="text-secondary small">Dish Name</label>
                    <input type="text" className="form-control bg-black border-secondary text-white"
                        value={dish.name} onChange={(e) => setDish({ ...dish, name: e.target.value })} required />
                </div>

                {/* Price */}
                <div className="mb-3">
                    <label className="text-secondary small">Price (LKR)</label>
                    <input type="number" className="form-control bg-black border-secondary text-white"
                        value={dish.price} onChange={(e) => setDish({ ...dish, price: e.target.value })} required />
                </div>

                {/* Category Dropdown */}
                <div className="mb-3">
                    <label className="text-secondary small">Category</label>
                    <select className="form-select bg-black border-secondary text-white"
                        value={dish.category} onChange={(e) => setDish({ ...dish, category: e.target.value })}>
                        <option value="Appetizers">Appetizers</option>
                        <option value="Main Course">Main Course</option>
                        <option value="Desserts">Desserts</option>
                        <option value="Beverages">Beverages</option>
                    </select>
                </div>

                {/* Description */}
                <div className="mb-3">
                    <label className="text-secondary small">Description</label>
                    <textarea className="form-control bg-black border-secondary text-white" rows="3"
                        value={dish.description} onChange={(e) => setDish({ ...dish, description: e.target.value })} required />
                </div>

                {/* Image URL */}
                <div className="mb-3">
                    <label className="text-secondary small">Image URL (e.g., /assets/food.jpg)</label>
                    <input type="text" className="form-control bg-black border-secondary text-white"
                        value={dish.image} onChange={(e) => setDish({ ...dish, image: e.target.value })} placeholder="Enter image path or URL" />
                </div>

                <button type="submit" className="btn btn-success w-100 rounded-pill mt-3 fw-bold">Save to Menu</button>
            </form>
        </div>
    );
}

export default AddDish;