import React from 'react';

const MenuCard = ({ item, onAdd }) => {

    const handleAddClick = () => {
        // Trigger the add to cart logic from parent
        onAdd(item);
    };

    return (
        <div className="card h-100 bg-dark text-white border-secondary shadow-sm overflow-hidden transition-hover"
            style={{ borderBottom: '4px solid #198754' }}>

            {/* 1. Image Container */}
            <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                <img
                    src={item.image}
                    className="card-img-top h-100 w-100"
                    alt={item.name}
                    style={{ objectFit: 'cover' }}
                />
                {/* Category Overlay tag */}
                <div className="position-absolute top-0 end-0 m-2">
                    <span className="badge bg-black bg-opacity-75 text-success border border-success" style={{ fontSize: '0.65rem' }}>
                        {item.category}
                    </span>
                </div>
            </div>

            <div className="card-body d-flex flex-column p-3">
                <div className="d-flex justify-content-between align-items-start mb-2">
                    <h5 className="card-title fw-bold mb-0" style={{ fontSize: '1.1rem', letterSpacing: '0.5px' }}>
                        {item.name}
                    </h5>
                    <span className="text-success fw-bold ms-2">Rs.{item.price}</span>
                </div>

                {/* 2. Description */}
                <p className="card-text text-secondary small mb-4" style={{ flexGrow: 1, lineHeight: '1.5' }}>
                    {item.description}
                </p>

                <div className="d-flex justify-content-between align-items-center mt-auto">
                    <div className="text-muted small">
                        <i className="bi bi-clock me-1"></i> 15-20 min
                    </div>

                    {/* 3. Add to Order Button */}
                    <button
                        onClick={handleAddClick}
                        className="btn btn-success btn-sm rounded-pill px-3 fw-bold order-btn"
                        style={{ fontSize: '0.8rem', transition: 'all 0.2s' }}
                    >
                        <i className="bi bi-plus-lg me-1"></i> Add to Order
                    </button>
                </div>
            </div>

            {/* Internal Scoped CSS for the button click effect */}
            <style>
                {`
                .order-btn:active {
                    transform: scale(0.92);
                    background-color: #157347 !important;
                }
                .transition-hover {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .transition-hover:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 20px rgba(0,0,0,0.5) !important;
                }
                `}
            </style>
        </div>
    );
};

export default MenuCard;