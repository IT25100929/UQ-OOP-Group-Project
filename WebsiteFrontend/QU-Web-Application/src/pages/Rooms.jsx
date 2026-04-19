import hotelImage1 from "../assets/pexels-burakeroglu3-31089991.jpg";
// Import other images if you have them, or reuse the same one for now
// import hotelImage2 from "../assets/room2.jpg";

function Rooms() {
    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Our Luxury Accommodations</h2>
            <div className="row g-4">
                {/* Room 1 */}
                <div className="col-md-4">
                    <div className="card shadow-sm h-100">
                        <img src={hotelImage1} className="card-img-top" alt="Deluxe Room" style={{ height: '250px', objectFit: 'cover' }} />
                        <div className="card-body">
                            <h5 className="card-title">Deluxe Ocean View</h5>
                            <p className="card-text">High-end comfort with a stunning view of the coastline.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="fw-bold text-success">$150 / Night</span>
                                <button className="btn btn-sm btn-outline-primary">Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Room 2 (Placeholder) */}
                <div className="col-md-4">
                    <div className="card shadow-sm h-100">
                        <img src={hotelImage1} className="card-img-top" alt="Executive Suite" style={{ height: '250px', objectFit: 'cover' }} />
                        <div className="card-body">
                            <h5 className="card-title">Executive Suite</h5>
                            <p className="card-text">Perfect for business travelers who need space and speed.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="fw-bold text-success">$200 / Night</span>
                                <button className="btn btn-sm btn-outline-primary">Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Room 3 (Placeholder) */}
                <div className="col-md-4">
                    <div className="card shadow-sm h-100">
                        <img src={hotelImage1} className="card-img-top" alt="Family Room" style={{ height: '250px', objectFit: 'cover' }} />
                        <div className="card-body">
                            <h5 className="card-title">Family Garden Room</h5>
                            <p className="card-text">Spacious living for the whole family with direct garden access.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="fw-bold text-success">$120 / Night</span>
                                <button className="btn btn-sm btn-outline-primary">Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rooms;