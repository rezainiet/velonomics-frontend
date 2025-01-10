import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Budget = () => {
    const [budgets, setBudgets] = useState([
        { category: 'Food', budget: 500, spent: 350 },
        { category: 'Transport', budget: 200, spent: 150 },
        { category: 'Entertainment', budget: 300, spent: 200 },
        { category: 'Bills', budget: 1000, spent: 950 },
    ]);

    const pieData = {
        labels: budgets.map(b => b.category),
        datasets: [
            {
                data: budgets.map(b => b.budget),
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
            },
        ],
    };

    const pieOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
            },
        },
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Budget Overview</h2>
                    <div style={{ height: '300px' }}>
                        <Pie data={pieData} options={pieOptions} />
                    </div>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Budget Details</h2>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>Category</th>
                                    <th>Budget</th>
                                    <th>Spent</th>
                                    <th>Remaining</th>
                                </tr>
                            </thead>
                            <tbody>
                                {budgets.map((budget, index) => (
                                    <tr key={index}>
                                        <td>{budget.category}</td>
                                        <td>${budget.budget}</td>
                                        <td>${budget.spent}</td>
                                        <td>
                                            <progress
                                                className={`progress w-full ${(budget.spent / budget.budget) > 0.9 ? 'progress-error' :
                                                    (budget.spent / budget.budget) > 0.7 ? 'progress-warning' :
                                                        'progress-success'
                                                    }`}
                                                value={budget.spent}
                                                max={budget.budget}
                                            ></progress>
                                            ${budget.budget - budget.spent}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Budget;

