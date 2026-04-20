import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import Header from './Header';

const AuthLayout = () => {
    const [progress, setProgress] = useState(0);
    const location = useLocation();

    useEffect(() => {
        setProgress(40);
        const timer = setTimeout(() => setProgress(100), 400);
        return () => clearTimeout(timer);
    }, [location]);

    return (
        <>
            <LoadingBar
                color='#198754'
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
                height={4}
            />
            <Header />
            <main style={{ minHeight: '100vh' }}>
                {/* We still pass the context so your login buttons can use it! */}
                <Outlet context={{ setProgress }} />
            </main>
        </>
    );
};

export default AuthLayout;