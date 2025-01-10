import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, DollarSign, PieChart, FileText } from 'react-feather';

const Sidebar = ({ open, toggleSidebar }) => {
    const location = useLocation();

    const links = [
        { name: 'Dashboard', icon: Home, path: '/' },
        { name: 'Transactions', icon: DollarSign, path: '/transactions' },
        { name: 'Budget', icon: PieChart, path: '/budget' },
        { name: 'Reports', icon: FileText, path: '/reports' },
    ];

    return (
        <>
            {/* Overlay */}
            {open && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-10"
                    onClick={toggleSidebar} // Close sidebar on outside click
                ></div>
            )}

            {/* Sidebar */}
            <div
                className={`sidebar bg-base-200 text-base-content w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform transition-transform duration-200 ease-in-out z-20
        ${open ? 'translate-x-0' : '-translate-x-full'}
        md:relative md:translate-x-0`}
            >
                <nav>
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={toggleSidebar} // Close sidebar on link click
                            className={`flex items-center space-x-2 py-2.5 px-4 rounded transition duration-200 ${location.pathname === link.path
                                ? 'bg-primary text-primary-content'
                                : 'hover:bg-base-300'
                                }`}
                        >
                            <link.icon className="h-5 w-5" />
                            <span>{link.name}</span>
                        </Link>
                    ))}
                </nav>
            </div>
        </>
    );
};

export default Sidebar;
