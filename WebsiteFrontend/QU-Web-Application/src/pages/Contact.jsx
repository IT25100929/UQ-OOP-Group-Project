import hotelImage1 from "../assets/pexels-guillermo-berlin-1524368912-31613770.jpg";
function Contact() {
    return (

        <>
            <div style={{ backgroundColor: '#121212', minHeight: '100vh' }}>
                <div className="container-fluid p-0">
                    <div className="card border-0 rounded-0 bg-dark text-white overflow-hidden">

                        <img src={hotelImage1}
                            className="card-img" alt="Luxury Suite"
                            style={{ height: '600px', objectFit: 'cover', opacity: 0.6 }} />

                        <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center text-center">

                            <h1 className="display-3 fw-bold mb-3">Contact Us</h1>

                            <p className="lead mb-4 mx-auto" style={{ maxWidth: '600px' }}>
                                Reach out with your questions or ideas, and our team will get back to you with the answers you need to move forward.
                            </p>

                        </div>

                    </div>
                </div>

                {/* Welcome Section */}
                <section className="py-5 text-center">
                    <div className="container">
                        <h6 className="text-success text-uppercase fw-bold mb-3" style={{ letterSpacing: '4px', fontSize: '0.8rem' }}>
                            Administration
                        </h6>
                        <h2 className="display-5 fw-bold mb-4 text-white">
                            Our Leadership Team
                        </h2>
                        <p className="lead text-secondary mx-auto mb-5" style={{ maxWidth: '800px', lineHeight: '1.8' }}>
                            Direct lines to our department heads for specialized inquiries.
                        </p>

                        {/* --- BETTER LOOKING DARK TABLE --- */}
                        <div className="table-responsive shadow-lg rounded">
                            <table className="table table-dark table-hover align-middle mb-0">
                                <thead className="table-light">
                                    <tr>
                                        <th className="py-3 px-4" scope="col">Staff Member</th>
                                        <th className="py-3" scope="col">Department</th>
                                        <th className="py-3" scope="col">Contact Number</th>
                                        <th className="py-3" scope="col">Email Address</th>
                                    </tr>
                                </thead>
                                <tbody className="border-top-0">
                                    <tr>
                                        <td className="py-4 px-4 fw-bold">
                                            <span className="text-success">●</span> Alexander Sterling
                                        </td>
                                        <td className="text-secondary">General Manager</td>
                                        <td>+91 22 6601 1825</td>
                                        <td><a href="mailto:manager@royalpalms.com" className="text-success text-decoration-none">manager@royalpalms.com</a></td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-4 fw-bold">
                                            <span className="text-success">●</span> Alexander Sterling
                                        </td>
                                        <td className="text-secondary">General Manager</td>
                                        <td>+91 22 6601 1825</td>
                                        <td><a href="mailto:manager@royalpalms.com" className="text-success text-decoration-none">manager@royalpalms.com</a></td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-4 fw-bold">
                                            <span className="text-success">●</span> Alexander Sterling
                                        </td>
                                        <td className="text-secondary">General Manager</td>
                                        <td>+91 22 6601 1825</td>
                                        <td><a href="mailto:manager@royalpalms.com" className="text-success text-decoration-none">manager@royalpalms.com</a></td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-4 fw-bold">
                                            <span className="text-success">●</span> Alexander Sterling
                                        </td>
                                        <td className="text-secondary">General Manager</td>
                                        <td>+91 22 6601 1825</td>
                                        <td><a href="mailto:manager@royalpalms.com" className="text-success text-decoration-none">manager@royalpalms.com</a></td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-4 fw-bold">
                                            <span className="text-success">●</span> Sarah Jenkins
                                        </td>
                                        <td className="text-secondary">Head of Concierge</td>
                                        <td>+91 22 6601 1826</td>
                                        <td><a href="mailto:concierge@royalpalms.com" className="text-success text-decoration-none">concierge@royalpalms.com</a></td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-4 fw-bold">
                                            <span className="text-success">●</span> Michael Chen
                                        </td>
                                        <td className="text-secondary">Events & Weddings</td>
                                        <td>+91 22 6601 1827</td>
                                        <td><a href="mailto:events@royalpalms.com" className="text-success text-decoration-none">events@royalpalms.com</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/* -------------------------------- */}

                    </div>
                </section>
            </div>
        </>

    );
}

export default Contact;