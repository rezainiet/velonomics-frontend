import React from 'react';
import { Search } from 'react-feather';

const SearchBar = ({ searchTerm, onSearchChange }) => {
    return (
        <div className="relative">
            <input
                type="text"
                placeholder="Search transactions..."
                className="input input-bordered w-full pl-10"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
    );
};

export default SearchBar;

