import hotelImage1 from "../assets/pexels-aksinfo7-36749693.jpg";

function Dinein() {
    return (
        <div className="container-fluid p-0">
            <div className="card border-0 rounded-0 bg-dark text-white overflow-hidden">

                <img src={hotelImage1}
                    className="card-img" alt="Luxury Suite"
                    style={{ height: '600px', objectFit: 'cover', opacity: 0.6 }} />

                <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center text-center">
                    {/* Added a small subtitle for a premium feel */}
                    <span className="text-uppercase mb-2" style={{ letterSpacing: '4px', fontSize: '0.9rem' }}>Experience</span>
                    <h1 className="display-3 fw-bold mb-3">Explore Our Suites</h1>

                    <p className="lead mb-4 mx-auto" style={{ maxWidth: '600px' }}>
                        Indulge in the perfect blend of contemporary luxury and traditional elegance,
                        designed for the discerning traveler.
                    </p>

                    {/* Professional Button Design */}
                    <a href="#rooms"
                        className="btn btn-outline-light px-5 py-3 fw-bold text-uppercase"
                        style={{ borderRadius: '50px', letterSpacing: '2px', fontSize: '0.85rem', borderWidth: '2px' }}>
                        View Menu
                    </a>
                </div>

            </div>
        </div>

    );
}

export default Dinein;