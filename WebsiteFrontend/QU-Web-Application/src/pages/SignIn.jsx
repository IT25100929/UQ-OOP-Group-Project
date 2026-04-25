import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignIn() {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        document.body.style.background = "radial-gradient(circle, #1a1a1a 0%, #000000 100%)";
        return () => { document.body.style.background = ""; };
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8080/api/auth/signin", credentials);

            if (res.data.role === 'ADMIN') {
                localStorage.setItem('adminToken', res.data.token);
                localStorage.setItem('role', 'ADMIN');
                navigate('/admin');
            } else {
                setError("Access Denied: Admin privileges required.");
            }
        } catch (err) {
            setError("Invalid email or password.");
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '90vh' }}>
            <div className="card border-0 shadow-lg p-4"
                style={{
                    backgroundColor: 'rgba(30, 30, 30, 0.8)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '15px',
                    color: '#fff',
                    width: '100%',
                    maxWidth: '400px'
                }}>
                <div className="text-center mb-4">
                    <div className="mb-3">
                        <i className="bi bi-shield-lock-fill" style={{ fontSize: '3rem', color: '#198754' }}></i>
                    </div>
                    <h3 className="fw-bold">Management Portal</h3>
                    <p className="text-muted small">Please sign in to access the dashboard</p>
                </div>

                {error && <div className="alert alert-danger border-0 bg-danger text-white py-2 small">{error}</div>}

                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label className="form-label small fw-bold text-secondary">EMAIL</label>
                        <input
                            type="email"
                            className="form-control bg-dark border-0 text-white py-2"
                            style={{ borderRadius: '8px' }}
                            placeholder="admin@store.com"
                            onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="form-label small fw-bold text-secondary">PASSWORD</label>
                        <input
                            type="password"
                            className="form-control bg-dark border-0 text-white py-2"
                            style={{ borderRadius: '8px' }}
                            placeholder="••••••••"
                            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-success w-100 fw-bold py-2 shadow-sm">
                        SECURE LOGIN
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SignIn;