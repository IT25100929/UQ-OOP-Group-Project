import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MenuCard from "../components/MenuCard";

// Importing assets for the carousel
import hotelImage1 from "../assets/pexels-quang-nguyen-vinh-222549-26729395.jpg";
import hotelImage2 from "../assets/pexels-quang-nguyen-vinh-222549-6877613.jpg";
import hotelImage3 from "../assets/pexels-quang-nguyen-vinh-222549-26729406.jpg";

function Restaurant() {
    const [cart, setCart] = useState([]);
    const [menuData, setMenuData] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch menu from Spring Boot
    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/menu');
                setMenuData(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching menu:", error);
                setLoading(false);
            }
        };
        fetchMenu();
    }, []);

    // Cart persistence
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('restaurantCart')) || [];
        setCart(savedCart);
    }, []);

    useEffect(() => {
        localStorage.setItem('restaurantCart', JSON.stringify(cart));
    }, [cart]);

    const addToOrder = (item) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(i => i.id === item.id);
            if (existingItem) {
                return prevCart.map(i =>
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                );
            }
            return [...prevCart, { ...item, quantity: 1 }];
        });
    };

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <div style={{ backgroundColor: '#121212', minHeight: '100vh', position: 'relative' }}>

            {/* --- FLOATING CART BUTTON --- */}
            {totalItems > 0 && (
                <Link
                    to="/checkout"
                    className="btn btn-success position-fixed bottom-0 end-0 m-4 p-3 shadow-lg rounded-pill animate-bounce"
                    style={{ zIndex: 1050, display: 'flex', alignItems: 'center', gap: '12px', border: '2px solid rgba(255,255,255,0.2)' }}
                >
                    <i className="bi bi-bag-check-fill fs-4"></i>
                    <span className="fw-bold">View Order ({totalItems} items)</span>
                </Link>
            )}

            {/* 1. Carousel Section */}
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={hotelImage1} className="d-block w-100" style={{ height: '550px', objectFit: 'cover', opacity: '0.7' }} alt="Gourmet Food" />
                        <div className="carousel-caption d-none d-md-block pb-5">
                            <h1 className="display-4 fw-bold">Fine Dining Delivered</h1>
                            <p className="lead">Experience the world's best cuisines from the comfort of your home.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={hotelImage2} className="d-block w-100" style={{ height: '550px', objectFit: 'cover', opacity: '0.7' }} alt="Luxury Seafood" />
                        <div className="carousel-caption d-none d-md-block pb-5">
                            <h1 className="display-4 fw-bold">Fresh Catch Daily</h1>
                            <p className="lead">Sustainably sourced seafood prepared by master chefs.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={hotelImage3} className="d-block w-100" style={{ height: '550px', objectFit: 'cover', opacity: '0.7' }} alt="Signature Cocktails" />
                        <div className="carousel-caption d-none d-md-block pb-5">
                            <h1 className="display-4 fw-bold">Artisanal Beverages</h1>
                            <p className="lead">Pair your meal with our handcrafted selection of drinks.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>

            {/* 2. Reservation Section */}
            <div className="py-5" style={{ backgroundColor: '#1a1a1a', borderBottom: '1px solid #333' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 text-center text-lg-start mb-3 mb-lg-0">
                            <h3 className="text-white fw-bold">Planning a Visit?</h3>
                            <p className="text-secondary mb-0">Book your table now for an unforgettable in-person dining experience.</p>
                        </div>
                        <div className="col-lg-4 text-center text-lg-end">
                            <Link to="/dining" className="btn btn-outline-success btn-lg rounded-pill px-5 transition-hover">
                                Book a Table
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Menu Section */}
            <div className="container py-5">
                <div className="text-center mb-5">
                    <span className="badge rounded-pill bg-success mb-2 px-3 py-2 text-uppercase" style={{ letterSpacing: '1px' }}>
                        <i className="bi bi-bicycle me-2"></i> Fast Home Delivery
                    </span>
                    <h2 className="display-5 text-white fw-bold">À La Carte Menu</h2>
                    <div className="mx-auto mt-3" style={{ width: '60px', height: '3px', backgroundColor: '#198754' }}></div>
                </div>

                {loading ? (
                    <div className="text-center py-5 text-white">
                        <div className="spinner-border text-success" role="status"></div>
                        <p className="mt-3">Loading Deliciousness...</p>
                    </div>
                ) : (
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                        {menuData.map((food) => (
                            <div className="col" key={food.id}>
                                <MenuCard item={food} onAdd={() => addToOrder(food)} />
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Animations */}
            <style>
                {`
                .transition-hover { transition: all 0.3s ease; }
                .transition-hover:hover { transform: translateY(-3px); box-shadow: 0 8px 15px rgba(25, 135, 84, 0.2); }
                .animate-bounce { animation: bounce 2s infinite; }
                @keyframes bounce {
                    0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
                    40% {transform: translateY(-10px);}
                    60% {transform: translateY(-5px);}
                }
                `}
            </style>
        </div>
    );
}

export default Restaurant;