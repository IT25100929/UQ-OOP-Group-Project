import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminAddStaff() {
    const [staffList, setStaffList] = useState([]);
    const [staff, setStaff] = useState({ name: '', department: '', contact: '', email: '' });

    // 1. Fetch staff members
    const fetchStaff = async () => {
        try {
            const res = await axios.get("http://localhost:8080/api/staff");
            setStaffList(res.data);
        } catch (err) {
            console.error("Error fetching staff:", err);
        }
    };

    useEffect(() => {
        fetchStaff();
    }, []);

    // 2. Validation Logic
    const validateForm = () => {
        const { name, contact, email } = staff;

        if (name.trim().length < 3) {
            alert("Full name must be at least 3 characters.");
            return false;
        }

        // Sri Lankan Phone Validation (Mobile/Landline)
        const phoneRegex = /^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|91)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{6}$/;
        if (!phoneRegex.test(contact)) {
            alert("Please enter a valid Sri Lankan contact number.");
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return false;
        }

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            await axios.post("http://localhost:8080/api/staff", staff);
            alert("Leader added to the board!");
            setStaff({ name: '', department: '', contact: '', email: '' });
            fetchStaff(); // Refresh list
        } catch (err) {
            console.error(err);
            alert("Error saving member.");
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Remove this member from the leadership board?")) {
            try {
                await axios.delete(`http://localhost:8080/api/staff/${id}`);
                alert("Member removed.");
                fetchStaff();
            } catch (err) {
                console.error(err);
                alert("Error deleting member.");
            }
        }
    };

    return (
        <div className="container mt-4 pb-5">
            <h2 className="text-success mb-4 text-uppercase fw-bold">Leadership Management</h2>

            {/* Form Section */}
            <div className="bg-black p-4 border border-secondary mb-5 shadow-lg">
                <h5 className="text-white mb-3">Add New Member</h5>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="text-secondary small fw-bold">FULL NAME</label>
                            <input type="text" className="form-control bg-dark text-white border-secondary shadow-none"
                                value={staff.name} onChange={(e) => setStaff({ ...staff, name: e.target.value })} required />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className="text-secondary small fw-bold">DEPARTMENT / ROLE</label>
                            <input type="text" className="form-control bg-dark text-white border-secondary shadow-none"
                                value={staff.department} onChange={(e) => setStaff({ ...staff, department: e.target.value })} required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="text-secondary small fw-bold">CONTACT NUMBER</label>
                            <input type="text" className="form-control bg-dark text-white border-secondary shadow-none"
                                placeholder="07XXXXXXXX" value={staff.contact} onChange={(e) => setStaff({ ...staff, contact: e.target.value })} required />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className="text-secondary small fw-bold">EMAIL</label>
                            <input type="email" className="form-control bg-dark text-white border-secondary shadow-none"
                                value={staff.email} onChange={(e) => setStaff({ ...staff, email: e.target.value })} required />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-success px-4 fw-bold">Add to Board</button>
                </form>
            </div>

            {/* Table Section */}
            <div className="bg-black p-4 border border-secondary shadow-lg">
                <h5 className="text-white mb-3">Current Leadership Board</h5>
                <div className="table-responsive">
                    <table className="table table-dark table-hover align-middle">
                        <thead className="text-secondary small border-secondary">
                            <tr>
                                <th>NAME</th>
                                <th>DEPARTMENT</th>
                                <th>CONTACT</th>
                                <th className="text-end">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {staffList.map((member) => (
                                <tr key={member.id} className="border-secondary">
                                    <td className="fw-bold">{member.name}</td>
                                    <td>{member.department}</td>
                                    <td>{member.contact}</td>
                                    <td className="text-end">
                                        <button onClick={() => handleDelete(member.id)} className="btn btn-outline-danger btn-sm">
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

export default AdminAddStaff;