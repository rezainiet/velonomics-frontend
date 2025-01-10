import React from 'react';

const BudgetProgress = ({ budget, expenses }) => {
    const percentage = (expenses / budget) * 100;
    const colorClass = percentage > 90 ? 'bg-error' : percentage > 70 ? 'bg-warning' : 'bg-success';

    return (
        <div className="w-full">
            <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Budget Utilization</span>
                <span className="text-sm font-medium">{percentage.toFixed(2)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                    className={`h-2.5 rounded-full ${colorClass}`}
                    style={{ width: `${Math.min(percentage, 100)}%` }}
                ></div>
            </div>
            <div className="flex justify-between mt-2">
                <span className="text-sm">$0</span>
                <span className="text-sm">${budget}</span>
            </div>
        </div>
    );
};

export default BudgetProgress;

