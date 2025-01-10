import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Download } from 'react-feather';

const Reports = () => {
    const [selectedReport, setSelectedReport] = useState('weekly');

    const reportData = {
        weekly: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [
                {
                    label: 'Income',
                    data: [300, 450, 320, 500, 400, 350, 600],
                    backgroundColor: 'rgba(75, 192, 192, 0.6)',
                },
                {
                    label: 'Expenses',
                    data: [200, 300, 250, 350, 300, 400, 450],
                    backgroundColor: 'rgba(255, 99, 132, 0.6)',
                },
            ],
        },
        monthly: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
                {
                    label: 'Income',
                    data: [2500, 2800, 3000, 2700, 3200, 3500],
                    backgroundColor: 'rgba(75, 192, 192, 0.6)',
                },
                {
                    label: 'Expenses',
                    data: [2000, 2200, 2500, 2300, 2800, 3000],
                    backgroundColor: 'rgba(255, 99, 132, 0.6)',
                },
            ],
        },
    };

    const handleDownloadReport = () => {
        // Placeholder for report download functionality
        console.log('Downloading report...');
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Financial Reports</h1>
                <button className="btn btn-primary" onClick={handleDownloadReport}>
                    <Download className="mr-2" /> Download Report
                </button>
            </div>

            <div className="card bg-base-100 shadow-xl mb-6">
                <div className="card-body">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="card-title">Income vs Expenses</h2>
                        <select
                            className="select select-bordered w-full max-w-xs"
                            value={selectedReport}
                            onChange={(e) => setSelectedReport(e.target.value)}
                        >
                            <option value="weekly">Weekly</option>
                            <option value="monthly">Monthly</option>
                        </select>
                    </div>
                    <Bar data={reportData[selectedReport]} />
                </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title mb-4">Summary</h2>
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Income</th>
                                <th>Expenses</th>
                                <th>Net</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Total</td>
                                <td className="text-success">$3,500.00</td>
                                <td className="text-error">$2,800.00</td>
                                <td className="font-bold">$700.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Reports;

