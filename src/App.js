import React, { useEffect, useState } from "react";
import { IoIosArrowDropup } from "react-icons/io";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import './App.css';
import Main from './components/Main';
import Footer from './components/Footer';
import Forum from './components/forumcard.jsx';
import { ThemeProvider } from './contexts/ThemeContext';
import Contactus from './pages/Contactus';

function App() {
    const [showScrollBtn, setShowScrollBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowScrollBtn(true);
            } else {
                setShowScrollBtn(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <ThemeProvider>
            <Router>
                <div className="flex flex-col min-h-screen">
                    <Header />
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/contactus" element={<Contactus />} />
                        <Route path="/consultation" element={<Forum />} />
                    </Routes>
                    <Footer />
                    {showScrollBtn && (
                        <button
                            onClick={scrollToTop}
                            className="icon-keyboard_arrow_up scroll2top"
                            style={{
                                position: 'fixed',
                                bottom: '20px',
                                right: '20px',
                                background: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: '24px'
                            }}
                        >
                            <IoIosArrowDropup />
                        </button>
                    )}
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
