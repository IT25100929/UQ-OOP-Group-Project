import hotelImage1 from "../assets/pexels-aksinfo7-36749693.jpg";
import { Link } from 'react-router-dom';

function Dinein() {
    const restaurants = [
        { id: 1, name: "The Grand Buffet", type: "International", desc: "A world-class spread featuring over 100 global delicacies crafted by executive chefs.", img: hotelImage1 },
        { id: 2, name: "Azure Grill", type: "Seafood & Steak", desc: "Fresh catches and premium cuts grilled to perfection by the poolside under the stars.", img: hotelImage1 },
        { id: 3, name: "Sakura Zen", type: "Japanese Fusion", desc: "Authentic sushi and teppanyaki in a serene, modern setting that honors tradition.", img: hotelImage1 },
        { id: 4, name: "The Spice Route", type: "Indian Fine Dining", desc: "Rich heritage flavors served with a contemporary twist and aromatic spices.", img: hotelImage1 },
        { id: 5, name: "Velvet Lounge", type: "Tapas & Cocktails", desc: "Small plates and artisan spirits perfect for evening unwinding in a plush atmosphere.", img: hotelImage1 },
    ];

    return (
        <div className="container-fluid p-0 bg-black text-white" style={{ minHeight: '100vh' }}>

            {/* Hero Section with Smooth Gradient Transition */}
            <div className="position-relative vh-100 overflow-hidden">
                <img
                    src={hotelImage1}
                    className="w-100 h-100"
                    alt="Dining Hero"
                    style={{ objectFit: 'cover', opacity: 0.5 }}
                />

                {/* The Secret Sauce: Gradient Overlay */}
                <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 80%, rgba(0,0,0,1) 100%)'
                    }}
                ></div>

                <div className="position-absolute top-50 start-50 translate-middle text-center w-100 px-3">
                    <span className="text-uppercase mb-2 d-block" style={{ letterSpacing: '8px', fontSize: '0.9rem', color: '#adb5bd' }}>
                        The Art of Food
                    </span>
                    <h1 className="display-1 fw-bold mb-3" style={{ letterSpacing: '-2px' }}>Dining</h1>
                    <p className="lead mb-4 mx-auto" style={{ maxWidth: '700px', fontWeight: '300' }}>
                        Experience five distinct culinary worlds. From sunrise breakfasts to midnight cocktails,
                        our doors are open to everyone.
                    </p>
                </div>

                {/* Subtle Scroll Indicator */}
                <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4 text-center">
                    <div style={{
                        width: '1px',
                        height: '60px',
                        background: 'linear-gradient(to bottom, transparent, white)',
                        margin: '0 auto'
                    }}></div>
                </div>
            </div>

            {/* Restaurants Full-Width Section */}
            <div className="container-fluid p-0">
                {restaurants.map((res, index) => (
                    <div key={res.id} className={`row g-0 align-items-center ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}
                        style={{ minHeight: '600px' }}>

                        {/* Image Column */}
                        <div className="col-lg-7 overflow-hidden">
                            <img
                                src={res.img}
                                alt={res.name}
                                className="w-100 h-100"
                                style={{ objectFit: 'cover', minHeight: '600px' }}
                            />
                        </div>

                        {/* Text Content Column */}
                        <div className="col-lg-5 p-5 d-flex flex-column justify-content-center bg-black">
                            <div className="px-md-5">
                                <small className="text-info text-uppercase fw-bold" style={{ letterSpacing: '3px' }}>
                                    {res.type}
                                </small>
                                <h2 className="display-4 fw-bold my-3">{res.name}</h2>
                                <p className="lead mb-4" style={{ color: '#adb5bd', lineHeight: '1.8', fontSize: '1.1rem' }}>
                                    {res.desc}
                                </p>
                                <div>
                                    <Link
                                        to={`/book-table/${res.id}`}
                                        className="btn btn-outline-light px-5 py-3 fw-bold text-uppercase"
                                        style={{ borderRadius: '0', letterSpacing: '2px', fontSize: '0.8rem', borderWidth: '2px' }}
                                    >
                                        Book a Table
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer-like Call to Action */}
            <div className="py-5 text-center bg-black border-top border-secondary" style={{ opacity: 0.5 }}>
                <p className="text-muted italic mb-0">Walk-ins are welcome, but reservations are recommended.</p>
            </div>
        </div>
    );
}

export default Dinein;