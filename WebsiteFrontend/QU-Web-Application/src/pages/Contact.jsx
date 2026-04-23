import React, { useState } from 'react';
import hotelImage1 from "../assets/pexels-guillermo-berlin-1524368912-31613770.jpg";

function Contact() {
    const [feedback, setFeedback] = useState({
        category: 'General',
        rating: '5',
        comment: ''
    });

    const handleFeedbackSubmit = (e) => {
        e.preventDefault();
        // This payload is ready for your Spring Boot @PostMapping("/api/feedback")
        console.log("Feedback Submitted:", feedback);
        alert("Thank you for your feedback! It helps us maintain our royal standards.");
        setFeedback({ category: 'General', rating: '5', comment: '' });
    };

    return (
        <>
            <div style={{ backgroundColor: '#121212', minHeight: '100vh' }}>
                {/* Hero Section */}
                <div className="container-fluid p-0">
                    <div className="card border-0 rounded-0 bg-dark text-white overflow-hidden">
                        <img src={hotelImage1}
                            className="card-img" alt="Luxury Suite"
                            style={{ height: '600px', objectFit: 'cover', opacity: 0.6 }} />
                        <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center text-center">
                            <h1 className="display-3 fw-bold mb-3">Contact Us</h1>
                            <p className="lead mb-4 mx-auto" style={{ maxWidth: '600px' }}>
                                Reach out with your questions or ideas, and our team will get back to you with the answers you need to move forward.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Administration Section */}
                <section className="py-5 text-center">
                    <div className="container">
                        <h6 className="text-success text-uppercase fw-bold mb-3" style={{ letterSpacing: '4px', fontSize: '0.8rem' }}>
                            Administration
                        </h6>
                        <h2 className="display-5 fw-bold mb-4 text-white">Our Leadership Team</h2>
                        <p className="lead text-secondary mx-auto mb-5" style={{ maxWidth: '800px' }}>
                            Direct lines to our department heads for specialized inquiries.
                        </p>

                        <div className="table-responsive shadow-lg rounded">
                            <table className="table table-dark table-hover align-middle mb-0 text-start">
                                <thead className="table-light">
                                    <tr>
                                        <th className="py-3 px-4">Staff Member</th>
                                        <th className="py-3">Department</th>
                                        <th className="py-3">Contact</th>
                                        <th className="py-3">Email Address</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="py-4 px-4 fw-bold"><span className="text-success">●</span> Alexander Sterling</td>
                                        <td className="text-secondary">General Manager</td>
                                        <td>+91 22 6601 1825</td>
                                        <td><a href="mailto:manager@royalpalms.com" className="text-success text-decoration-none">manager@royalpalms.com</a></td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-4 fw-bold"><span className="text-success">●</span> Sarah Jenkins</td>
                                        <td className="text-secondary">Head of Concierge</td>
                                        <td>+91 22 6601 1826</td>
                                        <td><a href="mailto:concierge@royalpalms.com" className="text-success text-decoration-none">concierge@royalpalms.com</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* --- NEW FEEDBACK SECTION --- */}
                <section className="py-5" style={{ backgroundColor: '#1a1a1a' }}>
                    <div className="container">
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-5 text-white">
                                <h6 className="text-success text-uppercase fw-bold mb-3" style={{ letterSpacing: '4px' }}>Feedback</h6>
                                <h2 className="display-6 fw-bold mb-4">Share Your Experience</h2>
                                <p className="text-secondary mb-4">
                                    Your insights allow us to refine our services. Whether it was the ambiance of our rooms or the seasoning of your Wagyu burger, we want to hear it.
                                </p>
                                <div className="d-flex align-items-center mb-3">
                                    <i className="bi bi-star-fill text-warning me-2"></i>
                                    <span>Average Guest Rating: 4.9/5</span>
                                </div>
                            </div>

                            <div className="col-lg-7">
                                <div className="card bg-dark border-secondary p-4 shadow-sm">
                                    <form onSubmit={handleFeedbackSubmit}>
                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <label className="text-secondary small mb-2">Category</label>
                                                <select
                                                    className="form-select bg-black border-secondary text-white"
                                                    value={feedback.category}
                                                    onChange={(e) => setFeedback({ ...feedback, category: e.target.value })}
                                                >
                                                    <option value="Hotel">Hotel Stay</option>
                                                    <option value="Restaurant">Restaurant & Dining</option>
                                                    <option value="Service">Staff & Service</option>
                                                    <option value="General">General Inquiry</option>
                                                </select>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="text-secondary small mb-2">Rating</label>
                                                <select
                                                    className="form-select bg-black border-secondary text-white text-warning"
                                                    value={feedback.rating}
                                                    onChange={(e) => setFeedback({ ...feedback, rating: e.target.value })}
                                                >
                                                    <option value="5">⭐⭐⭐⭐⭐ (Excellent)</option>
                                                    <option value="4">⭐⭐⭐⭐ (Very Good)</option>
                                                    <option value="3">⭐⭐⭐ (Average)</option>
                                                    <option value="2">⭐⭐ (Below Expectations)</option>
                                                    <option value="1">⭐ (Poor)</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <label className="text-secondary small mb-2">Your Comments</label>
                                            <textarea
                                                className="form-control bg-black border-secondary text-white"
                                                rows="4"
                                                placeholder="Tell us what you loved or how we can improve..."
                                                value={feedback.comment}
                                                onChange={(e) => setFeedback({ ...feedback, comment: e.target.value })}
                                                required
                                            ></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-success rounded-pill px-5 py-2 fw-bold">
                                            Submit Feedback
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ---------------------------- */}
            </div>
        </>
    );
}

export default Contact;