import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Maintenance() {
    const [issues, setIssues] = useState([]);
    const [newIssue, setNewIssue] = useState({
        issueTitle: '',
        priority: 'Medium',
        description: ''
    });

    const fetchIssues = async () => {
        try {
            const res = await axios.get("http://localhost:8080/api/maintenance");
            setIssues(res.data);
        } catch (err) {
            console.error("Error fetching issues", err);
        }
    };

    useEffect(() => {
        fetchIssues();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("Confirm this request has been fulfilled/repaired?")) {
            try {
                await axios.delete(`http://localhost:8080/api/maintenance/${id}`);
                setIssues(issues.filter(issue => issue.id !== id));
            } catch (err) {
                alert("Failed to update status.");
                console.error(err);
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8080/api/maintenance", newIssue);
            alert("Request sent to Maintenance & Housekeeping.");
            setNewIssue({ issueTitle: '', priority: 'Medium', description: '' });
            fetchIssues();
        } catch (err) {
            alert("Failed to submit request.");
        }
    };

    return (
        <div className="container py-4">
            {/* Custom CSS to fix placeholder visibility */}
            <style>
                {`
                    .custom-placeholder::placeholder {
                        color: #adb5bd !important;
                        opacity: 1;
                    }
                    /* Ensure text you type is also bright */
                    .form-control:focus {
                        background-color: #2b3035 !important;
                        color: white !important;
                    }
                `}
            </style>

            <h2 className="text-success mb-4">
                <i className="bi bi-house-gear-fill me-2"></i>Royal Palms Maintenance & Housekeeping
            </h2>

            {/* Form Section */}
            <div className="card bg-black border-secondary p-4 mb-5 shadow">
                <h5 className="text-white mb-3">Submit Maintenance Issue or Guest Requests</h5>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-8 mb-3">
                            <label className="text-secondary small">Request Title</label>
                            <input
                                type="text"
                                className="form-control bg-dark text-white border-secondary custom-placeholder"
                                placeholder="Enter a brief summary (e.g. Room 104 - AC not cooling)"
                                value={newIssue.issueTitle}
                                onChange={(e) => setNewIssue({ ...newIssue, issueTitle: e.target.value })}
                                required
                            />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label className="text-secondary small">Urgency Level</label>
                            <select className="form-select bg-dark text-white border-secondary"
                                value={newIssue.priority} onChange={(e) => setNewIssue({ ...newIssue, priority: e.target.value })}>
                                <option value="Low">Low (Routine)</option>
                                <option value="Medium">Medium (Standard)</option>
                                <option value="High">High (Urgent)</option>
                                <option value="Urgent">Emergency (Immediate Action)</option>
                            </select>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="text-secondary small">Details</label>
                        <textarea
                            className="form-control bg-dark text-white border-secondary custom-placeholder"
                            rows="3"
                            placeholder="Provide specific details or items requested by the guest..."
                            value={newIssue.description}
                            onChange={(e) => setNewIssue({ ...newIssue, description: e.target.value })}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-success px-4">Submit Request</button>
                </form>
            </div>

            {/* List Section */}
            <div className="table-responsive">
                <table className="table table-dark table-hover border-secondary">
                    <thead>
                        <tr>
                            <th>Date Reported</th>
                            <th style={{ width: '40%' }}>Maintenance Detail</th>
                            <th>Priority</th>
                            <th style={{ width: '180px' }}>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {issues.map(issue => (
                            <tr key={issue.id} className="align-middle">
                                <td className="small text-secondary">{new Date(issue.reportedAt).toLocaleDateString()}</td>
                                <td>
                                    <div className="fw-bold text-white">{issue.issueTitle}</div>
                                    <div className="small text-secondary">{issue.description}</div>
                                </td>
                                <td>
                                    <span className={`badge ${issue.priority === 'Urgent' ? 'bg-danger' : 'bg-warning text-dark'}`}>
                                        {issue.priority}
                                    </span>
                                </td>
                                <td style={{ whiteSpace: 'nowrap' }}>
                                    <span className="text-info">● {issue.status}</span>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-outline-success btn-sm d-flex align-items-center gap-1"
                                        onClick={() => handleDelete(issue.id)}
                                        title="Mark as Resolved"
                                    >
                                        <i className="bi bi-check-lg"></i> Resolved
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Maintenance;