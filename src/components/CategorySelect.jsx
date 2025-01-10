import React from 'react';
import { ShoppingBag, Film, FileText, Truck } from 'react-feather';

const categories = [
    { value: 'Food', icon: ShoppingBag },
    { value: 'Entertainment', icon: Film },
    { value: 'Bills', icon: FileText },
    { value: 'Transport', icon: Truck },
];

const CategorySelect = ({ value, onChange }) => {
    return (
        <select
            className="select select-bordered w-full"
            value={value}
            onChange={(e) => onChange(e.target.value)}
        >
            <option value="" disabled>Select a category</option>
            {categories.map((category) => (
                <option key={category.value} value={category.value}>
                    {category.value}
                </option>
            ))}
        </select>
    );
};

export default CategorySelect;

