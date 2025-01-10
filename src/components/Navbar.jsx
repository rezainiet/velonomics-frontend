import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon, Bell, User, Sidebar } from 'react-feather';

const Navbar = ({ toggleDarkMode, toggleSidebar }) => {
    return (
        <div className="navbar bg-base-100 shadow-lg z-10">
            <button className="btn btn-square  sm:hidden flex items-center justify-center" onClick={toggleSidebar}>
                <Sidebar className="swap-on w-6 h-6" />
            </button>
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost normal-case text-xl">Velonomics</Link>
            </div>
            <div className="flex-none">
                <button className="btn btn-square btn-ghost" onClick={toggleDarkMode}>
                    <label className="swap swap-rotate">
                        <input type="checkbox" />
                        <Sun className="swap-on fill-current w-6 h-6" />
                        <Moon className="swap-off fill-current w-6 h-6" />
                    </label>
                </button>

                <button className="btn btn-square btn-ghost">
                    <Bell className="h-5 w-5" />
                </button>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" alt="User avatar" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Profile</a></li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

