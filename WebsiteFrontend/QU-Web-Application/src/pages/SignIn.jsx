import React, { useEffect } from 'react';

function SignIn() {
    // Set the global background color for this page
    useEffect(() => {
        document.body.style.backgroundColor = "#121212";
        return () => { document.body.style.backgroundColor = ""; };
    }, []);

    return (
        <>
            <section style={{ paddingTop: '50px' }}></section>
            <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
                <div className="card border-0 shadow-lg p-4" style={{ backgroundColor: '#1e1e1e', color: '#fff', width: '100%', maxWidth: '400px' }}>

                    <div className="text-center mb-4">
                        <h3 className="fw-bold text-white">Welcome Back</h3>
                        <p className="text-secondary small" >Please enter your details to sign in</p>
                    </div>

                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label small fw-bold">Email Address</label>
                            <input
                                type="email"
                                className="form-control bg-dark border-secondary text-white shadow-none"
                                id="exampleInputEmail1"
                                style={{ backgroundColor: '#2a2a2a', border: '1px solid #333' }}
                            />
                            <div id="emailHelp" className="form-text" style={{ fontSize: '0.75rem', color: '#aaa' }}>
                                We'll never share your email with anyone else.
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label small fw-bold">Password</label>
                            <input
                                type="password"
                                className="form-control bg-dark border-secondary text-white shadow-none"
                                id="exampleInputPassword1"
                                style={{ backgroundColor: '#2a2a2a', border: '1px solid #333' }}
                            />
                        </div>

                        <div className="mb-4 form-check">
                            <input type="checkbox" className="form-check-input bg-dark border-secondary" id="exampleCheck1" />
                            <label className="form-check-label small text-secondary" htmlFor="exampleCheck1">Remember me</label>
                        </div>

                        <button type="submit" className="btn btn-success w-100 fw-bold py-2 text-uppercase" style={{ letterSpacing: '1px' }}>
                            Sign In
                        </button>

                        <div className="text-center mt-3">
                            <p className="small text-secondary">Don't have an account? <a href="/signup" className="text-success text-decoration-none">Sign Up</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignIn;