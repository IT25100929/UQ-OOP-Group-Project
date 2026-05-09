import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminReservations() {
    const [reservations, setReservations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadReservations();
    }, []);

    const loadReservations = async () => {
        try {
            const result = await axios.get("http://localhost:8080/api/reservations/all");
            setReservations(result.data);
            setLoading(false);
        } catch (error) {
            console.error("Error loading reservations", error);
            setLoading(false);
        }
    };

    const deleteReservation = async (id) => {
        if (window.confirm("Are you sure you want to delete this restaurant reservation?")) {
            try {
                await axios.delete(`http://localhost:8080/api/reservations/${id}`);
                loadReservations(); // Refresh list after deletion
            } catch (error) {
                alert("Error deleting reservation");
            }
        }
    };

    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="text-white">Restaurant Reservations</h2>
                <span className="badge bg-success">{reservations.length} Total Table Bookings</span>
            </div>

            <div className="card bg-black border-secondary">
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-dark table-hover m-0">
                            <thead className="table-secondary">
                                <tr>
                                    <th>ID</th>
                                    <th>Venue</th>
                                    <th>Guest Name</th>
                                    <th>Date & Time</th>
                                    <th>Guests</th>
                                    <th>Special Requests</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading ? (
                                    <tr><td colSpan="7" className="text-center py-4">Fetching data...</td></tr>
                                ) : reservations.length === 0 ? (
                                    <tr><td colSpan="7" className="text-center py-4 text-secondary">No reservations found.</td></tr>
                                ) : (
                                    reservations.map((res) => (
                                        <tr key={res.id} className="align-middle">
                                            <td>#{res.id}</td>
                                            <td className="text-success fw-bold">{res.restaurantName}</td>
                                            <td>
                                                <div>{res.name}</div>
                                                <small className="text-secondary">{res.email}</small>
                                            </td>
                                            <td>{res.date} at {res.time}</td>
                                            <td>{res.guests} Pax</td>
                                            <td style={{ maxWidth: '200px' }} className="text-truncate">
                                                {res.requests || <span className="text-muted">None</span>}
                                            </td>
                                            <td>
                                                <button
                                                    className="btn btn-outline-danger btn-sm"
                                                    onClick={() => deleteReservation(res.id)}
                                                >
                                                    <i className="bi bi-trash"></i> Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminReservations;