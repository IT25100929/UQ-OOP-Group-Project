import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function AdminDashboard() {
    return (
        <div className="d-flex" style={{ backgroundColor: '#121212', minHeight: '100vh', color: 'white' }}>

            {/* --- SIDEBAR (Fixed) --- */}
            <div className="d-flex flex-column p-3 text-white bg-black border-end border-secondary"
                style={{ width: '260px', position: 'fixed', height: '100vh' }}>

                <div className="px-2 mb-4">
                    <h4 className="fw-bold text-success m-0">Admin Panel</h4>
                    <small className="text-secondary">The Royal Palms</small>
                </div>

                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <Link to="/admin" className="nav-link text-white mb-2 p-3 border-bottom border-dark border-opacity-25 hover-effect">
                            <i className="bi bi-speedometer2 me-2"></i> Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/add-dish" className="nav-link text-white mb-2 p-3">
                            <i className="bi bi-plus-circle me-2"></i> Add New Dish
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/add-room" className="nav-link text-white mb-2 p-3">
                            <i className="bi bi-door-open me-2"></i> Add Room Type
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/maintenance" className="nav-link text-white mb-2 p-3">
                            <i className="bi bi-tools me-2"></i> Maintenance
                        </Link>
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

                {/* --- REPLACED LOGOUT WITH HOME BUTTON --- */}
                <div className="pt-3 border-top border-secondary">
                    <Link to="/" className="btn btn-outline-success w-100 rounded-pill d-flex align-items-center justify-content-center gap-2 py-2">
                        <i className="bi bi-house-door"></i>
                        <span>Back to Website</span>
                    </Link>
                </div>
            </div>

            {/* --- CONTENT AREA (Dynamic) --- */}
            <div className="flex-grow-1" style={{ marginLeft: '260px', padding: '2rem' }}>
                <Outlet />
            </div>
        </div>
    );
}

export default AdminDashboard;