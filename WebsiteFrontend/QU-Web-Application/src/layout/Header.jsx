import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();

    // 1. Check if the user is an admin from localStorage
    const isAdmin = localStorage.getItem('role') === 'ADMIN';

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // 2. Logout function to clear storage and redirect
    const handleLogout = () => {
        localStorage.clear(); // Removes token and role
        navigate("/"); // Redirect to home
        window.location.reload(); // Refresh to update the header state
    };

    const navbarClasses = `navbar navbar-expand-lg navbar-dark fixed-top transition-all ${scrolled
        ? "bg-dark shadow-lg py-2"
        : "bg-transparent py-4"
        }`;

    return (
        <>
            <style>
                {`
                .transition-all {
                    transition: all 0.4s ease-in-out !important;
                }
                .admin-link {
                    color: #ffc107 !important; /* Gold color for Admin */
                    border: 1px solid #ffc107;
                }
                .admin-link:hover {
                    background-color: #ffc107;
                    color: #000 !important;
                }
                `}
            </style>

            <nav className={navbarClasses}>
                <div className="container">
                    <Link className="navbar-brand fw-bold fs-3" to="/">
                        <span className="text-success">THE</span> ROYAL PALMS
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav mx-auto gap-3">
                            <Link className="nav-link text-uppercase fw-semibold" to="/">Home</Link>
                            <Link className="nav-link text-uppercase fw-semibold" to="/rooms">Rooms</Link>
                            <Link className="nav-link text-uppercase fw-semibold" to="/dining">Dining</Link>
                            <Link className="nav-link text-uppercase fw-semibold" to="/restaurant">Restaurant</Link>
                            <Link className="nav-link text-uppercase fw-semibold" to="/contact">Contact</Link>
                        </div>

                        <div className="d-flex gap-2">
                            {/* --- CONDITIONAL RENDERING --- */}
                            {!isAdmin ? (
                                <>
                                    <Link to="/signin" className="btn btn-outline-light rounded-pill px-4">
                                        Sign In
                                    </Link>
                                    <Link to="/signup" className="btn btn-success rounded-pill px-4 shadow-sm">
                                        Register
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link to="/admin" className="btn admin-link rounded-pill px-4 fw-bold">
                                        DASHBOARD
                                    </Link>
                                    <button
                                        onClick={handleLogout}
                                        className="btn btn-danger rounded-pill px-4 shadow-sm"
                                    >
                                        Logout
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;