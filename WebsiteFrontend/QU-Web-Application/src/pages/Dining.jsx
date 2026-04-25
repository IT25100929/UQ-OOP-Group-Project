import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Import your hero image
import hotelImage1 from "../assets/pexels-aksinfo7-36749693.jpg";

function Dining() {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        const fetchDining = async () => {
            try {
                const res = await axios.get("http://localhost:8080/api/dining");
                setRestaurants(res.data);
            } catch (err) {
                console.error("Error fetching dining options", err);
            }
        };
        fetchDining();
    }, []);

    return (
        <div className="container-fluid p-0 bg-black text-white" style={{ minHeight: '100vh' }}>

            {/* Hero Section with Smooth Gradient Transition */}
            <div className="position-relative vh-100 overflow-hidden">
                <img
                    src={hotelImage1}
                    className="w-100 h-100"
                    alt="Dining Hero"
                    style={{ objectFit: 'cover', opacity: 0.5 }}
                />

                {/* The Secret Sauce: Gradient Overlay */}
                <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 80%, rgba(0,0,0,1) 100%)'
                    }}
                ></div>

                <div className="position-absolute top-50 start-50 translate-middle text-center w-100 px-3">
                    <span className="text-uppercase mb-2 d-block" style={{ letterSpacing: '8px', fontSize: '0.9rem', color: '#adb5bd' }}>
                        The Art of Food
                    </span>
                    <h1 className="display-1 fw-bold mb-3" style={{ letterSpacing: '-2px' }}>Dining</h1>
                    <p className="lead mb-4 mx-auto" style={{ maxWidth: '700px', fontWeight: '300' }}>
                        Experience five distinct culinary worlds. From sunrise breakfasts to midnight cocktails,
                        our doors are open to everyone.
                    </p>
                </div>

                {/* Subtle Scroll Indicator */}
                <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4 text-center">
                    <div style={{
                        width: '1px',
                        height: '60px',
                        background: 'linear-gradient(to bottom, transparent, white)',
                        margin: '0 auto'
                    }}></div>
                </div>
            </div>

            {/* Restaurants Full-Width Section - Dynamic Data */}
            <div className="container-fluid p-0">
                {restaurants.map((res, index) => (
                    <div key={res.id} className={`row g-0 align-items-center ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}
                        style={{ minHeight: '600px' }}>

                        {/* Image Column */}
                        <div className="col-lg-7 overflow-hidden">
                            <img
                                /* Logic for local images in public/assets/dining/ */
                                src={res.imageUrl?.startsWith('http')
                                    ? res.imageUrl
                                    : `/assets/dining/${res.imageUrl}`
                                }
                                alt={res.name}
                                className="w-100 h-100"
                                style={{ objectFit: 'cover', minHeight: '600px' }}
                                onError={(e) => { e.target.src = 'https://via.placeholder.com/800x600?text=Luxury+Dining'; }}
                            />
                        </div>

                        {/* Text Content Column */}
                        <div className="col-lg-5 p-5 d-flex flex-column justify-content-center bg-black">
                            <div className="px-md-5">
                                <small className="text-info text-uppercase fw-bold" style={{ letterSpacing: '3px' }}>
                                    {res.type}
                                </small>
                                <h2 className="display-4 fw-bold my-3">{res.name}</h2>
                                <p className="lead mb-4" style={{ color: '#adb5bd', lineHeight: '1.8', fontSize: '1.1rem' }}>
                                    {res.description}
                                </p>
                                <div>
                                    <Link
                                        to={`/book-table/${res.id}`}
                                        className="btn btn-outline-light px-5 py-3 fw-bold text-uppercase"
                                        style={{ borderRadius: '0', letterSpacing: '2px', fontSize: '0.8rem', borderWidth: '2px' }}
                                    >
                                        Book a Table
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer-like Call to Action */}
            <div className="py-5 text-center bg-black border-top border-secondary" style={{ opacity: 0.5 }}>
                <p className="text-light italic mb-0">Walk-ins are welcome, but reservations are recommended.</p>
            </div>
        </div>
    );
}

export default Dining;