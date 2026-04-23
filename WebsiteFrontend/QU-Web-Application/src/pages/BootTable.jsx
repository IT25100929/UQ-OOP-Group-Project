import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import hotelImage1 from "../assets/pexels-aksinfo7-36749693.jpg";

function BookTable() {
    const { id } = useParams();
    const navigate = useNavigate();

    const restaurants = [
        { id: 1, name: "The Grand Buffet", type: "International" },
        { id: 2, name: "Azure Grill", type: "Seafood & Steak" },
        { id: 3, name: "Sakura Zen", type: "Japanese Fusion" },
        { id: 4, name: "The Spice Route", type: "Indian Fine Dining" },
        { id: 5, name: "Velvet Lounge", type: "Tapas & Cocktails" },
    ];

    const selectedRestaurant = restaurants.find(r => r.id === parseInt(id)) || restaurants[0];

    const [formData, setFormData] = useState({
        date: '', time: '19:00', guests: '2', name: '', email: '', requests: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Custom style for consistent visibility
    const inputStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        color: 'white',
        border: '1px solid #444',
        borderRadius: '0',
        padding: '15px'
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Reservation confirmed for ${selectedRestaurant.name}!`);
        navigate('/dining');
    };

    return (
        /* The pt-5 and mt-5 here push the content down so the header doesn't cover it */
        <div className="container-fluid min-vh-100 bg-black text-white p-0 pt-lg-5">

            {/* Added a spacer for mobile header clearance */}
            <div className="d-block d-lg-none" style={{ height: '80px' }}></div>

            <div className="row g-0 min-vh-100 mt-lg-4">

                {/* Left Side: Visual & Info */}
                <div className="col-lg-5 d-none d-lg-block position-relative">
                    <img
                        src={hotelImage1}
                        alt="Restaurant"
                        className="w-100 h-100 position-absolute"
                        style={{ objectFit: 'cover', opacity: 0.4 }}
                    />
                    <div className="position-absolute top-50 start-50 translate-middle text-center w-75">
                        <small className="text-info text-uppercase fw-bold mb-2 d-block" style={{ letterSpacing: '3px' }}>
                            {selectedRestaurant.type}
                        </small>
                        <h1 className="display-4 fw-bold mb-4">{selectedRestaurant.name}</h1>
                        <div style={{ width: '50px', height: '2px', background: 'white', margin: '0 auto' }}></div>
                    </div>
                </div>

                {/* Right Side: Booking Form */}
                <div className="col-lg-7 d-flex align-items-center justify-content-center p-4 p-md-5">
                    <div style={{ maxWidth: '600px', width: '100%' }}>
                        <h2 className="mb-2 fw-bold text-uppercase" style={{ letterSpacing: '2px' }}>Reserve a Table</h2>
                        <p className="mb-5" style={{ color: '#888' }}>Secure your dining experience at {selectedRestaurant.name}.</p>

                        <form onSubmit={handleSubmit} className="row g-4">
                            <div className="col-md-6">
                                <label className="form-label small text-uppercase fw-bold" style={{ color: '#bbb' }}>Date</label>
                                <input
                                    type="date" name="date" required
                                    style={inputStyle} className="form-control custom-input"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label small text-uppercase fw-bold" style={{ color: '#bbb' }}>Time</label>
                                <select
                                    name="time" style={inputStyle}
                                    className="form-select custom-input" onChange={handleChange}
                                >
                                    <option className="bg-black" value="18:00">6:00 PM</option>
                                    <option className="bg-black" value="19:00">7:00 PM</option>
                                    <option className="bg-black" value="20:00">8:00 PM</option>
                                    <option className="bg-black" value="21:00">9:00 PM</option>
                                </select>
                            </div>
                            <div className="col-md-12">
                                <label className="form-label small text-uppercase fw-bold" style={{ color: '#bbb' }}>Number of Guests</label>
                                <input
                                    type="number" name="guests" min="1" max="20" placeholder="Number of guests"
                                    style={inputStyle} className="form-control custom-input"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label small text-uppercase fw-bold" style={{ color: '#bbb' }}>Full Name</label>
                                <input
                                    type="text" name="name" required placeholder="Enter your full name"
                                    style={inputStyle} className="form-control custom-input"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label small text-uppercase fw-bold" style={{ color: '#bbb' }}>Email Address</label>
                                <input
                                    type="email" name="email" required placeholder="email@example.com"
                                    style={inputStyle} className="form-control custom-input"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-12">
                                <label className="form-label small text-uppercase fw-bold" style={{ color: '#bbb' }}>Special Requests</label>
                                <textarea
                                    name="requests" rows="3" placeholder="Allergies, anniversaries, or seating preferences..."
                                    style={inputStyle} className="form-control custom-input"
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <div className="col-12 mt-5">
                                <button type="submit" className="btn btn-light w-100 py-3 fw-bold text-uppercase rounded-0" style={{ letterSpacing: '2px' }}>
                                    Confirm Reservation
                                </button>
                                <button type="button" onClick={() => navigate(-1)} className="btn btn-link text-light w-100 mt-2 text-decoration-none small">
                                    Cancel and Go Back
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Internal CSS Fix for Placeholders */}
            <style>{`
                .custom-input::placeholder {
                    color: #666 !important;
                    opacity: 1;
                }
                .custom-input:focus {
                    background-color: rgba(255, 255, 255, 0.1) !important;
                    color: white !important;
                    border-color: #0dcaf0 !important;
                    box-shadow: none !important;
                }
                /* Fixing date icon color for dark theme */
                input[type="date"]::-webkit-calendar-picker-indicator {
                    filter: invert(1);
                }
            `}</style>
        </div>
    );
}

export default BookTable;