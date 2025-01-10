import React, { useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
import FileUpload from '../components/FileUpload/FileUpload';
import IncomeExpenseLimits from '../components/Dashboard/IncomeExpenseLimits';
import DownloadReport from '../components/Reports/DownloadReport';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

const Dashboard = () => {
    const [transactions, setTransactions] = useState([]);
    const [budgets, setBudgets] = useState([]);

    const handleFileUpload = (parsedData) => {
        setTransactions(parsedData);
        // Update other state or perform necessary actions with the parsed data
    };

    const barData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Income',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
            {
                label: 'Expenses',
                data: [2, 3, 20, 5, 1, 4],
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
            },
        ],
    };

    const pieData = {
        labels: ['Food', 'Transport', 'Entertainment', 'Bills'],
        datasets: [
            {
                data: [300, 50, 100, 200],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
            },
        ],
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Upload Transactions</h2>
                    <FileUpload onUploadSuccess={handleFileUpload} />
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Download Report</h2>
                    <DownloadReport transactions={transactions} budgets={budgets} />
                </div>
            </div>

            <div className="md:col-span-2">
                <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
            </div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Income vs Expenses</h2>
                    <Bar data={barData} />
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Expense Categories</h2>
                    <Pie data={pieData} />
                </div>
            </div>
            <div className="md:col-span-2">
                <IncomeExpenseLimits />
            </div>

        </div>
    );
};

export default Dashboard;

