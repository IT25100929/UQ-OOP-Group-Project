import hotelImage1 from "../assets/pexels-quang-nguyen-vinh-222549-26729395.jpg";
import hotelImage2 from "../assets/pexels-quang-nguyen-vinh-222549-6877613.jpg";
import hotelImage3 from "../assets/pexels-quang-nguyen-vinh-222549-26729406.jpg";
import MenuCard from "../components/MenuCard";
import { Link } from 'react-router-dom';

function Restaurant() {

    const menuData = [
        {
            id: 1,
            name: "Signature Wagyu Burger",
            price: 1250,
            description: "Premium wagyu beef with truffle aioli, aged cheddar, and caramelized onions on a brioche bun.",
            category: "Main Course",
            image: hotelImage1 // Placeholder, usually a URL from DB
        },
        {
            id: 2,
            name: "Lobster Thermidor",
            price: 3400,
            description: "Creamy lobster meat cooked in a rich wine sauce, topped with parmesan and baked to perfection.",
            category: "Seafood",
            image: hotelImage2
        },
        {
            id: 1,
            name: "Signature Wagyu Burger",
            price: 1250,
            description: "Premium wagyu beef with truffle aioli, aged cheddar, and caramelized onions on a brioche bun.",
            category: "Main Course",
            image: hotelImage1 // Placeholder, usually a URL from DB
        },
        {
            id: 2,
            name: "Lobster Thermidor",
            price: 3400,
            description: "Creamy lobster meat cooked in a rich wine sauce, topped with parmesan and baked to perfection.",
            category: "Seafood",
            image: hotelImage2
        },
        {
            id: 1,
            name: "Signature Wagyu Burger",
            price: 1250,
            description: "Premium wagyu beef with truffle aioli, aged cheddar, and caramelized onions on a brioche bun.",
            category: "Main Course",
            image: hotelImage1 // Placeholder, usually a URL from DB
        },
        {
            id: 2,
            name: "Lobster Thermidor",
            price: 3400,
            description: "Creamy lobster meat cooked in a rich wine sauce, topped with parmesan and baked to perfection.",
            category: "Seafood",
            image: hotelImage2
        }

    ];

    return (
        <>
            <div style={{ backgroundColor: '#121212', minHeight: '100vh' }}>
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={hotelImage1} className="d-block w-100" style={{ height: '500px', objectFit: 'cover' }} alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={hotelImage2} className="d-block w-100" style={{ height: '500px', objectFit: 'cover' }} alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={hotelImage3} className="d-block w-100" style={{ height: '500px', objectFit: 'cover' }} alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                {/* 2. Reservation Section (For Dine-in) */}
                <div className="py-5" style={{ backgroundColor: '#1a1a1a', borderBottom: '1px solid #333' }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-8 text-center text-lg-start mb-3 mb-lg-0">
                                <h3 className="text-white fw-bold">Dining In?</h3>
                                <p className="text-secondary mb-0">Reserve your table online and skip the wait.</p>
                            </div>
                            <div className="col-lg-4 text-center text-lg-end">
                                <Link to="/dining" className="btn btn-outline-success btn-lg rounded-pill px-4 transition-hover">
                                    Book a Table
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. Online Order Section (À La Carte) */}
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <span className="badge rounded-pill bg-success mb-2 px-3 py-2">
                            <i className="bi bi-bicycle me-2"></i> ONLINE ORDERING AVAILABLE
                        </span>
                        <h2 className="display-5 text-white fw-bold">À La Carte Menu</h2>
                        <p className="text-secondary">Freshly prepared and delivered straight to your door.</p>
                    </div>

                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                        {menuData.map((food) => (
                            <div className="col" key={food.id}>
                                <MenuCard item={food} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Styling */}
                <style>
                    {`
                    .transition-hover {
                        transition: all 0.3s ease;
                    }
                    .transition-hover:hover {
                        transform: translateY(-3px);
                        box-shadow: 0 8px 15px rgba(25, 135, 84, 0.2);
                    }
                    `}
                </style>
            </div>
        </>

    );
}

export default Restaurant;