import { useState, useEffect } from 'react';

export const useLimits = () => {
    const [incomeLimit, setIncomeLimit] = useState(5000);
    const [expenseLimit, setExpenseLimit] = useState(3000);
    const [currentIncome, setCurrentIncome] = useState(0);
    const [currentExpense, setCurrentExpense] = useState(0);

    useEffect(() => {
        // Fetch current income and expense from your data source
        // This is a placeholder implementation
        setCurrentIncome(3500);
        setCurrentExpense(2800);
    }, []);

    return {
        incomeLimit,
        expenseLimit,
        currentIncome,
        currentExpense,
        setIncomeLimit,
        setExpenseLimit,
    };
};

