import React, { useEffect } from 'react';
import hotelImage1 from "../assets/pexels-burakeroglu3-31089991.jpg";
import { Link } from 'react-router-dom';

function Rooms() {
    // Apply the dark charcoal background to the entire body
    useEffect(() => {
        document.body.style.backgroundColor = "#121212";
        return () => { document.body.style.backgroundColor = ""; };
    }, []);

    const roomData = [
        { id: 1, title: "Deluxe Room", price: "$150", img: hotelImage1 },
        { id: 2, title: "Executive Suite", price: "$200", img: hotelImage1 },
        { id: 3, title: "Family Room", price: "$120", img: hotelImage1 },
        { id: 4, title: "Penthouse", price: "$500", img: hotelImage1 },
        { id: 5, title: "Single Room", price: "$80", img: hotelImage1 },
    ];

    return (
        <>

            <div className="container-fluid p-0">
                <div className="card border-0 rounded-0 bg-dark text-white overflow-hidden">

                    <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39"
                        className="card-img" alt="Luxury Suite"
                        style={{ height: '600px', objectFit: 'cover', opacity: 0.6 }} />

                    <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center text-center">
                        {/* Added a small subtitle for a premium feel */}
                        <span className="text-uppercase mb-2" style={{ letterSpacing: '4px', fontSize: '0.9rem' }}>Experience</span>
                        <h1 className="display-3 fw-bold mb-3">Explore Our Suites</h1>

                        <p className="lead mb-4 mx-auto" style={{ maxWidth: '600px' }}>
                            Indulge in the perfect blend of contemporary luxury and traditional elegance,
                            designed for the discerning traveler.
                        </p>

                        {/* Professional Button Design */}
                        <a href="#rooms"
                            className="btn btn-outline-light px-5 py-3 fw-bold text-uppercase"
                            style={{ borderRadius: '50px', letterSpacing: '2px', fontSize: '0.85rem', borderWidth: '2px' }}>
                            View Available Rooms
                        </a>
                    </div>

                </div>
            </div>

            <div className="container py-5">


                <div className="row g-4">
                    {roomData.map((room) => (
                        <div className="col-md-4" key={room.id}>
                            {/* 1. Lighter grey card (#1e1e1e) against darker background (#121212) */}
                            <div className="card h-100 border-0 shadow-lg" style={{ backgroundColor: '#1e1e1e', color: '#fff' }}>

                                {/* 2. Image with slight opacity so it doesn't look too bright */}
                                <img
                                    src={room.img}
                                    className="card-img-top opacity-75"
                                    style={{ height: '250px', objectFit: 'cover' }}
                                    alt={room.title}
                                />

                                <div className="card-body p-4 d-flex flex-column">
                                    <h5 className="card-title fw-bold mb-2">{room.title}</h5>
                                    <p className="text-secondary small mb-4">
                                        Luxurious amenities and breathtaking views await you.
                                    </p>

                                    <div className="mt-auto d-flex justify-content-between align-items-center">
                                        <div>
                                            <span className="text-success fw-bold h5 mb-0">{room.price}</span>
                                            <small className="text-muted ms-1">/night</small>
                                        </div>

                                        {/* 3. Professional outline button */}
                                        <Link to={`/room/${room.id}`} className="btn btn-outline-success btn-sm px-3 fw-bold text-uppercase" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>
                                            View Room
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Rooms;