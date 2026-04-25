import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import hotelImage1 from "../assets/pexels-aksinfo7-36749693.jpg";

function BookTable() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [restaurant, setRestaurant] = useState(null);
    const [loading, setLoading] = useState(true);

    const [formData, setFormData] = useState({
        date: '',
        time: '19:00',
        guests: 2,
        name: '',
        email: '',
        requests: ''
    });

    // Fetch the specific restaurant details from your existing API
    useEffect(() => {
        const fetchRestaurant = async () => {
            try {
                const res = await axios.get(`http://localhost:8080/api/dining/${id}`);
                setRestaurant(res.data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching restaurant", err);
                setLoading(false);
            }
        };
        fetchRestaurant();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = {
                ...formData,
                restaurantId: id,
                restaurantName: restaurant?.name || "Unknown Restaurant"
            };

            await axios.post("http://localhost:8080/api/reservations", payload);

            alert(`Reservation confirmed at ${restaurant?.name}!`);
            navigate('/dining');
        } catch (err) {
            alert("Failed to secure reservation. Please try again.");
            console.error(err);
        }
    };

    if (loading) return <div className="bg-black vh-100 text-center pt-5 text-white">Loading...</div>;

    const inputStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        color: 'white',
        border: '1px solid #444',
        borderRadius: '0',
        padding: '15px'
    };

    return (
        <div className="container-fluid min-vh-100 bg-black text-white p-0 pt-lg-5">
            <div className="d-block d-lg-none" style={{ height: '80px' }}></div>
            <div className="row g-0 min-vh-100 mt-lg-4">

                {/* Left Side: Visual & Info */}
                <div className="col-lg-5 d-none d-lg-block position-relative">
                    <img
                        /* Logic: If the restaurant data has loaded and has an imageUrl, 
                           use that from your public folder. Otherwise, fall back to hotelImage1.
                        */
                        src={restaurant?.imageUrl
                            ? `/assets/dining/${restaurant.imageUrl}`
                            : hotelImage1
                        }
                        alt={restaurant?.name || "Restaurant"}
                        className="w-100 h-100 position-absolute"
                        style={{ objectFit: 'cover', opacity: 0.5 }} // Bumped opacity slightly for better visibility
                    />
                    {/* Added a subtle overlay to make the text pop even more */}
                    <div className="position-absolute top-0 start-0 w-100 h-100"
                        style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.7), transparent)' }}>
                    </div>

                    <div className="position-absolute top-50 start-50 translate-middle text-center w-75">
                        <small className="text-info text-uppercase fw-bold mb-2 d-block" style={{ letterSpacing: '3px' }}>
                            {restaurant?.type}
                        </small>
                        <h1 className="display-4 fw-bold mb-4">{restaurant?.name}</h1>
                        <div style={{ width: '50px', height: '2px', background: 'white', margin: '0 auto' }}></div>
                    </div>
                </div>

                {/* Right Side: Booking Form */}
                <div className="col-lg-7 d-flex align-items-center justify-content-center p-4 p-md-5">
                    <div style={{ maxWidth: '600px', width: '100%' }}>
                        <h2 className="mb-2 fw-bold text-uppercase" style={{ letterSpacing: '2px' }}>Reserve a Table</h2>
                        <p className="mb-5" style={{ color: '#888' }}>Secure your dining experience at {restaurant?.name}.</p>

                        <form onSubmit={handleSubmit} className="row g-4">
                            <div className="col-md-6">
                                <label className="form-label small text-uppercase fw-bold text-secondary">Date</label>
                                <input type="date" name="date" required style={inputStyle} className="form-control custom-input" onChange={handleChange} />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label small text-uppercase fw-bold text-secondary">Time</label>
                                <select name="time" style={inputStyle} className="form-select custom-input" onChange={handleChange} value={formData.time}>
                                    <option className="bg-black" value="18:00">6:00 PM</option>
                                    <option className="bg-black" value="19:00">7:00 PM</option>
                                    <option className="bg-black" value="20:00">8:00 PM</option>
                                    <option className="bg-black" value="21:00">9:00 PM</option>
                                </select>
                            </div>
                            <div className="col-md-12">
                                <label className="form-label small text-uppercase fw-bold text-secondary">Number of Guests</label>
                                <input type="number" name="guests" min="1" max="20" style={inputStyle} className="form-control custom-input" onChange={handleChange} value={formData.guests} />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label small text-uppercase fw-bold text-secondary">Full Name</label>
                                <input type="text" name="name" required placeholder="John Doe" style={inputStyle} className="form-control custom-input" onChange={handleChange} />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label small text-uppercase fw-bold text-secondary">Email Address</label>
                                <input type="email" name="email" required placeholder="john@example.com" style={inputStyle} className="form-control custom-input" onChange={handleChange} />
                            </div>
                            <div className="col-12">
                                <label className="form-label small text-uppercase fw-bold text-secondary">Special Requests</label>
                                <textarea name="requests" rows="3" placeholder="Allergies, anniversaries..." style={inputStyle} className="form-control custom-input" onChange={handleChange}></textarea>
                            </div>
                            <div className="col-12 mt-5">
                                <button type="submit" className="btn btn-light w-100 py-3 fw-bold text-uppercase rounded-0">
                                    Confirm Reservation
                                </button>
                                <button type="button" onClick={() => navigate(-1)} className="btn btn-link text-secondary w-100 mt-2 text-decoration-none small">
                                    Cancel and Go Back
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <style>{`
                .custom-input::placeholder { color: #555 !important; }
                .custom-input:focus { 
                    background-color: rgba(255, 255, 255, 0.1) !important;
                    border-color: #0dcaf0 !important;
                    box-shadow: none !important;
                    color: white !important;
                }
                input[type="date"]::-webkit-calendar-picker-indicator { filter: invert(1); }
            `}</style>
        </div>
    );
}

export default BookTable;