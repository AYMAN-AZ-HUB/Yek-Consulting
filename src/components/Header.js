import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { LaptopIcon, MenuIcon, SunIcon, CloseIcon } from './icons';
import { MdOutlineDarkMode } from "react-icons/md";
import { ThemeContext } from '../contexts/ThemeContext';

import "./ui/Header.css";

const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [showModal, setShowModal] = useState(false);

    return (
        <header className="flex justify-between items-center py-4 px-6 md:px-8 text-center">
            <button onClick={() => setShowModal(true)} className="menu icon-menu md:hidden">
                <MenuIcon className="h-6 w-6" />
            </button>
            <div>
                <Link to="/" className="flex items-center gap-2">
                    <LaptopIcon className="h-6 w-6" />
                    <span className="text-lg font-semibold ">YEK Consulting</span>
                </Link>
            </div>
            <nav className="hidden md:flex items-center gap-6">
                <ul className="flex">
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#skills">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <button onClick={toggleTheme} className="mode flex">
                {theme === "light" ? <MdOutlineDarkMode className="h-6 pb-1 w-6" /> : <SunIcon className="h-5 w-5" />}
            </button>
            {showModal && (
                <div className="fixed">
                    <ul className="modal">
                        <li>
                            <button className="icon-close" onClick={() => setShowModal(false)}>
                                <CloseIcon className="h-5 w-5" />
                            </button>
                        </li>
                        <li><a href="#hero">Home</a></li>
                        <li><a href="#skills">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
