import React, { useState } from 'react';
import { Plus, Edit2, Trash2 } from 'react-feather';

const Transactions = () => {
    const [transactions, setTransactions] = useState([
        { id: 1, date: '2023-05-01', description: 'Grocery shopping', amount: -50.00, category: 'Food' },
        { id: 2, date: '2023-05-02', description: 'Salary', amount: 3000.00, category: 'Income' },
        { id: 3, date: '2023-05-03', description: 'Restaurant dinner', amount: -75.00, category: 'Food' },
    ]);

    const [showModal, setShowModal] = useState(false);
    const [currentTransaction, setCurrentTransaction] = useState(null);

    const handleAddTransaction = () => {
        setCurrentTransaction(null);
        setShowModal(true);
    };

    const handleEditTransaction = (transaction) => {
        setCurrentTransaction(transaction);
        setShowModal(true);
    };

    const handleDeleteTransaction = (id) => {
        setTransactions(transactions.filter(t => t.id !== id));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        setShowModal(false);
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Transactions</h1>
                <button className="btn btn-primary" onClick={handleAddTransaction}>
                    <Plus className="mr-2" /> Add Transaction
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Amount</th>
                            <th>Category</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction) => (
                            <tr key={transaction.id}>
                                <td>{transaction.date}</td>
                                <td>{transaction.description}</td>
                                <td className={transaction.amount >= 0 ? 'text-success' : 'text-error'}>
                                    ${Math.abs(transaction.amount).toFixed(2)}
                                </td>
                                <td>{transaction.category}</td>
                                <td>
                                    <button className="btn btn-ghost btn-xs" onClick={() => handleEditTransaction(transaction)}>
                                        <Edit2 className="h-4 w-4" />
                                    </button>
                                    <button className="btn btn-ghost btn-xs" onClick={() => handleDeleteTransaction(transaction.id)}>
                                        <Trash2 className="h-4 w-4" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {showModal && (
                <div className="modal modal-open">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">{currentTransaction ? 'Edit Transaction' : 'Add Transaction'}</h3>
                        <form onSubmit={handleSubmit}>
                            {/* Add form fields here */}
                            <div className="modal-action">
                                <button type="submit" className="btn btn-primary">Save</button>
                                <button type="button" className="btn" onClick={() => setShowModal(false)}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Transactions;

