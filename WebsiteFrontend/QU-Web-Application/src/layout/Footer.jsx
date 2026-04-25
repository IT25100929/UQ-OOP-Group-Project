function footer() {
    return (
        <footer className="bg-dark text-white pt-5 pb-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <h5 className="text-success fw-bold">THE ROYAL PALMS</h5>
                        <p className="small text-secondary">Bringing you the ultimate luxury experience since 2026.</p>
                    </div>
                    <div className="col-md-4 mb-4 text-center">
                        <h6>Quick Links</h6>
                        <ul className="list-unstyled small text-secondary">
                            <li>Home</li>
                            <li>Rooms</li>
                            <li>About Us</li>

                        </ul>
                    </div>
                    <div className="col-md-4 mb-4 text-end">
                        <h6>Contact Us</h6>
                        <p className="small text-secondary">123 Luxury Lane, Colombo<br />info@royalpalms.com</p>
                    </div>
                </div>
                <hr className="border-secondary" />
                <p className="text-center small text-secondary">&copy; 2026 The Royal Palms Hotel. All Rights Reserved.</p>
            </div>
        </footer>


    );

}

export default footer;