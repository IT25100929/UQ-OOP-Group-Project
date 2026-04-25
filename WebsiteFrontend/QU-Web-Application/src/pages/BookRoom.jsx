import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function BookRoom() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [roomData, setRoomData] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [bookingDetails, setBookingDetails] = useState({
        checkIn: '',
        checkOut: '',
        guestName: '',
        guestEmail: '',
    });

    useEffect(() => {
        const fetchRoom = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/rooms/${id}`);
                setRoomData(response.data);
            } catch (err) {
                console.error("Could not fetch room details", err);
            }
        };
        fetchRoom();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            // Updated to use axios for consistency
            const response = await axios.post(`http://localhost:8080/api/bookings/${id}`, bookingDetails);

            if (response.status === 200 || response.status === 201) {
                alert("Booking Successful! See you soon at The Royal Palms.");
                navigate('/rooms'); // Or to a success page
            }
        } catch (error) {
            console.error(error);
            alert("Booking failed. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!roomData) return <div className="text-white text-center py-5 bg-black vh-100">Loading Room Details...</div>;

    return (
        <div className="container-fluid bg-black text-white min-vh-100 m-0" style={{ paddingTop: '120px' }}>
            <div className="container pb-5">
                <Link to={`/room/${id}`} className="text-decoration-none text-secondary d-inline-block mb-4">
                    <span className="me-2">←</span> Change Room Selection
                </Link>

                <div className="row g-5">
                    {/* Form Section */}
                    <div className="col-lg-7">
                        <div className="p-4 rounded-4 bg-dark border border-secondary shadow-lg">
                            <h2 className="mb-4 fw-bold">Reservation Details</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label small text-uppercase text-secondary fw-bold">Full Name</label>
                                    <input
                                        type="text"
                                        className="form-control bg-black text-white border-secondary shadow-none p-3"
                                        placeholder="John Doe"
                                        required
                                        value={bookingDetails.guestName}
                                        onChange={(e) => setBookingDetails({ ...bookingDetails, guestName: e.target.value })}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label small text-uppercase text-secondary fw-bold">Email Address</label>
                                    <input
                                        type="email"
                                        className="form-control bg-black text-white border-secondary shadow-none p-3"
                                        placeholder="john@example.com"
                                        required
                                        value={bookingDetails.guestEmail}
                                        onChange={(e) => setBookingDetails({ ...bookingDetails, guestEmail: e.target.value })}
                                    />
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label small text-uppercase text-secondary fw-bold">Check-In</label>
                                        <input
                                            type="date"
                                            className="form-control bg-black text-white border-secondary shadow-none p-3"
                                            required
                                            value={bookingDetails.checkIn}
                                            onChange={(e) => setBookingDetails({ ...bookingDetails, checkIn: e.target.value })}
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label small text-uppercase text-secondary fw-bold">Check-Out</label>
                                        <input
                                            type="date"
                                            className="form-control bg-black text-white border-secondary shadow-none p-3"
                                            required
                                            value={bookingDetails.checkOut}
                                            onChange={(e) => setBookingDetails({ ...bookingDetails, checkOut: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <button disabled={isSubmitting} className="btn btn-success w-100 py-3 mt-3 fw-bold text-uppercase" style={{ letterSpacing: '1px' }}>
                                    {isSubmitting ? "PROCESSING..." : "CONFIRM RESERVATION"}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Summary Sidebar */}
                    <div className="col-lg-5">
                        <div className="card bg-dark border-secondary text-white sticky-top shadow-lg" style={{ top: '120px', borderRadius: '15px', overflow: 'hidden' }}>
                            <img
                                src={roomData.imageUrl?.startsWith('http') ? roomData.imageUrl : `/assets/room/${roomData.imageUrl}`}
                                className="card-img-top"
                                alt={roomData.title}
                                style={{ height: '200px', objectFit: 'cover' }}
                            />
                            <div className="card-body p-4">
                                <h4 className="fw-bold">{roomData.title}</h4>
                                <p className="text-secondary small mb-3">Luxury Palms Resident Suite</p>
                                <hr className="border-secondary" />
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="text-secondary">Rate per night:</span>
                                    <span className="fw-bold text-success h4 mb-0">
                                        ${typeof roomData.price === 'number' ? roomData.price.toFixed(2) : roomData.price}
                                    </span>
                                </div>
                                <div className="mt-4 p-3 rounded bg-black text-secondary x-small">
                                    <i className="bi bi-info-circle me-2"></i>
                                    Taxes and fees will be calculated at check-in.
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