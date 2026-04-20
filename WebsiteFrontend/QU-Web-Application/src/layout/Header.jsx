import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
    // 1. Create a state to track if the page has been scrolled
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // If scrolled more than 50px, set scrolled to true
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // 2. Dynamic Styles based on scroll state
    const navbarClasses = `navbar navbar-expand-lg navbar-dark fixed-top transition-all ${scrolled
        ? "bg-dark shadow-lg py-2" // Scrolled state (Smaller & Darker)
        : "bg-transparent py-4"    // Top state (Larger & Transparent)
        }`;

    return (
        <>
            {/* INJECTED CSS for smooth transition animation */}
            <style>
                {`
                .transition-all {
                    transition: all 0.4s ease-in-out !important;
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
                            <Link className="nav-link text-uppercase fw-semibold" to="restaurant">Restaurant</Link>
                            <Link className="nav-link text-uppercase fw-semibold" to="/contact">Contact</Link>

                        </div>

                        <div className="d-flex gap-2">
                            <Link to="/signin" className="btn btn-outline-light rounded-pill px-4">
                                Sign In
                            </Link>
                            <Link to="/signup" className="btn btn-success rounded-pill px-4 shadow-sm">
                                Register
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;