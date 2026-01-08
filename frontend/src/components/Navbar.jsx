import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ darkMode, toggleDarkMode }) {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <header>
            <div className="header-content">
                {/* Logo */}
                <Link to="/" className="logo-container">
                    <img src="/logo.png" alt="FactWeave Logo" className="logo-image" />
                    <span style={{ fontSize: '1.75rem', fontWeight: 700, letterSpacing: '-0.5px' }}>
                        <span style={{ color: 'white' }}>Fact</span>
                        <span style={{
                            background: 'linear-gradient(135deg, var(--teal-primary), var(--cyan-accent))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>Weave</span>
                        <span style={{ fontWeight: 400, opacity: 0.9, color: 'var(--text-secondary)' }}>
                            .ai
                        </span>
                    </span>
                </Link>

                {/* Navigation Links */}
                <nav>
                    <Link
                        to="/"
                        className={isActive('/') ? 'active' : ''}
                    >
                        Dashboard
                    </Link>
                    <Link
                        to="/history"
                        className={isActive('/history') ? 'active' : ''}
                    >
                        History
                    </Link>
                    <Link
                        to="/about"
                        className={isActive('/about') ? 'active' : ''}
                    >
                        About
                    </Link>
                </nav>
            </div>
        </header>
    );
}
