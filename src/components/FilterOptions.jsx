import React from 'react';
import { Calendar } from 'react-feather';

const FilterOptions = ({ categories, dateRange, onCategoryChange, onDateRangeChange }) => {
    return (
        <div className="flex flex-col sm:flex-row gap-4">
            <select
                className="select select-bordered w-full sm:w-auto"
                value={categories}
                onChange={(e) => onCategoryChange(e.target.value)}
            >
                <option value="">All Categories</option>
                <option value="Food">Food</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Bills">Bills</option>
                <option value="Transport">Transport</option>
            </select>
            <div className="relative">
                <input
                    type="text"
                    placeholder="Date Range"
                    className="input input-bordered w-full pl-10"
                    value={dateRange}
                    onChange={(e) => onDateRangeChange(e.target.value)}
                />
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
        </div>
    );
};

export default FilterOptions;

