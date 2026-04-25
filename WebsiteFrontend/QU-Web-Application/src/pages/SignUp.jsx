import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SignUp() {
    // 1. State for form data
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    useEffect(() => {
        document.body.style.backgroundColor = "#121212";
        return () => { document.body.style.backgroundColor = ""; };
    }, []);

    // 2. Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // 3. Handle Form Submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const response = await axios.post("http://localhost:8080/api/users/register", {
                fullName: formData.fullName,
                phoneNumber: formData.phoneNumber,
                email: formData.email,
                password: formData.password
            });
            console.log("Success:", response.data);
            alert("Registration Successful!");
        } catch (error) {
            console.error("Error signing up:", error);
            alert("Registration failed.");
        }
    };

    const inputStyle = { backgroundColor: '#2a2a2a', border: '1px solid #333', color: '#fff' };

    return (
        <>
            <style>{`input::placeholder { color: #999 !important; opacity: 1; }`}</style>
            <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <div className="card border-0 shadow-lg p-4 my-5" style={{ backgroundColor: '#1e1e1e', color: '#fff', width: '100%', maxWidth: '500px' }}>
                    <div className="text-center mb-4">
                        <h3 className="fw-bold text-white">Create Account</h3>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label small fw-bold text-uppercase">Full Name</label>
                            <input
                                name="fullName"
                                type="text"
                                className="form-control shadow-none"
                                style={inputStyle}
                                placeholder="Enter"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label small fw-bold text-uppercase">Phone Number</label>
                            <input
                                name="phoneNumber"
                                type="tel"
                                className="form-control shadow-none"
                                style={inputStyle}
                                placeholder="+94 000-0000"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label small fw-bold text-uppercase">Email Address</label>
                            <input
                                name="email"
                                type="email"
                                className="form-control shadow-none"
                                style={inputStyle}
                                placeholder="name@example.com"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label className="form-label small fw-bold text-uppercase">Password</label>
                                <input
                                    name="password"
                                    type="password"
                                    className="form-control shadow-none"
                                    style={inputStyle}
                                    placeholder="••••••••"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label small fw-bold text-uppercase">Confirm</label>
                                <input
                                    name="confirmPassword"
                                    type="password"
                                    className="form-control shadow-none"
                                    style={inputStyle}
                                    placeholder="••••••••"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <button type="submit" className="btn btn-success w-100 fw-bold py-2 text-uppercase">
                            Register Now
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignUp;