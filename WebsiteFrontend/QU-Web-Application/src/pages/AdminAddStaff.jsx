import React, { useState } from 'react';
import axios from 'axios';

function AdminAddStaff() {
    const [staff, setStaff] = useState({ name: '', department: '', contact: '', email: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8080/api/staff", staff);
            alert("Leader added to the board!");
            setStaff({ name: '', department: '', contact: '', email: '' });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="text-success mb-4">Add Leadership Member</h2>
            <form onSubmit={handleSubmit} className="bg-black p-4 border border-secondary">
                <div className="mb-3">
                    <label className="text-secondary">Full Name</label>
                    <input type="text" className="form-control bg-dark text-white border-secondary"
                        value={staff.name} onChange={(e) => setStaff({ ...staff, name: e.target.value })} required />
                </div>
                <div className="mb-3">
                    <label className="text-secondary">Department / Role</label>
                    <input type="text" className="form-control bg-dark text-white border-secondary"
                        value={staff.department} onChange={(e) => setStaff({ ...staff, department: e.target.value })} required />
                </div>
                <div className="mb-3">
                    <label className="text-secondary">Contact Number</label>
                    <input type="text" className="form-control bg-dark text-white border-secondary"
                        value={staff.contact} onChange={(e) => setStaff({ ...staff, contact: e.target.value })} required />
                </div>
                <div className="mb-3">
                    <label className="text-secondary">Email</label>
                    <input type="email" className="form-control bg-dark text-white border-secondary"
                        value={staff.email} onChange={(e) => setStaff({ ...staff, email: e.target.value })} required />
                </div>
                <button type="submit" className="btn btn-success">Add to Board</button>
            </form>
        </div>
    );
}
export default AdminAddStaff;