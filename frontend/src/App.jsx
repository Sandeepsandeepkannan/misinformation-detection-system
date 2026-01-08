import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import History from './components/History';
import About from './components/About';
import Navbar from './components/Navbar';
import './styles/global.css';

function App() {
    const [darkMode, setDarkMode] = useState(true); // Default to dark mode

    useEffect(() => {
        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            setDarkMode(false);
            document.documentElement.classList.remove('dark');
        } else {
            setDarkMode(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (!darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <Router>
            <div className="min-h-screen">
                <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

                <Routes>
                    <Route path="/" element={<Dashboard darkMode={darkMode} />} />
                    <Route path="/history" element={<History darkMode={darkMode} />} />
                    <Route path="/about" element={<About darkMode={darkMode} />} />
                </Routes>

                {/* Footer */}
                <footer>
                    <div className="footer-content">
                        <div className="footer-brand">
                            <img src="/logo.png" alt="FactWeave Logo" className="footer-logo" />
                            <div className="footer-text">
                                <h3 style={{
                                    fontSize: '1.5rem',
                                    marginBottom: '0.5rem'
                                }}>
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
                                </h3>
                                <p>
                                    Knowledge-Enhanced Multimodal Misinformation Detection with 15-Language Support and Real-Time Fact-Checking Integration
                                </p>
                            </div>
                        </div>

                        <div className="footer-links">
                            <h4>Features</h4>
                            <ul>
                                <li><a href="/">Text Analysis</a></li>
                                <li><a href="/">Image Verification</a></li>
                                <li><a href="/">Multimodal Detection</a></li>
                                <li><a href="/">15+ Languages</a></li>
                            </ul>
                        </div>

                        <div className="footer-links">
                            <h4>Resources</h4>
                            <ul>
                                <li><a href="/about">About</a></li>
                                <li><a href="/history">History</a></li>
                                <li><a href="#">Documentation</a></li>
                                <li><a href="#">API</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>
                            Powered by XLM-RoBERTa, CLIP, FLAVA & Knowledge Graphs •
                            Google Fact Check API • Wikidata • ClaimBuster
                        </p>
                        <p style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>
                            Made with ❤️ for fighting misinformation • © 2026 FactWeave.ai
                        </p>
                    </div>
                </footer>
            </div>
        </Router>
    );
}

export default App;
