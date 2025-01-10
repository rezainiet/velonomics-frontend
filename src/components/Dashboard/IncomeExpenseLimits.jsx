import React from 'react';
import { useLimits } from '../../hooks/useLimits';

const IncomeExpenseLimits = () => {
    const { incomeLimit, expenseLimit, currentIncome, currentExpense, setIncomeLimit, setExpenseLimit } = useLimits();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Monthly Income Limit</h2>
                    <input
                        type="number"
                        value={incomeLimit}
                        onChange={(e) => setIncomeLimit(Number(e.target.value))}
                        className="input input-bordered w-full max-w-xs"
                    />
                    <progress
                        className="progress progress-success w-full"
                        value={currentIncome}
                        max={incomeLimit}
                    ></progress>
                    <p>{`$${currentIncome} / $${incomeLimit}`}</p>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Monthly Expense Limit</h2>
                    <input
                        type="number"
                        value={expenseLimit}
                        onChange={(e) => setExpenseLimit(Number(e.target.value))}
                        className="input input-bordered w-full max-w-xs"
                    />
                    <progress
                        className={`progress w-full ${currentExpense > expenseLimit ? 'progress-error' : 'progress-warning'}`}
                        value={currentExpense}
                        max={expenseLimit}
                    ></progress>
                    <p>{`$${currentExpense} / $${expenseLimit}`}</p>
                </div>
            </div>
        </div>
    );
};

export default IncomeExpenseLimits;

