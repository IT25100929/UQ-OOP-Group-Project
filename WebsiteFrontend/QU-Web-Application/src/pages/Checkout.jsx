import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Checkout = () => {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);
    const [customer, setCustomer] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        notes: ''
    });

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('restaurantCart')) || [];
        setCart(savedCart);

        // This ensures the page starts at the top when navigated to
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
            customerInfo: customer,
            items: cart,
            totalAmount: total,
            orderDate: new Date().toISOString()
        };
        console.log("Sending to Spring Boot:", orderPayload);
        alert("Order Placed Successfully!");
        localStorage.removeItem('restaurantCart');
        navigate('/restaurant');
    };

    if (cart.length === 0) {
        return (
            <div style={{ backgroundColor: '#121212', minHeight: '100vh', paddingTop: '100px' }} className="text-center text-white">
                <h2 className="mb-4">Your cart is empty</h2>
                <Link to="/restaurant" className="btn btn-success rounded-pill px-4">Go Back to Menu</Link>
            </div>
        );
    }

    return (
        /* Added pt-5 and adjusted minHeight to ensure no white gaps */
        <div style={{
            backgroundColor: '#121212',
            minHeight: '100vh',
            color: 'white',
            paddingTop: '80px', // Adjust this value to match your Header's height
            marginTop: '0'
        }}>
            {/* Removed mt-5 from container and used py-5 for internal spacing */}
            <div className="container py-5">
                <h2 className="display-6 fw-bold mb-5 border-bottom border-secondary pb-3">Complete Your Order</h2>

                <div className="row g-5">
                    <div className="col-lg-7">
                        <div className="p-4 rounded-4" style={{ backgroundColor: '#1e1e1e' }}>
                            <h4 className="mb-4 text-success">Delivery Details</h4>
                            <form onSubmit={handlePlaceOrder}>
                                <div className="mb-3">
                                    <label className="form-label text-secondary small">Full Name</label>
                                    <input type="text" name="name" className="form-control bg-dark border-secondary text-white shadow-none" required onChange={handleInputChange} />
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label text-secondary small">Email</label>
                                        <input type="email" name="email" className="form-control bg-dark border-secondary text-white shadow-none" required onChange={handleInputChange} />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label text-secondary small">Phone Number</label>
                                        <input type="tel" name="phone" className="form-control bg-dark border-secondary text-white shadow-none" required onChange={handleInputChange} />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label text-secondary small">Delivery Address</label>
                                    <textarea name="address" rows="3" className="form-control bg-dark border-secondary text-white shadow-none" required onChange={handleInputChange}></textarea>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label text-secondary small">Special Instructions (Optional)</label>
                                    <input type="text" name="notes" className="form-control bg-dark border-secondary text-white shadow-none" placeholder="No spicy, extra napkins, etc." onChange={handleInputChange} />
                                </div>
                                <button type="submit" className="btn btn-success btn-lg w-100 rounded-pill mt-4 fw-bold shadow">
                                    Confirm & Place Order (Rs. {total})
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="p-4 rounded-4" style={{ border: '1px solid #333', backgroundColor: '#1a1a1a' }}>
                            <h4 className="mb-4">Order Summary</h4>
                            <div className="cart-items-list mb-4" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                                {cart.map((item) => (
                                    <div key={item.id} className="d-flex justify-content-between align-items-center mb-3 pb-2 border-bottom border-secondary">
                                        <div className="d-flex align-items-center">
                                            <div className="bg-success rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '30px', height: '30px', fontSize: '0.8rem' }}>
                                                {item.quantity}
                                            </div>
                                            <div>
                                                <p className="mb-0 fw-bold">{item.name}</p>
                                                <small className="text-secondary">Rs. {item.price} each</small>
                                            </div>
                                        </div>
                                        <span className="fw-bold text-success">Rs. {item.price * item.quantity}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <span className="text-secondary">Subtotal</span>
                                <span>Rs. {subtotal}</span>
                            </div>
                            <div className="d-flex justify-content-between mb-3 pb-3 border-bottom border-secondary">
                                <span className="text-secondary">Delivery Fee</span>
                                <span>Rs. {deliveryFee}</span>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <h4 className="fw-bold">Total</h4>
                                <h4 className="fw-bold text-success">Rs. {total}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Global Styles to clean up potential browser gaps */}
            <style dangerouslySetInnerHTML={{
                __html: `
                body { margin: 0; padding: 0; background-color: #121212; }
                .form-control:focus {
                    background-color: #2b2b2b;
                    border-color: #198754;
                    color: white;
                }
            `}} />
        </div>
    );
};

export default Checkout;