import React, { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar';
import FilterOptions from '../../components/FilterOptions';
import TransactionTable from '../../components/TransactionTable';
import WeeklyReport from '../../components/Reports/WeeklyReport';
import DownloadReport from '../../components/Reports/DownloadReport';
import BudgetProgress from '../../components/BudgetProgress';
import LineChart from '../../components/Charts/LineChart';
import BarChart from '../../components/Charts/BarChart';
import { syncMasterFile } from '../../utils/fileParser';

const Dashboard = () => {
    const [transactions, setTransactions] = useState([]);
    const [filteredTransactions, setFilteredTransactions] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [dateRange, setDateRange] = useState('');
    const [budget, setBudget] = useState(5000);
    const [expenses, setExpenses] = useState(0);

    useEffect(() => {
        // Fetch transactions from API or local storage
        // For this example, we'll use dummy data
        const dummyTransactions = [
            { id: 1, date: '2023-05-01', description: 'Grocery shopping', amount: -50.00, category: 'Food' },
            { id: 2, date: '2023-05-02', description: 'Salary', amount: 3000.00, category: 'Income' },
            { id: 3, date: '2023-05-03', description: 'Restaurant dinner', amount: -75.00, category: 'Food' },
        ];
        setTransactions(dummyTransactions);
        setFilteredTransactions(dummyTransactions);

        // Calculate total expenses
        const totalExpenses = dummyTransactions.reduce((sum, transaction) =>
            transaction.amount < 0 ? sum + Math.abs(transaction.amount) : sum, 0
        );
        setExpenses(totalExpenses);
    }, []);

    const handleSearch = (term) => {
        setSearchTerm(term);
        filterTransactions(term, selectedCategory, dateRange);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        filterTransactions(searchTerm, category, dateRange);
    };

    const handleDateRangeChange = (range) => {
        setDateRange(range);
        filterTransactions(searchTerm, selectedCategory, range);
    };

    const filterTransactions = (term, category, range) => {
        let filtered = transactions;

        if (term) {
            filtered = filtered.filter(t =>
                t.description.toLowerCase().includes(term.toLowerCase()) ||
                t.category.toLowerCase().includes(term.toLowerCase())
            );
        }

        if (category) {
            filtered = filtered.filter(t => t.category === category);
        }

        if (range) {
            // Implement date range filtering logic here
        }

        setFilteredTransactions(filtered);
    };

    const handleEditTransaction = (transaction) => {
        // Implement edit logic
    };

    const handleDeleteTransaction = (id) => {
        const updatedTransactions = transactions.filter(t => t.id !== id);
        setTransactions(updatedTransactions);
        setFilteredTransactions(updatedTransactions);
    };

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        if (file) {
            try {
                const syncedData = await syncMasterFile(file);
                setTransactions(syncedData);
                setFilteredTransactions(syncedData);
                // Update other state or perform necessary actions with the synced data
            } catch (error) {
                console.error('Error syncing master file:', error);
            }
        }
    };

    // Dummy data for charts
    const lineChartData = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
            {
                label: 'Income',
                data: [3000, 3500, 3200, 3800],
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
            },
            {
                label: 'Expenses',
                data: [2500, 2800, 2600, 3000],
                borderColor: 'rgb(255, 99, 132)',
                tension: 0.1,
            },
        ],
    };

    const barChartData = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                label: 'Income',
                data: [12000, 13000, 12500, 14000, 15000],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
            {
                label: 'Expenses',
                data: [10000, 11000, 10500, 12000, 13000],
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
            },
        ],
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <BudgetProgress budget={budget} expenses={expenses} />
                <div>
                    <input
                        type="file"
                        onChange={handleFileUpload}
                        className="file-input file-input-bordered w-full"
                    />
                </div>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Transactions</h2>
                <div className="flex flex-col md:flex-row gap-4 mb-4">
                    <SearchBar searchTerm={searchTerm} onSearchChange={handleSearch} />
                    <FilterOptions
                        categories={selectedCategory}
                        dateRange={dateRange}
                        onCategoryChange={handleCategoryChange}
                        onDateRangeChange={handleDateRangeChange}
                    />
                </div>
                <TransactionTable
                    transactions={filteredTransactions}
                    onEdit={handleEditTransaction}
                    onDelete={handleDeleteTransaction}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <WeeklyReport weekData={transactions} previousWeekData={[]} />
                <DownloadReport transactions={transactions} budgets={[]} user={{}} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <LineChart data={lineChartData} title="Weekly Income vs Expenses" />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <BarChart data={barChartData} title="Monthly Income vs Expenses" />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

