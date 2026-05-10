import React, { useState, useEffect } from 'react';
import axios from 'axios';
import hotelImage1 from "../assets/pexels-guillermo-berlin-1524368912-31613770.jpg";

function Contact() {
    const [staffList, setStaffList] = useState([]);
    const [feedback, setFeedback] = useState({
        userEmail: '',
        category: 'General',
        rating: '5',
        comment: ''
    });

    useEffect(() => {
        const fetchStaff = async () => {
            try {
                const res = await axios.get("http://localhost:8080/api/staff");
                setStaffList(res.data);
            } catch (err) {
                console.error("Error fetching leadership board:", err);
            }
        };
        fetchStaff();
    }, []);

    const handleFeedbackSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8080/api/feedback", feedback);
            alert("Thank you! Your feedback has been sent to our management team.");
            setFeedback({ userEmail: '', category: 'General', rating: '5', comment: '' });
        } catch (err) {
            const errorMessage = err.response?.data?.message || "Error submitting feedback.";
            alert(errorMessage);
        }
    };

    // Internal style tag to handle the placeholder color
    const placeholderStyle = (
        <style>
            {`
                .custom-placeholder::placeholder {
                    color: #ced4da !important;
                    opacity: 1;
                }
                .form-input-focus:focus {
                    background-color: #1a1a1a !important;
                    border-color: #198754 !important;
                    box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25) !important;
                    color: white !important;
                }
            `}
        </style>
    );

    return (
        <div style={{ backgroundColor: '#121212', minHeight: '100vh' }}>
            {placeholderStyle}

            {/* --- Hero Section --- */}
            <div className="container-fluid p-0">
                <div className="card border-0 rounded-0 bg-dark text-white overflow-hidden">
                    <img src={hotelImage1}
                        className="card-img" alt="Luxury Lobby"
                        style={{ height: '500px', objectFit: 'cover', opacity: 0.5 }} />
                    <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center text-center">
                        <h1 className="display-3 fw-bold mb-3">Contact Us</h1>
                        <p className="lead mb-4 mx-auto" style={{ maxWidth: '600px' }}>
                            Experience world-class service. Reach out to our leadership team or share your thoughts.
                        </p>
                    </div>
                </div>
            </div>

            {/* --- Leadership Section --- */}
            <section className="py-5">
                <div className="container">
                    <div className="text-center mb-5">
                        <h6 className="text-success text-uppercase fw-bold mb-3" style={{ letterSpacing: '4px' }}>Administration</h6>
                        <h2 className="display-5 fw-bold text-white">Our Leadership Team</h2>
                    </div>
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
                                {staffList.length > 0 ? (
                                    staffList.map((member) => (
                                        <tr key={member.id}>
                                            <td className="py-4 px-4 fw-bold">
                                                <span className="text-success me-2">●</span> {member.name}
                                            </td>
                                            <td className="text-secondary">{member.department}</td>
                                            <td>{member.contact}</td>
                                            <td>
                                                <a href={`mailto:${member.email}`} className="text-success text-decoration-none">
                                                    {member.email}
                                                </a>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" className="text-center py-5 text-secondary">
                                            The leadership board is currently being updated.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* --- Feedback Section --- */}
            <section className="py-5" style={{ backgroundColor: '#1a1a1a' }}>
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-5 text-white">
                            <h6 className="text-success text-uppercase fw-bold mb-3" style={{ letterSpacing: '4px' }}>Feedback</h6>
                            <h2 className="display-6 fw-bold mb-4">Share Your Experience</h2>
                            <p className="text-secondary mb-4">
                                Only registered guests can provide feedback. Your insights allow us to refine our services.
                            </p>
                            <div className="bg-dark p-3 border border-secondary rounded d-inline-block">
                                <span className="text-warning h4 mb-0">★★★★★</span>
                                <p className="small mb-0 mt-1 text-secondary">Trusted by 5,000+ Guests</p>
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <div className="card bg-dark border-secondary p-4 shadow-sm">
                                <form onSubmit={handleFeedbackSubmit}>
                                    <div className="mb-3">
                                        <label className="text-white-50 small mb-2">Registered Email Address</label>
                                        <input
                                            type="email"
                                            className="form-control border-secondary text-white custom-placeholder form-input-focus"
                                            style={{ backgroundColor: '#1a1a1a' }}
                                            placeholder="username@example.com"
                                            value={feedback.userEmail}
                                            onChange={(e) => setFeedback({ ...feedback, userEmail: e.target.value })}
                                            required
                                        />
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label className="text-white-50 small mb-2">Category</label>
                                            <select
                                                className="form-select border-secondary text-white form-input-focus"
                                                style={{ backgroundColor: '#1a1a1a' }}
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
                                            <label className="text-white-50 small mb-2">Rating</label>
                                            <select
                                                className="form-select border-secondary text-warning form-input-focus"
                                                style={{ backgroundColor: '#1a1a1a' }}
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
                                        <label className="text-white-50 small mb-2">Your Comments</label>
                                        <textarea
                                            className="form-control border-secondary text-white custom-placeholder form-input-focus"
                                            style={{ backgroundColor: '#1a1a1a' }}
                                            rows="4"
                                            placeholder="Tell us what you loved or how we can improve..."
                                            value={feedback.comment}
                                            onChange={(e) => setFeedback({ ...feedback, comment: e.target.value })}
                                            required
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="btn btn-success rounded-pill px-5 py-2 fw-bold w-100">
                                        Submit Feedback
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;