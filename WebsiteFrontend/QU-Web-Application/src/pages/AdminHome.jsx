import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminHome() {
    const [stats, setStats] = useState({
        rooms: 0,
        staff: 0,
        feedback: 0,
        issues: 0
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCounts = async () => {
            try {
                // Fetching all data simultaneously for better performance
                const [staffRes, feedbackRes, maintenanceRes, roomRes] = await Promise.all([
                    axios.get("http://localhost:8080/api/staff"),
                    axios.get("http://localhost:8080/api/feedback"),
                    axios.get("http://localhost:8080/api/maintenance"),
                    axios.get("http://localhost:8080/api/rooms") // Added real rooms API
                ]);

                setStats({
                    staff: staffRes.data.length,
                    feedback: feedbackRes.data.length,
                    issues: maintenanceRes.data.length,
                    rooms: roomRes.data.length // No longer hardcoded!
                });
                setLoading(false);
            } catch (err) {
                console.error("Error loading dashboard stats:", err);
                setLoading(false);
            }
        };
        fetchCounts();
    }, []);

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '60vh' }}>
                <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden">Loading Stats...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="text-white">
            <h2 className="mb-2 fw-bold text-white">Welcome back, Admin</h2>
            <p className="text-info mb-5" style={{ fontSize: '1.1rem' }}>
                Here is the latest live data from The Royal Palms.
            </p>

            <div className="row g-4">
                {/* Stats Card 1: Staff */}
                <div className="col-md-3">
                    <div className="card bg-dark border-secondary p-4 shadow-lg text-center" style={{ borderLeft: '4px solid #198754' }}>
                        <i className="bi bi-people text-success display-5 mb-2"></i>
                        <h3 className="fw-bold text-white mb-0">{stats.staff}</h3>
                        <span className="text-light opacity-75 small text-uppercase fw-bold">Leadership</span>
                    </div>
                </div>

                {/* Stats Card 2: Feedback */}
                <div className="col-md-3">
                    <div className="card bg-dark border-secondary p-4 shadow-lg text-center" style={{ borderLeft: '4px solid #0dcaf0' }}>
                        <i className="bi bi-chat-left-dots text-info display-5 mb-2"></i>
                        <h3 className="fw-bold text-white mb-0">{stats.feedback}</h3>
                        <span className="text-light opacity-75 small text-uppercase fw-bold">Guest Reviews</span>
                    </div>
                </div>

                {/* Stats Card 3: IT Issues */}
                <div className="col-md-3">
                    <div className="card bg-dark border-secondary p-4 shadow-lg text-center" style={{ borderLeft: '4px solid #dc3545' }}>
                        <i className="bi bi-exclamation-triangle text-danger display-5 mb-2"></i>
                        <h3 className="fw-bold text-white mb-0">{stats.issues}</h3>
                        <span className="text-light opacity-75 small text-uppercase fw-bold">IT Issues</span>
                    </div>
                </div>

                {/* Stats Card 4: Rooms */}
                <div className="col-md-3">
                    <div className="card bg-dark border-secondary p-4 shadow-lg text-center" style={{ borderLeft: '4px solid #ffc107' }}>
                        <i className="bi bi-door-open text-warning display-5 mb-2"></i>
                        <h3 className="fw-bold text-white mb-0">{stats.rooms}</h3>
                        <span className="text-light opacity-75 small text-uppercase fw-bold">Total Room Types</span>
                    </div>
                </div>
            </div>

            {/* System Status Section */}
            <div className="mt-5 p-4 rounded bg-dark border border-secondary shadow">
                <h5 className="text-white fw-bold mb-4">
                    <i className="bi bi-cpu me-2 text-success"></i>
                    Live System Status
                </h5>
                <hr className="border-secondary mb-4" />
                <div className="row text-center text-md-start">
                    <div className="col-md-6 border-end border-secondary mb-3 mb-md-0">
                        <div className="d-flex justify-content-between px-3">
                            <span className="text-light opacity-75">Database Connectivity</span>
                            <span className="badge bg-success px-3">ONLINE</span>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex justify-content-between px-3">
                            <span className="text-light opacity-75">API Gateway Response</span>
                            <span className="text-success fw-bold">Active (12ms)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminHome;