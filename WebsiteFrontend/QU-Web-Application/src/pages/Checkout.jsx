import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Checkout = () => {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);
    const [customer, setCustomer] = useState({
        name: '', email: '', phone: '', address: '', notes: ''
    });

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('restaurantCart')) || [];
        setCart(savedCart);
        window.scrollTo(0, 0);
    }, []);

    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const deliveryFee = subtotal > 0 ? 150 : 0;
    const total = subtotal + deliveryFee;

    const handleInputChange = (e) => {
        setCustomer({ ...customer, [e.target.name]: e.target.value });
    };

    const handlePlaceOrder = async (e) => {
        e.preventDefault();

        const orderPayload = {
            customerName: customer.name,
            customerEmail: customer.email,
            customerPhone: customer.phone,
            deliveryAddress: customer.address,
            specialInstructions: customer.notes,
            items: cart.map(item => ({
                menuItemId: item.id,
                quantity: item.quantity,
                priceAtOrder: item.price
            })),
            totalAmount: total
        };

        try {
            const response = await axios.post('http://localhost:8080/api/orders', orderPayload);
            if (response.status === 201 || response.status === 200) {
                alert("Order Placed Successfully!");
                localStorage.removeItem('restaurantCart');
                navigate('/restaurant');
            }
        } catch (error) {
            console.error("Order Submission Failed:", error);
            alert("Failed to place order. Please check connection to backend.");
        }
    };

    if (cart.length === 0) {
        return (
            <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '120px' }} className="text-center text-white p-5">
                <div>
                    <i className="bi bi-cart-x text-secondary" style={{ fontSize: '4rem' }}></i>
                    <h2 className="mt-4 fw-bold">Your cart is empty</h2>
                    <p className="text-secondary mb-4">Add some delicious items from the menu first!</p>
                    <Link to="/restaurant" className="btn btn-success rounded-pill px-5 py-2 fw-bold shadow">
                        Go Back to Menu
                    </Link>
                </div>
            </div>
        );
    }

    return (
        /* Increased paddingTop to 120px to prevent header overlap */
        <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', color: 'white', paddingTop: '60px' }}>
            <div className="container pb-5 mt-5">
                {/* Page Title */}
                <div className="mb-5">
                    <h2 className="fw-bold text-success mb-1">Secure Checkout</h2>
                    <p className="text-secondary">Provide your details to complete the order at The Royal Palms</p>
                </div>

                <div className="row g-4">
                    {/* LEFT COLUMN: Customer Form */}
                    <div className="col-lg-7">
                        <div className="card border-0 shadow-lg p-4" style={{ backgroundColor: '#161616', borderRadius: '15px' }}>
                            <h5 className="mb-4 text-white border-bottom border-secondary pb-3">Delivery Information</h5>
                            <form onSubmit={handlePlaceOrder}>
                                <div className="row g-3">
                                    <div className="col-md-12 mb-2">
                                        <label className="text-secondary small mb-1 ms-1">Full Name</label>
                                        <input type="text" name="name" placeholder="Seran" className="form-control bg-dark border-secondary text-white py-2" required onChange={handleInputChange} />
                                    </div>
                                    <div className="col-md-6 mb-2">
                                        <label className="text-secondary small mb-1 ms-1">Email Address</label>
                                        <input type="email" name="email" placeholder="example@email.com" className="form-control bg-dark border-secondary text-white py-2" required onChange={handleInputChange} />
                                    </div>
                                    <div className="col-md-6 mb-2">
                                        <label className="text-secondary small mb-1 ms-1">Phone Number</label>
                                        <input type="tel" name="phone" placeholder="07XXXXXXXX" className="form-control bg-dark border-secondary text-white py-2" required onChange={handleInputChange} />
                                    </div>
                                    <div className="col-md-12 mb-2">
                                        <label className="text-secondary small mb-1 ms-1">Address</label>
                                        <textarea name="address" placeholder="Enter full delivery address" className="form-control bg-dark border-secondary text-white" rows="3" required onChange={handleInputChange}></textarea>
                                    </div>
                                    <div className="col-md-12">
                                        <label className="text-secondary small mb-1 ms-1">Special Instructions (Notes)</label>
                                        <input type="text" name="notes" placeholder="e.g. Extra spicy, door code 1234" className="form-control bg-dark border-secondary text-white py-2" onChange={handleInputChange} />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-success btn-lg w-100 rounded-pill mt-5 fw-bold shadow transition-hover py-3">
                                    PLACE ORDER • Rs. {total.toLocaleString()}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Order Summary */}
                    <div className="col-lg-5">
                        {/* Adjusted 'top' to 140px so the sticky card doesn't hit the header when scrolling */}
                        <div className="card border-0 shadow-lg p-4 sticky-top" style={{ backgroundColor: '#161616', borderRadius: '15px', top: '140px' }}>
                            <h5 className="mb-4 text-success fw-bold">Order Summary</h5>

                            <div className="custom-scroll pe-2" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                                {cart.map((item, index) => (
                                    <div key={index} className="d-flex align-items-center mb-3 bg-black p-2 rounded-3 border border-secondary border-opacity-25">
                                        <img
                                            src={`/assets/menu/${item.image}`}
                                            alt={item.name}
                                            className="rounded"
                                            style={{ width: '55px', height: '55px', objectFit: 'cover' }}
                                        />
                                        <div className="ms-3 flex-grow-1">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="mb-0 small fw-bold text-white">{item.name}</h6>
                                                <span className="small text-secondary fw-bold">x{item.quantity}</span>
                                            </div>
                                            <span className="text-success small">Rs. {(item.price * item.quantity).toLocaleString()}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <hr className="border-secondary mt-4 mb-3" />

                            <div className="d-flex justify-content-between text-secondary mb-2 small">
                                <span>Subtotal</span>
                                <span>Rs. {subtotal.toLocaleString()}</span>
                            </div>
                            <div className="d-flex justify-content-between text-secondary mb-3 small">
                                <span>Delivery Fee</span>
                                <span className="text-info">Rs. {deliveryFee.toLocaleString()}</span>
                            </div>

                            <div className="d-flex justify-content-between text-white fw-bold fs-4 mt-2">
                                <span>Total Amount</span>
                                <span className="text-success">Rs. {total.toLocaleString()}</span>
                            </div>

                            <div className="mt-4 p-3 bg-dark rounded-3 text-center border border-secondary border-opacity-10">
                                <p className="small text-light mb-0">
                                    <i className="bi bi-shield-check text-success me-2"></i>
                                    Secure and Private Connection
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;