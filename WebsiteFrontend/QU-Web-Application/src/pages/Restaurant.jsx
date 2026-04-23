import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import hotelImage1 from "../assets/pexels-quang-nguyen-vinh-222549-26729395.jpg";
import hotelImage2 from "../assets/pexels-quang-nguyen-vinh-222549-6877613.jpg";
import hotelImage3 from "../assets/pexels-quang-nguyen-vinh-222549-26729406.jpg";
import MenuCard from "../components/MenuCard";

function Restaurant() {
    // 1. CART STATE MANAGEMENT
    const [cart, setCart] = useState([]);

    // Load cart from localStorage when the page opens
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('restaurantCart')) || [];
        setCart(savedCart);
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('restaurantCart', JSON.stringify(cart));
    }, [cart]);

    // Function to add items to order
    const addToOrder = (item) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(i => i.id === item.id);
            if (existingItem) {
                // If item exists, increase quantity
                return prevCart.map(i =>
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                );
            }
            // If item is new, add to array with quantity 1
            return [...prevCart, { ...item, quantity: 1 }];
        });
    };

    // Calculate total quantity for the floating button
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    const menuData = [
        {
            id: 1,
            name: "Signature Wagyu Burger",
            price: 1250,
            description: "Premium wagyu beef with truffle aioli, aged cheddar, and caramelized onions on a brioche bun.",
            category: "Main Course",
            image: hotelImage1
        },
        {
            id: 2,
            name: "Lobster Thermidor",
            price: 3400,
            description: "Creamy lobster meat cooked in a rich wine sauce, topped with parmesan and baked to perfection.",
            category: "Seafood",
            image: hotelImage2
        },
        {
            id: 3, // Fixed IDs to be unique
            name: "Garden Fresh Truffle Pasta",
            price: 1850,
            description: "Handmade tagliatelle with seasonal mushrooms and freshly grated black truffles.",
            category: "Main Course",
            image: hotelImage3
        },
        {
            id: 4,
            name: "Spiced Atlantic Salmon",
            price: 2900,
            description: "Pan-seared salmon served with roasted asparagus and a lemon-butter dill sauce.",
            category: "Seafood",
            image: hotelImage1
        },
        {
            id: 5,
            name: "Chocolate Lava Sensation",
            price: 950,
            description: "Warm dark chocolate cake with a molten center, served with vanilla bean gelato.",
            category: "Dessert",
            image: hotelImage2
        },
        {
            id: 6,
            name: "Iced Caramel Macchiato",
            price: 650,
            description: "Premium espresso layered with steamed milk and sweet caramel drizzle over ice.",
            category: "Beverages",
            image: hotelImage3
        }
    ];

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

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {menuData.map((food) => (
                        <div className="col" key={food.id}>
                            {/* Ensure MenuCard handles the onAdd prop */}
                            <MenuCard item={food} onAdd={() => addToOrder(food)} />
                        </div>
                    ))}
                </div>
            </div>

            {/* CSS Styling */}
            <style>
                {`
                .transition-hover {
                    transition: all 0.3s ease;
                }
                .transition-hover:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 15px rgba(25, 135, 84, 0.2);
                }
                .animate-bounce {
                    animation: bounce 2s infinite;
                }
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