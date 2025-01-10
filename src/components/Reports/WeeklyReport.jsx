import React from 'react';
import { ArrowUp, ArrowDown } from 'react-feather';

const WeeklyReport = ({ weekData, previousWeekData }) => {
    const totalIncome = weekData.reduce((sum, transaction) => sum + (transaction.amount > 0 ? transaction.amount : 0), 0);
    const totalExpenses = weekData.reduce((sum, transaction) => sum + (transaction.amount < 0 ? Math.abs(transaction.amount) : 0), 0);
    const remainingBalance = totalIncome - totalExpenses;

    const previousTotalIncome = previousWeekData.reduce((sum, transaction) => sum + (transaction.amount > 0 ? transaction.amount : 0), 0);
    const previousTotalExpenses = previousWeekData.reduce((sum, transaction) => sum + (transaction.amount < 0 ? Math.abs(transaction.amount) : 0), 0);

    const incomeChange = totalIncome - previousTotalIncome;
    const expenseChange = totalExpenses - previousTotalExpenses;

    const averageWeeklyExpenses = 1000; // This should be calculated based on historical data

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Weekly Report</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <p className="text-lg">Total Income: <span className="font-bold text-success">${totalIncome.toFixed(2)}</span></p>
                    <p className="text-lg">Total Expenses: <span className="font-bold text-error">${totalExpenses.toFixed(2)}</span></p>
                    <p className="text-lg">Remaining Balance: <span className="font-bold">${remainingBalance.toFixed(2)}</span></p>
                </div>
                <div>
                    <p className="text-lg">
                        Income Change:
                        {incomeChange >= 0 ? (
                            <span className="text-success ml-2"><ArrowUp size={16} /> ${Math.abs(incomeChange).toFixed(2)}</span>
                        ) : (
                            <span className="text-error ml-2"><ArrowDown size={16} /> ${Math.abs(incomeChange).toFixed(2)}</span>
                        )}
                    </p>
                    <p className="text-lg">
                        Expense Change:
                        {expenseChange <= 0 ? (
                            <span className="text-success ml-2"><ArrowDown size={16} /> ${Math.abs(expenseChange).toFixed(2)}</span>
                        ) : (
                            <span className="text-error ml-2"><ArrowUp size={16} /> ${Math.abs(expenseChange).toFixed(2)}</span>
                        )}
                    </p>
                    <p className="text-lg">
                        Expenses vs Average:
                        {totalExpenses <= averageWeeklyExpenses ? (
                            <span className="text-success ml-2">Below Average</span>
                        ) : (
                            <span className="text-error ml-2">Above Average</span>
                        )}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WeeklyReport;

