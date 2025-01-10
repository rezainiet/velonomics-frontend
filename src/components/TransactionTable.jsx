import React from 'react';
import { Edit2, Trash2 } from 'react-feather';

const TransactionTable = ({ transactions, onEdit, onDelete }) => {
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Day</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Payment Method</th>
                        <th>Amount</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions && transactions.map((transaction, index) => {
                        // Convert the "Amount" field to a number by removing the "$" symbol
                        const amount = parseFloat(transaction.Amount?.replace('$', ''));

                        return (
                            <tr key={index}>
                                <td>{transaction.Date}</td>
                                <td>{transaction.Day}</td>
                                <td>{transaction.Description}</td>
                                <td>{transaction.Category}</td>
                                <td>{transaction["Payment Method"]}</td>
                                <td className={amount >= 0 ? 'text-success' : 'text-error'}>
                                    ${Math.abs(amount).toFixed(2)}
                                </td>
                                <td>
                                    <button className="btn btn-ghost btn-xs" onClick={() => onEdit(transaction)}>
                                        <Edit2 className="h-4 w-4" />
                                    </button>
                                    <button className="btn btn-ghost btn-xs" onClick={() => onDelete(transaction.id)}>
                                        <Trash2 className="h-4 w-4" />
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default TransactionTable;
