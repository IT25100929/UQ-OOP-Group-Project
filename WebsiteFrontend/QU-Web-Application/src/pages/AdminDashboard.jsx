import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

function AdminDashboard() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        navigate('/admin-login');
    };

    return (
        <div className="d-flex" style={{ backgroundColor: '#121212', minHeight: '100vh', color: 'white' }}>
            {/* --- SIDEBAR (Fixed) --- */}
            <div className="d-flex flex-column p-3 text-white bg-black border-end border-secondary" style={{ width: '260px', position: 'fixed', height: '100vh' }}>
                <h4 className="fw-bold text-success mb-4 px-2">Admin Panel</h4>
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <Link to="/admin" className="nav-link text-white mb-2 p-3"><i className="bi bi-speedometer2 me-2"></i> Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/admin/add-dish" className="nav-link text-white mb-2 p-3"><i className="bi bi-plus-circle me-2"></i> Add New Dish</Link>
                    </li>
                    <li>
                        <Link to="/admin/add-room" className="nav-link text-white mb-2 p-3"><i className="bi bi-door-open me-2"></i> Add Room Type</Link>
                    </li>
                    <li>
                        <Link to="/admin/maintenance" className="nav-link text-white mb-2 p-3"><i className="bi bi-tools me-2"></i> Maintenance</Link>
                    </li>
                    <li>
                        <Link to="/admin/add-dining" className="nav-link text-white mb-2 p-3">
                            <i className="bi bi-egg-fried me-2"></i> Add Dining Venue
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/add-staff" className="nav-link text-white mb-2 p-3">
                            <i className="bi bi-people me-2"></i> Update Leadership
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/feedback" className="nav-link text-white mb-2 p-3">
                            <i className="bi bi-chat-left-text me-2"></i> Guest Feedback
                        </Link>
                    </li>
                </ul>
                <button onClick={handleLogout} className="btn btn-outline-danger rounded-pill">Sign Out</button>
            </div>

            {/* --- CONTENT AREA (Dynamic) --- */}
            <div className="flex-grow-1" style={{ marginLeft: '260px', padding: '2rem' }}>
                {/* This is where the other JSX files will render */}
                <Outlet />
            </div>
        </div>
    );
}

export default AdminDashboard;