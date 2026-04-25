import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Maintenance() {
    const [issues, setIssues] = useState([]);
    const [newIssue, setNewIssue] = useState({
        issueTitle: '',
        priority: 'Medium',
        description: ''
    });

    // Fetch existing issues
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8080/api/maintenance", newIssue);
            alert("Issue reported to IT Department.");
            setNewIssue({ issueTitle: '', priority: 'Medium', description: '' });
            fetchIssues(); // Refresh the list
        } catch (err) {
            alert("Failed to submit issue.");
        }
    };

    return (
        <div className="container">
            <h2 className="text-success mb-4"><i className="bi bi-tools me-2"></i>IT Maintenance Logs</h2>

            {/* Form Section */}
            <div className="card bg-black border-secondary p-4 mb-5 shadow">
                <h5 className="text-white mb-3">Report New Technical Issue</h5>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-8 mb-3">
                            <label className="text-secondary small">Issue Title</label>
                            <input type="text" className="form-control bg-dark text-white border-secondary"
                                value={newIssue.issueTitle} onChange={(e) => setNewIssue({ ...newIssue, issueTitle: e.target.value })} required />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label className="text-secondary small">Priority</label>
                            <select className="form-select bg-dark text-white border-secondary"
                                value={newIssue.priority} onChange={(e) => setNewIssue({ ...newIssue, priority: e.target.value })}>
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                                <option value="Urgent">Urgent</option>
                            </select>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="text-secondary small">Description</label>
                        <textarea className="form-control bg-dark text-white border-secondary" rows="3"
                            value={newIssue.description} onChange={(e) => setNewIssue({ ...newIssue, description: e.target.value })} required></textarea>
                    </div>
                    <button type="submit" className="btn btn-success px-4">Submit to IT</button>
                </form>
            </div>

            {/* List Section */}
            <div className="table-responsive">
                <table className="table table-dark table-hover border-secondary">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Issue</th>
                            <th>Priority</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {issues.map(issue => (
                            <tr key={issue.id}>
                                <td className="small text-secondary">{new Date(issue.reportedAt).toLocaleDateString()}</td>
                                <td>
                                    <div className="fw-bold">{issue.issueTitle}</div>
                                    <div className="small text-secondary">{issue.description}</div>
                                </td>
                                <td>
                                    <span className={`badge ${issue.priority === 'Urgent' ? 'bg-danger' : 'bg-warning text-dark'}`}>
                                        {issue.priority}
                                    </span>
                                </td>
                                <td><span className="text-info">● {issue.status}</span></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Maintenance;