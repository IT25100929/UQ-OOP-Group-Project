import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SignUp() {
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

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const { fullName, phoneNumber, email, password, confirmPassword } = formData;

        // 1. Name Check
        if (fullName.trim().length < 3) {
            alert("Full name must be at least 3 characters long.");
            return false;
        }

        // 2. Phone Number (Sri Lankan format)
        const phoneRegex = /^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|91)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{6}$/;
        if (!phoneRegex.test(phoneNumber)) {
            alert("Please enter a valid phone number (e.g., 0771234567).");
            return false;
        }

        // 3. Email Check
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return false;
        }

        // 4. Password Strength (Min 8 chars, at least one number)
        const passwordRegex = /^(?=.*[0-9]).{8,}$/;
        if (!passwordRegex.test(password)) {
            alert("Password must be at least 8 characters long and contain at least one number.");
            return false;
        }

        // 5. Match Check
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return false;
        }

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        try {
            const response = await axios.post("http://localhost:8080/api/users/register", {
                fullName: formData.fullName,
                phoneNumber: formData.phoneNumber,
                email: formData.email,
                password: formData.password
            });
            alert("Registration Successful!");
            setFormData({ fullName: '', phoneNumber: '', email: '', password: '', confirmPassword: '' });
        } catch (error) {
            const serverMsg = error.response?.data?.message || "Registration failed.";
            alert(serverMsg);
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
                            <input name="fullName" type="text" className="form-control shadow-none" style={inputStyle} value={formData.fullName} placeholder="Enter Name" onChange={handleChange} required />
                        </div>

                        <div className="mb-3">
                            <label className="form-label small fw-bold text-uppercase">Phone Number</label>
                            <input name="phoneNumber" type="tel" className="form-control shadow-none" style={inputStyle} value={formData.phoneNumber} placeholder="07XXXXXXXX" onChange={handleChange} required />
                        </div>

                        <div className="mb-3">
                            <label className="form-label small fw-bold text-uppercase">Email Address</label>
                            <input name="email" type="email" className="form-control shadow-none" style={inputStyle} value={formData.email} placeholder="name@example.com" onChange={handleChange} required />
                        </div>

                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label className="form-label small fw-bold text-uppercase">Password</label>
                                <input name="password" type="password" className="form-control shadow-none" style={inputStyle} value={formData.password} placeholder="••••••••" onChange={handleChange} required />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label small fw-bold text-uppercase">Confirm</label>
                                <input name="confirmPassword" type="password" className="form-control shadow-none" style={inputStyle} value={formData.confirmPassword} placeholder="••••••••" onChange={handleChange} required />
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