import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import LoadingBar from 'react-top-loading-bar';

const MainLayout = () => {

    const [progress, setProgress] = useState(0);
    const location = useLocation();

    // This effect triggers the loading bar every time the URL changes
    useEffect(() => {
        setProgress(40); // Start the bar

        const timer = setTimeout(() => {
            setProgress(100); // Finish the bar
        }, 400); // Adjust speed as needed

        return () => clearTimeout(timer);
    }, [location]);

    return (
        <>
            <LoadingBar
                color='#198754'
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
                height={4}
                shadow={true}
            />
            <Header />
            {/* Outlet renders the child routes defined in App.js */}
            <main style={{ minHeight: '80vh' }}>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default MainLayout;