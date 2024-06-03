import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { LaptopIcon, MenuIcon, SunIcon, CloseIcon } from './icons';
import { MdOutlineDarkMode } from "react-icons/md";
import { ThemeContext } from '../contexts/ThemeContext';
import logo from '../assests/yek-removebg-preview.png'
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
                <a href='/'><img src={logo} className='h-11 w-32 cursor-pointer'></img></a>
            </div>
            <nav className="hidden md:flex items-center gap-6">
                <ul className="flex">
                <Link to="/">
                    <li><a>Home</a></li>
                    </Link>
                    <li><a href="#skills">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <Link to="/contactus">
                    <li><a>Contact</a></li>
                    </Link>
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
