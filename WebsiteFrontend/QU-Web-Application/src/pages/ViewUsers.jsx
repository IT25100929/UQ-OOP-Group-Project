import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ViewUsers() {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const res = await axios.get("http://localhost:8080/api/users");
            setUsers(res.data);
        } catch (err) {
            console.error("Error fetching users", err);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleRoleChange = async (id, newRole) => {
        try {
            await axios.put(`http://localhost:8080/api/users/${id}/role`, { role: newRole });
            alert(`Role updated to ${newRole}`);
            fetchUsers();
        } catch (err) {
            console.error("Error updating role", err);
            alert("Failed to update role.");
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this user? This action cannot be undone.")) {
            try {
                await axios.delete(`http://localhost:8080/api/users/${id}`);
                alert("User deleted.");
                fetchUsers();
            } catch (err) {
                console.error("Error deleting user", err);
                alert("Failed to delete user.");
            }
        }
    };

    return (
        <div className="container-fluid">
            <div className="card bg-dark border-secondary p-4 shadow-lg">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3 className="text-success fw-bold text-uppercase" style={{ letterSpacing: '2px' }}>
                        Manage Users
                    </h3>
                    <span className="badge bg-success">{users.length} Total Users</span>
                </div>

                <div className="table-responsive">
                    <table className="table table-dark table-hover align-middle">
                        <thead className="text-secondary small fw-bold border-secondary text-uppercase">
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Assign Role</th>
                                <th className="text-end">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id} className="border-secondary">
                                    <td className="fw-bold">{user.fullName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phoneNumber}</td>
                                    <td>
                                        <select
                                            className="form-select form-select-sm bg-black text-white border-secondary w-auto shadow-none"
                                            value={user.role}
                                            onChange={(e) => handleRoleChange(user.id, e.target.value)}
                                        >
                                            <option value="USER">USER</option>
                                            <option value="ADMIN">ADMIN</option>
                                            <option value="STAFF">STAFF</option>
                                        </select>
                                    </td>
                                    <td className="text-end">
                                        <button
                                            className="btn btn-outline-danger btn-sm px-3 rounded-pill"
                                            onClick={() => handleDelete(user.id)}
                                        >
                                            <i className="bi bi-trash me-1"></i> Delete
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

export default ViewUsers;