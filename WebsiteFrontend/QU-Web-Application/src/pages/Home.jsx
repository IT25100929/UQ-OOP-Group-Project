import hotelImage1 from "../assets/pexels-burakeroglu3-31089991.jpg";
import hotelImage2 from "../assets/pexels-erik-tamo-121801.jpg";
import hotelImage3 from "../assets/pexels-fajrinugroho-30362945.jpg";
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {

    const eventData = [
        {
            id: 1,
            title: "Rooftop Jazz Night",
            date: "Every Friday",
            description: "Join us for smooth jazz, artisanal cocktails, and city views.",
            img: "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
        },
        {
            id: 2,
            title: "New Year's Eve Gala",
            date: "Dec 31, 2024",
            description: "An elegant evening of fine dining, dancing, and spectacular fireworks.",
            img: "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
        },
        {
            id: 3,
            title: "Cooking Masterclass",
            date: "Oct 15 - Oct 18",
            description: "Learn Mediterranean secrets with Michelin-star chef Marco Pollo.",
            img: "https://images.pexels.com/photos/887822/pexels-photo-887822.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
        }
    ];

    // Styles to match your dark charcoal theme
    const sectionStyle = { backgroundColor: '#121212' }; // The main background
    const cardStyle = { backgroundColor: '#1e1e1e', color: '#fff' }; // The elevated card level
    const descriptionStyle = { color: '#ccc', lineHeight: '1.6' }; // Lighter grey for descriptions

    return (
        <>

            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={hotelImage1} className="d-block w-100" style={{ height: '500px', objectFit: 'cover' }} alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={hotelImage2} className="d-block w-100" style={{ height: '500px', objectFit: 'cover' }} alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={hotelImage3} className="d-block w-100" style={{ height: '500px', objectFit: 'cover' }} alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <section style={{ backgroundColor: '#121212', color: '#ffffff' }} className="py-5 text-center">
                <div className="container">
                    {/* Subtitle with high-end spacing */}
                    <h6 className="text-success text-uppercase fw-bold mb-3" style={{ letterSpacing: '4px', fontSize: '0.8rem' }}>
                        Welcome to Luxury
                    </h6>

                    {/* Main Heading - Pure White for high contrast */}
                    <h2 className="display-5 fw-bold mb-4 text-white">
                        Experience a New Level of Comfort
                    </h2>

                    {/* Description - Using text-secondary (light grey) for better readability */}
                    <p className="lead text-secondary mx-auto" style={{ maxWidth: '800px', lineHeight: '1.8' }}>
                        Nestled in the heart of paradise, The Royal Palms offers a sophisticated blend of
                        modern amenities and classic elegance. Whether you're here for business or leisure,
                        your comfort is our priority.
                    </p>
                </div>
            </section>

            {/* CUSTOM SPACER */}
            <div style={{ height: '80px', backgroundColor: '#121212' }}></div>



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


            <section style={sectionStyle} className="py-5">
                <div className="container">
                    <div className="text-center mb-5">
                        <h6 className="text-success text-uppercase fw-bold mb-2" style={{ letterSpacing: '4px' }}>The Royal Palms</h6>
                        <h2 className="display-6 fw-bold text-white">Upcoming Events</h2>
                    </div>

                    {/* 2. BOOTSTRAP CAROUSEL - data-bs-ride="carousel" enables auto-cycling */}
                    <div id="eventCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">

                        {/* Optional: Add small line indicators at the bottom */}
                        <div className="carousel-indicators">
                            {eventData.map((event, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    data-bs-target="#eventCarousel"
                                    data-bs-slide-to={index}
                                    className={index === 0 ? "active" : ""}
                                    aria-current={index === 0 ? "true" : "false"}
                                    aria-label={`Slide ${index + 1}`}
                                ></button>
                            ))}
                        </div>

                        {/* 3. The slides themselves */}
                        <div className="carousel-inner">
                            {eventData.map((event, index) => (
                                <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={event.id}>
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8 col-md-10">

                                            {/* THE EVENT CARD */}
                                            <div className="card h-100 border-0 shadow-lg overflow-hidden" style={cardStyle}>
                                                <div className="row g-0 align-items-center">

                                                    {/* Event Image (half-width) */}
                                                    <div className="col-md-6">
                                                        <img
                                                            src={event.img}
                                                            className="img-fluid h-100"
                                                            style={{ objectFit: 'cover', minHeight: '350px' }}
                                                            alt={event.title}
                                                        />
                                                    </div>

                                                    {/* Event Text (half-width) */}
                                                    <div className="col-md-6">
                                                        <div className="card-body p-4 p-lg-5">
                                                            <span className="badge bg-success text-uppercase fw-bold mb-3" style={{ letterSpacing: '1px' }}>Event</span>
                                                            <h4 className="card-title fw-bold text-white mb-2">{event.title}</h4>
                                                            <h6 className="text-white opacity-75 mb-4 fw-light">{event.date}</h6>
                                                            <p className="card-text mb-0" style={descriptionStyle}>
                                                                {event.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Event Card */}

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Optional: Add navigation arrows if you want users to click through manually */}
                        <button className="carousel-control-prev" type="button" data-bs-target="#eventCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#eventCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    {/* End Carousel */}

                </div>
            </section>


            <footer className="bg-dark text-white pt-5 pb-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <h5 className="text-success fw-bold">THE ROYAL PALMS</h5>
                            <p className="small text-secondary">Bringing you the ultimate luxury experience since 2026.</p>
                        </div>
                        <div className="col-md-4 mb-4 text-center">
                            <h6>Quick Links</h6>
                            <ul className="list-unstyled small text-secondary">
                                <li>Home</li>
                                <li>Rooms</li>
                                <li>About Us</li>
                            </ul>
                        </div>
                        <div className="col-md-4 mb-4 text-end">
                            <h6>Contact Us</h6>
                            <p className="small text-secondary">123 Luxury Lane, Colombo<br />info@royalpalms.com</p>
                        </div>
                    </div>
                    <hr className="border-secondary" />
                    <p className="text-center small text-secondary">&copy; 2026 The Royal Palms Hotel. All Rights Reserved.</p>
                </div>
            </footer>



        </>

    );

}

export default Home;