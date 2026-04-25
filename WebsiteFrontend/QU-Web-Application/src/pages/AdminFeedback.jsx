import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminFeedback() {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/feedback")
            .then(res => setFeedbacks(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="container mt-4">
            <h2 className="text-success mb-4">Guest Feedback</h2>
            <div className="row">
                {feedbacks.map(f => (
                    <div className="col-md-6 mb-4" key={f.id}>
                        <div className="card bg-dark text-white border-secondary h-100">
                            <div className="card-header border-secondary d-flex justify-content-between">
                                <span className="badge bg-success">{f.category}</span>
                                <span className="text-warning">{"⭐".repeat(parseInt(f.rating))}</span>
                            </div>
                            <div className="card-body">
                                <p className="card-text">"{f.comment}"</p>
                            </div>
                            <div className="card-footer border-secondary text-light small">
                                Received: {new Date(f.submittedAt).toLocaleDateString()}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AdminFeedback;