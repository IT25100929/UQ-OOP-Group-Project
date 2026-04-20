import React, { useEffect } from 'react';

function SignUp() {
    useEffect(() => {
        document.body.style.backgroundColor = "#121212";
        return () => { document.body.style.backgroundColor = ""; };
    }, []);

    // Common style for all dark inputs
    const inputStyle = {
        backgroundColor: '#2a2a2a',
        border: '1px solid #333',
        color: '#fff'
    };


    return (
        <>
            <section style={{ paddingTop: '25px' }}></section>
            {/* INJECTED STYLE TO FIX PLACEHOLDER COLOR */}
            <style>
                {`
                input::placeholder {
                    color: #999 !important;
                    opacity: 1; 
                }
                `}
            </style>
            <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <div className="card border-0 shadow-lg p-4 my-5" style={{ backgroundColor: '#1e1e1e', color: '#fff', width: '100%', maxWidth: '500px' }}>

                    <div className="text-center mb-4">
                        <h3 className="fw-bold text-white">Create Account</h3>
                        <p className="text-secondary small">Join The Royal Palms for exclusive luxury offers</p>
                    </div>

                    <form>
                        {/* Full Name Field */}
                        <div className="mb-3">
                            <label className="form-label small fw-bold text-uppercase" style={{ letterSpacing: '1px' }}>Full Name</label>
                            <input
                                type="text"
                                className="form-control shadow-none"
                                style={inputStyle}
                                placeholder="Enter"
                            />
                        </div>

                        {/* Phone Number Field */}
                        <div className="mb-3">
                            <label className="form-label small fw-bold text-uppercase" style={{ letterSpacing: '1px' }}>Phone Number</label>
                            <input
                                type="tel"
                                className="form-control shadow-none"
                                style={inputStyle}
                                placeholder="+94 000-0000"
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label small fw-bold text-uppercase" style={{ letterSpacing: '1px' }}>Email Address</label>
                            <input
                                type="email"
                                className="form-control shadow-none"
                                style={inputStyle}
                                placeholder="name@example.com"
                            />
                        </div>

                        {/* Password Row */}
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label className="form-label small fw-bold text-uppercase" style={{ letterSpacing: '1px' }}>Password</label>
                                <input
                                    type="password"
                                    className="form-control shadow-none"
                                    style={inputStyle}
                                    placeholder="••••••••"
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label small fw-bold text-uppercase" style={{ letterSpacing: '1px' }}>Confirm</label>
                                <input
                                    type="password"
                                    className="form-control shadow-none"
                                    style={inputStyle}
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <div className="mb-4 form-check">
                            <input type="checkbox" className="form-check-input bg-dark border-secondary" id="exampleCheck1" />
                            <label className="form-check-label small text-secondary" htmlFor="exampleCheck1">
                                I agree to the <span className="text-success">Terms & Conditions</span>
                            </label>
                        </div>

                        <button type="submit" className="btn btn-success w-100 fw-bold py-2 text-uppercase" style={{ letterSpacing: '2px' }}>
                            Register Now
                        </button>

                        <div className="text-center mt-4">
                            <p className="small text-secondary">
                                Already have an account? <a href="/signin" className="text-success text-decoration-none fw-bold">Log In</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>

        </>
    );
}

export default SignUp;