import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logoLight from '../assets/logo-bg.png';
import logoDark from '../assets/logo-dark.png';
import { useTheme } from '../context/ThemeContext';

import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const location = useLocation();
    const { theme } = useTheme();
    const [scrolled, setScrolled] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    const logoSymbol = theme === 'dark' ? logoDark : logoLight;

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-logo">
                <Link to="/" onClick={() => setIsMenuOpen(false)}>
                    <img src={logoSymbol} alt="BlueCheck Advisory" />
                </Link>
            </div>

            <div className="nav-desktop">
                <ul className="nav-links">
                    <li><Link to="/" className={isActive('/')}>Home</Link></li>
                    <li><Link to="/services" className={isActive('/services')}>Services</Link></li>
                    <li><Link to="/about" className={isActive('/about')}>About Us</Link></li>

                    <li><Link to="/contact" className={isActive('/contact')}>Contact Us</Link></li>
                    <li><ThemeToggle /></li>
                </ul>
            </div>

            <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
                <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
            </button>

            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                <ul className="mobile-nav-links">
                    <li><Link to="/" className={isActive('/')} onClick={toggleMenu}>Home</Link></li>
                    <li><Link to="/services" className={isActive('/services')} onClick={toggleMenu}>Services</Link></li>
                    <li><Link to="/about" className={isActive('/about')} onClick={toggleMenu}>About Us</Link></li>

                    <li><Link to="/contact" className={isActive('/contact')} onClick={toggleMenu}>Contact Us</Link></li>
                    <li className="mobile-theme-toggle"><ThemeToggle /></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
