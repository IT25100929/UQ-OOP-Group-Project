import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminOrders() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadOrders();
    }, []);

    const loadOrders = async () => {
        try {
            const result = await axios.get("http://localhost:8080/api/orders");
            setOrders(result.data);
            setLoading(false);
        } catch (error) {
            console.error("Error loading orders", error);
            setLoading(false);
        }
    };

    const deleteOrder = async (id) => {
        if (window.confirm("Are you sure you want to delete this food order?")) {
            try {
                await axios.delete(`http://localhost:8080/api/orders/${id}`);
                loadOrders();
            } catch (error) {
                alert("Error deleting order");
            }
        }
    };

    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="text-white">Food Delivery Orders</h2>
                <span className="badge bg-success">{orders.length} Total Orders</span>
            </div>

            <div className="card bg-black border-secondary text-white">
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-dark table-hover m-0">
                            <thead className="table-secondary">
                                <tr>
                                    <th>ID</th>
                                    <th>Customer</th>
                                    <th>Address</th>
                                    <th>Instructions</th>
                                    <th>Total</th>
                                    <th>Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading ? (
                                    <tr><td colSpan="7" className="text-center py-4">Loading Orders...</td></tr>
                                ) : orders.length === 0 ? (
                                    <tr><td colSpan="7" className="text-center py-4 text-secondary">No orders placed yet.</td></tr>
                                ) : (
                                    orders.map((order) => (
                                        <tr key={order.id} className="align-middle">
                                            <td>#{order.id}</td>
                                            <td>
                                                <div className="fw-bold">{order.customerName}</div>
                                                <small className="text-secondary">{order.customerEmail}</small><br />
                                                <small className="text-secondary">{order.customerPhone}</small>
                                            </td>
                                            <td style={{ maxWidth: '200px' }}>{order.deliveryAddress}</td>
                                            <td className="fst-italic text-info small">{order.specialInstructions || "N/A"}</td>
                                            <td className="fw-bold text-success">${order.totalAmount?.toFixed(2)}</td>
                                            <td>{new Date(order.orderDate).toLocaleDateString()}</td>
                                            <td>
                                                <button
                                                    className="btn btn-outline-danger btn-sm d-flex align-items-center gap-1"
                                                    onClick={() => deleteOrder(order.id)}
                                                >
                                                    <i className="bi bi-trash"></i> Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminOrders;