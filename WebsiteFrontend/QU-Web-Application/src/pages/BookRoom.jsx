import { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate, Link } from 'react-router-dom';

function BookRoom() {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const [roomData, setRoomData] = useState(location.state?.roomData || null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [bookingDetails, setBookingDetails] = useState({
        checkIn: '',
        checkOut: '',
        guestName: '',
        guestEmail: '',
    });

    useEffect(() => {
        if (!roomData) {
            fetch(`http://localhost:8080/api/rooms/${id}`)
                .then(res => res.json())
                .then(data => setRoomData(data))
                .catch(err => console.error("Could not fetch room details", err));
        }
    }, [id, roomData]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await fetch(`http://localhost:8080/api/bookings/${id}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bookingDetails),
            });

            if (response.ok) {
                navigate('/success');
            } else {
                alert("Booking failed. Please check availability.");
            }
        } catch (error) {
            alert("Connection error to server.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!roomData) return <div className="text-white text-center py-5 bg-black vh-100">Loading Room Details...</div>;

    return (
        /* Use only ONE main wrapper. mt-0 ensures it stays flush with the header */
        <div className="container-fluid bg-black text-white min-vh-100 m-0" style={{ paddingTop: '150px' }}>
            <div className="container pb-5"> {/* Added pb-5 for bottom spacing too */}
                <div className="row g-5">

                    {/* Form Section */}
                    <div className="col-lg-7">
                        <div className="p-4 rounded bg-dark border border-secondary shadow">
                            <h2 className="mb-4 fw-bold">Reservation Details</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label small text-uppercase text-light">Full Name</label>
                                    <input
                                        type="text"
                                        className="form-control bg-black text-white border-secondary shadow-none"
                                        required
                                        onChange={(e) => setBookingDetails({ ...bookingDetails, guestName: e.target.value })}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label small text-uppercase text-light">Email</label>
                                    <input
                                        type="email"
                                        className="form-control bg-black text-white border-secondary shadow-none"
                                        required
                                        onChange={(e) => setBookingDetails({ ...bookingDetails, guestEmail: e.target.value })}
                                    />
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label small text-uppercase text-light">Check-In</label>
                                        <input
                                            type="date"
                                            className="form-control bg-black text-white border-secondary shadow-none"
                                            required
                                            onChange={(e) => setBookingDetails({ ...bookingDetails, checkIn: e.target.value })}
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label small text-uppercase text-light">Check-Out</label>
                                        <input
                                            type="date"
                                            className="form-control bg-black text-white border-secondary shadow-none"
                                            required
                                            onChange={(e) => setBookingDetails({ ...bookingDetails, checkOut: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <button disabled={isSubmitting} className="btn btn-outline-light w-100 py-3 mt-3 fw-bold">
                                    {isSubmitting ? "BOOKING..." : "CONFIRM RESERVATION"}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Summary Sidebar */}
                    <div className="col-lg-5">
                        <div className="card bg-dark border-secondary text-white sticky-top" style={{ top: '100px' }}>
                            <img src={roomData.image} className="card-img-top" alt={roomData.name} style={{ height: '250px', objectFit: 'cover' }} />
                            <div className="card-body">
                                <h5 className="fw-bold">{roomData.name}</h5>
                                <p className="text-muted small">{roomData.type}</p>
                                <hr className="border-secondary" />
                                <div className="d-flex justify-content-between">
                                    <span>Rate per night:</span>
                                    <span className="fw-bold text-success">${roomData.price}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default BookRoom;