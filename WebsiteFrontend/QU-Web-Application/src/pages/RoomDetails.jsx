import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import hotelImage1 from "../assets/pexels-burakeroglu3-31089991.jpg";

const RoomDetails = () => {
    const { id } = useParams();
    const [room, setRoom] = useState(null);

    useEffect(() => {
        document.body.style.backgroundColor = "#121212";

        const mockData = [
            { id: 1, title: "Deluxe Room", price: "$150", img: hotelImage1, desc: "A beautiful deluxe room with a king-size bed and ocean view.", amenities: ["Free WiFi", "Mini Bar", "AC"] },
            { id: 2, title: "Executive Suite", price: "$200", img: hotelImage1, desc: "Work and relax in style with our executive suite.", amenities: ["Office Desk", "Coffee Machine", "Bath Tub"] },
            { id: 3, title: "Family Room", price: "$120", img: hotelImage1, desc: "Designed with togetherness in mind, this spacious suite offers the perfect balance of shared living and privacy.", amenities: ["Two Queen-sized Beds", "Kids' Welcome Pack", "Mini-Fridge & Microwave"] },
            { id: 4, title: "Penthouse", price: "$500", img: hotelImage1, desc: "The pinnacle of luxury living featuring floor-to-ceiling windows and bespoke designer furnishings.", amenities: ["Private Rooftop Terrace", "Personal Butler Service", "Infinity Spa Bath"] },
            { id: 5, title: "Single Room", price: "$80", img: hotelImage1, desc: "A sanctuary for the solo traveler, offering a sleek layout without compromising on boutique comforts.", amenities: ["Cloud-Comfort Single Bed", "High-Speed Fiber Wi-Fi", "Rainfall Shower"] }
        ];

        const foundRoom = mockData.find(r => r.id === parseInt(id));
        setRoom(foundRoom);

        return () => { document.body.style.backgroundColor = ""; };
    }, [id]);

    if (!room) return (
        <div style={{ backgroundColor: '#121212', minHeight: '100vh' }} className="d-flex justify-content-center align-items-center pt-5 mt-5">
            <div className="text-white text-center py-5">Loading room details...</div>
        </div>
    );

    return (
        <div style={{ backgroundColor: '#121212', minHeight: '100vh' }}>

            {/* 1. Header Spacer: Ensures content starts below the fixed header */}
            <div style={{ height: '80px' }}></div>

            <div className="container py-lg-5 py-3 text-white">

                {/* 2. Enhanced Back Button */}
                <Link to="/rooms" className="text-decoration-none text-secondary d-inline-block mb-4 transition-hover">
                    <span className="me-2">←</span> Back to All Rooms
                </Link>

                <div className="row g-5">
                    {/* Image Column */}
                    <div className="col-md-7">
                        <div className="card border-0 rounded-4 overflow-hidden shadow-lg bg-transparent">
                            <img
                                src={room.img}
                                className="img-fluid"
                                alt={room.title}
                                style={{ objectFit: 'cover', minHeight: '500px', width: '100%' }}
                            />
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="col-md-5">
                        <h6 className="text-success text-uppercase fw-bold mb-2" style={{ letterSpacing: '2px' }}>
                            Premium Experience
                        </h6>
                        <h1 className="display-4 fw-bold mb-3">{room.title}</h1>
                        <h3 className="text-success mb-4">
                            {room.price} <small className="text-secondary fs-6">/ night</small>
                        </h3>

                        <p className="lead text-secondary mb-4" style={{ lineHeight: '1.8' }}>
                            {room.desc}
                        </p>

                        <h5 className="mt-4 mb-3 fw-bold border-bottom border-secondary pb-2">Amenities</h5>
                        <div className="row">
                            {room.amenities.map((a, i) => (
                                <div key={i} className="col-6 mb-2 text-secondary">
                                    <i className="bi bi-check2-circle text-success me-2"></i>{a}
                                </div>
                            ))}
                        </div>

                        {/* Booking Section */}
                        <div className="mt-5 p-4 rounded-4" style={{ backgroundColor: '#1e1e1e' }}>
                            <Link
                                to={`/book-room/${room.id}`}
                                state={{ roomData: room }}
                                className="btn btn-success btn-lg w-100 py-3 rounded-pill fw-bold transition-hover"
                            >
                                Book This Room Now
                            </Link>
                            <p className="text-center text-muted mt-3 mb-0 small">
                                Best Price Guaranteed • Free Cancellation available
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <style>
                {`
                .transition-hover {
                    transition: all 0.3s ease;
                }
                .transition-hover:hover {
                    transform: translateY(-3px);
                    color: white !important;
                }
                .btn-success.transition-hover:hover {
                    box-shadow: 0 10px 20px rgba(25, 135, 84, 0.3);
                }
                `}
            </style>
        </div>
    );
};

export default RoomDetails;