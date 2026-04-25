import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    const isAdmin = localStorage.getItem('role') === 'ADMIN';

    // If not an admin, redirect to sign-in page
    // If admin, render the "Outlet" (which represents the child routes)
    return isAdmin ? <Outlet /> : <Navigate to="/signin" replace />;
};

export default ProtectedRoute;