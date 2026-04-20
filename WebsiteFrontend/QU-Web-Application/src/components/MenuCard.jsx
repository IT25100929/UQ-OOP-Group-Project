const MenuCard = ({ item }) => {
    return (
        <div className="card h-100 bg-dark text-white border-secondary shadow-sm overflow-hidden transition-hover"
            style={{ borderBottom: '4px solid #198754' }}>

            {/* 1. Fixed Image Height */}
            <div style={{ height: '200px', overflow: 'hidden' }}>
                <img
                    src={item.image}
                    className="card-img-top h-100 w-100"
                    alt={item.name}
                    style={{ objectFit: 'cover' }}
                />
            </div>

            <div className="card-body d-flex flex-column p-3">
                <div className="d-flex justify-content-between align-items-start mb-2">
                    <h5 className="card-title fw-bold mb-0" style={{ fontSize: '1.1rem' }}>{item.name}</h5>
                    <span className="text-success fw-bold">₹{item.price}</span>
                </div>

                {/* 2. Smaller font for description */}
                <p className="card-text text-secondary small mb-4" style={{ flexGrow: 1 }}>
                    {item.description}
                </p>

                <div className="d-flex justify-content-between align-items-center mt-auto">
                    <span className="badge bg-secondary opacity-75" style={{ fontSize: '0.65rem' }}>
                        {item.category}
                    </span>
                    <button className="btn btn-success btn-sm rounded-pill px-3" style={{ fontSize: '0.8rem' }}>
                        Add to Order
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MenuCard;