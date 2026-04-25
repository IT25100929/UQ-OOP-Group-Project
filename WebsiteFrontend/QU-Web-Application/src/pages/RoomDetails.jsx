import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const RoomDetails = () => {
    const { id } = useParams();
    const [room, setRoom] = useState(null);

    useEffect(() => {
        const fetchRoomData = async () => {
            try {
                // Fetch the specific room from your Spring Boot API
                const response = await axios.get(`http://localhost:8080/api/rooms/${id}`);
                setRoom(response.data);
            } catch (error) {
                console.error("Error fetching room details:", error);
            }
        };

        document.body.style.backgroundColor = "#121212";
        fetchRoomData();

        return () => { document.body.style.backgroundColor = ""; };
    }, [id]);

    if (!room) return (
        <div style={{ backgroundColor: '#121212', minHeight: '100vh' }} className="d-flex justify-content-center align-items-center pt-5 mt-5">
            <div className="text-white text-center py-5">Finding your luxury suite...</div>
        </div>
    );

    return (
        <div style={{ backgroundColor: '#121212', minHeight: '100vh' }}>
            {/* Header Spacer */}
            <div style={{ height: '80px' }}></div>

            <div className="container py-lg-5 py-3 text-white">
                <Link to="/rooms" className="text-decoration-none text-secondary d-inline-block mb-4 transition-hover">
                    <span className="me-2">←</span> Back to All Rooms
                </Link>

                <div className="row g-5">
                    {/* Image Column - Now using database imageUrl */}
                    <div className="col-md-7">
                        <div className="card border-0 rounded-4 overflow-hidden shadow-lg bg-transparent">
                            <img
                                src={room.imageUrl}
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
                            {room.description}
                        </p>

                        <h5 className="mt-4 mb-3 fw-bold border-bottom border-secondary pb-2">Amenities</h5>
                        <div className="row">
                            {room.amenities && room.amenities.map((a, i) => (
                                <div key={i} className="col-6 mb-2 text-secondary">
                                    <i className="bi bi-check2-circle text-success me-2"></i>{a}
                                </div>
                            ))}
                        </div>

                        {/* Booking Section */}
                        <div className="mt-5 p-4 rounded-4" style={{ backgroundColor: '#1e1e1e' }}>
                            <Link to={`/book-room/${room.id}`} className="btn btn-success btn-lg w-100 py-3 rounded-pill fw-bold">
                                Book This Room Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;