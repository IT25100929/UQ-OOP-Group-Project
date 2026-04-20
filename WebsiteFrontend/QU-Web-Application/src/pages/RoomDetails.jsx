import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import hotelImage1 from "../assets/pexels-burakeroglu3-31089991.jpg";

const RoomDetails = () => {
    const { id } = useParams();
    const [room, setRoom] = useState(null);

    useEffect(() => {
        // Ensure the background is dark even if the layout doesn't cover it
        document.body.style.backgroundColor = "#121212";

        const mockData = [
            { id: 1, title: "Deluxe Room", price: "$150", img: hotelImage1, desc: "A beautiful deluxe room with a king-size bed and ocean view.", amenities: ["Free WiFi", "Mini Bar", "AC"] },
            { id: 2, title: "Executive Suite", price: "$200", img: hotelImage1, desc: "Work and relax in style with our executive suite.", amenities: ["Office Desk", "Coffee Machine", "Bath Tub"] },
        ];

        const foundRoom = mockData.find(r => r.id === parseInt(id));
        setRoom(foundRoom);

        return () => { document.body.style.backgroundColor = ""; };
    }, [id]);

    if (!room) return (
        <div style={{ backgroundColor: '#121212', minHeight: '100vh' }} className="d-flex justify-content-center align-items-center">
            <div className="text-white text-center py-5">Loading room details...</div>
        </div>
    );

    return (
        <div style={{ backgroundColor: '#121212', minHeight: '100vh' }}>
            <div className="container py-5 text-white">
                <Link to="/rooms" className="btn btn-outline-secondary mb-4 border-0">
                    <i className="bi bi-arrow-left me-2"></i>← Back to Rooms
                </Link>

                <div className="row g-5">
                    <div className="col-md-7">
                        <div className="card border-0 rounded-4 overflow-hidden shadow-lg">
                            <img
                                src={room.img}
                                className="img-fluid"
                                alt={room.title}
                                style={{ objectFit: 'cover', minHeight: '400px' }}
                            />
                        </div>
                    </div>

                    <div className="col-md-5">
                        <h6 className="text-success text-uppercase fw-bold mb-2" style={{ letterSpacing: '2px' }}>Premium Suite</h6>
                        <h1 className="display-4 fw-bold mb-3">{room.title}</h1>
                        <h3 className="text-success mb-4">{room.price} <small className="text-secondary fs-6">/ night</small></h3>

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

                        <div className="mt-5 p-4 rounded-4" style={{ backgroundColor: '#1e1e1e' }}>
                            <button className="btn btn-success btn-lg w-100 py-3 rounded-pill fw-bold transition-hover">
                                Book This Room Now
                            </button>
                            <p className="text-center text-muted mt-3 mb-0 small">
                                No credit card required to hold your reservation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hover effect styling */}
            <style>
                {`
                .transition-hover {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .transition-hover:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 10px 20px rgba(25, 135, 84, 0.3);
                }
                `}
            </style>
        </div>
    );
};

export default RoomDetails;