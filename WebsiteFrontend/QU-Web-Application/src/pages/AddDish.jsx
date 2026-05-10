import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AddDish() {
    const initialState = {
        name: '',
        price: '',
        category: 'Main Course',
        description: '',
        image: ''
    };

    const [dish, setDish] = useState(initialState);
    const [menuItems, setMenuItems] = useState([]);

    // 1. Load existing menu items
    const fetchMenu = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/menu");
            setMenuItems(response.data);
        } catch (err) {
            console.error("Failed to fetch menu:", err);
        }
    };

    useEffect(() => {
        fetchMenu();
    }, []);

    // 2. Handle adding new dish
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8080/api/menu", dish);
            alert("Dish added successfully!");
            setDish(initialState);
            fetchMenu(); // Refresh the list
        } catch (err) {
            console.error(err);
            alert("Error connecting to backend.");
        }
    };

    // 3. Handle deleting a dish
    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this item?")) {
            try {
                await axios.delete(`http://localhost:8080/api/menu/${id}`);
                alert("Item deleted successfully");
                fetchMenu(); // Refresh the list
            } catch (err) {
                console.error(err);
                alert("Error deleting item.");
            }
        }
    };

    return (
        <div className="container py-5">
            {/* ADD DISH FORM */}
            <div className="card bg-dark border-secondary p-4 mx-auto shadow-lg mb-5" style={{ maxWidth: '600px' }}>
                <h3 className="text-success mb-4 text-center">Add New Menu Item</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="text-secondary small">Dish Name</label>
                        <input type="text" className="form-control bg-black border-secondary text-white shadow-none"
                            value={dish.name} onChange={(e) => setDish({ ...dish, name: e.target.value })} required />
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="text-secondary small">Price (LKR)</label>
                            <input type="number" className="form-control bg-black border-secondary text-white shadow-none"
                                value={dish.price} onChange={(e) => setDish({ ...dish, price: e.target.value })} required />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className="text-secondary small">Category</label>
                            <select className="form-select bg-black border-secondary text-white shadow-none"
                                value={dish.category} onChange={(e) => setDish({ ...dish, category: e.target.value })}>
                                <option value="Appetizers">Appetizers</option>
                                <option value="Main Course">Main Course</option>
                                <option value="Desserts">Desserts</option>
                                <option value="Beverages">Beverages</option>
                            </select>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="text-secondary small">Description</label>
                        <textarea className="form-control bg-black border-secondary text-white shadow-none" rows="2"
                            value={dish.description} onChange={(e) => setDish({ ...dish, description: e.target.value })} required />
                    </div>
                    <div className="mb-3">
                        <label className="text-secondary small">Image Filename (e.g., burger.jpg)</label>
                        <input type="text" className="form-control bg-black border-secondary text-white shadow-none"
                            value={dish.image} onChange={(e) => setDish({ ...dish, image: e.target.value })} />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-pill mt-3 fw-bold">Save to Menu</button>
                </form>
            </div>

            {/* MANAGE MENU ITEMS TABLE */}
            <div className="card bg-dark border-secondary p-4 shadow-lg">
                <h3 className="text-info mb-4">Existing Menu Items</h3>
                <div className="table-responsive">
                    <table className="table table-dark table-hover align-middle">
                        <thead className="text-secondary border-secondary">
                            <tr>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th className="text-end">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {menuItems.map((item) => (
                                <tr key={item.id}>
                                    <td className="fw-bold">{item.name}</td>
                                    <td><span className="badge bg-secondary">{item.category}</span></td>
                                    <td>Rs. {item.price}</td>
                                    <td className="text-end">
                                        <button
                                            className="btn btn-outline-danger btn-sm rounded-pill px-3"
                                            onClick={() => handleDelete(item.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {menuItems.length === 0 && (
                                <tr>
                                    <td colSpan="4" className="text-center text-secondary py-4">No items in menu.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default AddDish;