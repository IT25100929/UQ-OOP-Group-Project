import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminBookings() {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        loadBookings();
    }, []);

    const loadBookings = async () => {
        try {
            // Updated to match your @RequestMapping("/api/bookings") + /all
            const result = await axios.get("http://localhost:8080/api/bookings/all");
            setBookings(result.data);
        } catch (error) {
            console.error("Error loading bookings", error);
        }
    };

    const deleteBooking = async (id) => {
        if (window.confirm("Are you sure you want to delete this booking?")) {
            await axios.delete(`http://localhost:8080/api/bookings/${id}`);
            loadBookings(); // Refresh the list
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="text-white mb-4">Guest Bookings</h2>
            <div className="table-responsive">
                <table className="table table-dark table-hover border-secondary">
                    <thead className="text-success">
                        <tr>
                            <th>ID</th>
                            <th>Guest Name</th>
                            <th>Email</th>
                            <th>Room ID</th>
                            <th>Check-In</th>
                            <th>Check-Out</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking) => (
                            <tr key={booking.id}>
                                <td>{booking.id}</td>
                                <td>{booking.guestName}</td>
                                <td>{booking.guestEmail}</td>
                                <td>{booking.roomId}</td>
                                <td>{booking.checkIn}</td>
                                <td>{booking.checkOut}</td>
                                <td>
                                    <button
                                        className="btn btn-outline-danger btn-sm"
                                        onClick={() => deleteBooking(booking.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {bookings.length === 0 && (
                    <p className="text-center text-secondary">No bookings found.</p>
                )}
            </div>
        </div>
    );
}

export default AdminBookings;