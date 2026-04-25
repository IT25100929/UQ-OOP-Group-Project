import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Rooms() {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.body.style.backgroundColor = "#121212";

        const fetchRooms = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/rooms");
                // Ensure data is an array before setting state
                setRooms(Array.isArray(response.data) ? response.data : []);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching rooms:", error);
                setLoading(false);
            }
        };

        fetchRooms();
        return () => { document.body.style.backgroundColor = ""; };
    }, []);

    return (
        <>
            <div className="container-fluid p-0">
                <div className="card border-0 rounded-0 bg-dark text-white overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39"
                        className="card-img" alt="Luxury Suite"
                        style={{ height: '600px', objectFit: 'cover', opacity: 0.6 }} />

                    <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center text-center">
                        <span className="text-uppercase mb-2" style={{ letterSpacing: '4px', fontSize: '0.9rem' }}>Experience</span>
                        <h1 className="display-3 fw-bold mb-3">Explore Our Suites</h1>
                        <p className="lead mb-4 mx-auto" style={{ maxWidth: '600px' }}>
                            Indulge in the perfect blend of contemporary luxury and traditional elegance.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container py-5">
                {loading ? (
                    <div className="text-center text-white py-5">
                        <h3>Loading our luxury collection...</h3>
                    </div>
                ) : (
                    <div className="row g-4">
                        {rooms.map((room) => (
                            <div className="col-md-4" key={room.id}>
                                <div className="card h-100 border-0 shadow-lg" style={{ backgroundColor: '#1e1e1e', color: '#fff' }}>

                                    <img
                                        /* Note: If your imageUrl in the DB already contains "/assets/room/", 
                                           change this to: src={room.imageUrl} 
                                        */
                                        src={room.imageUrl.startsWith('http') ? room.imageUrl : `/assets/room/${room.imageUrl}`}
                                        className="card-img-top opacity-75"
                                        style={{ height: '250px', objectFit: 'cover' }}
                                        alt={room.title}
                                        onError={(e) => { e.target.src = 'https://via.placeholder.com/400x250?text=Room+Image+Missing'; }}
                                    />

                                    <div className="card-body p-4 d-flex flex-column">
                                        <h5 className="card-title fw-bold mb-2">{room.title}</h5>

                                        <p className="text-secondary small mb-4">
                                            {room.description ?
                                                (room.description.substring(0, 80) + "...") :
                                                "Luxurious amenities and breathtaking views await you."
                                            }
                                        </p>

                                        <div className="mt-auto d-flex justify-content-between align-items-center">
                                            <div>
                                                {/* FORMATTING: Added '$' and forced 2 decimal places for the Double value */}
                                                <span className="text-success fw-bold h5 mb-0">
                                                    ${typeof room.price === 'number' ? room.price.toFixed(2) : room.price}
                                                </span>
                                                <small className="text-muted ms-1">/night</small>
                                            </div>

                                            <Link to={`/room/${room.id}`} className="btn btn-outline-success btn-sm px-3 fw-bold text-uppercase" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>
                                                View Room
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}

export default Rooms;