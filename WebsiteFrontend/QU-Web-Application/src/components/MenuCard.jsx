import React from 'react';

const MenuCard = ({ item, onAdd }) => {
    return (
        <div className="card h-100 bg-dark text-white border-secondary shadow-sm overflow-hidden transition-hover"
            style={{ borderBottom: '4px solid #198754' }}>
            <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                <img
                    // This points to public/assets/menu/ + whatever filename is in the DB
                    src={`/assets/menu/${item.image}`}
                    className="card-img-top h-100 w-100"
                    alt={item.name}
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <div className="card-body d-flex flex-column p-3">
                <div className="d-flex justify-content-between align-items-start mb-2">
                    <h5 className="card-title fw-bold mb-0">{item.name}</h5>
                    <span className="text-success fw-bold ms-2">Rs.{item.price}</span>
                </div>
                <p className="card-text text-secondary small mb-4">{item.description}</p>
                <button
                    onClick={() => onAdd(item)}
                    className="btn btn-success btn-sm rounded-pill px-3 fw-bold order-btn"
                >
                    <i className="bi bi-plus-lg me-1"></i> Add to Order
                </button>
            </div>
        </div>
    );
};

export default MenuCard;