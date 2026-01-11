import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <div className="nav-left">
          <div className="logo">AD</div>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="nav-right">
          <a href="/Anirban_Debnath_CV.png" download="Anirban_Debnath_CV.png" className="btn-primary">Download CV</a>
        </div>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 10px; /* further reduced */
          left: 50%;
          transform: translateX(-50%);
          background: var(--nav-bg);
          backdrop-filter: blur(10px);
          border: 1px solid var(--nav-border);
          padding: 2px 20px; /* Aggressively reduced vertical padding */
          border-radius: var(--radius-full);
          z-index: 1000;
          width: 90%;
          max-width: 800px;
        }
        .nav-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          /* Reset container padding for this small internal container if needed */
          padding: 0; 
        }
        .nav-left {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .logo {
          font-weight: 700;
          font-size: 1rem; /* Reduced from 1.2rem */
          color: var(--text-primary);
        }
        .theme-toggle {
          background: transparent;
          border: none;
          font-size: 1.2rem;
          cursor: pointer;
          padding: 5px;
          border-radius: 50%;
        }
        .theme-toggle:hover {
           background: rgba(125,125,125,0.1);
        }
        .nav-links {
          display: flex;
          list-style: none;
          gap: 1.5rem; /* Reduced from 2rem */
        }
        .nav-links a {
          color: var(--text-secondary);
          font-size: 0.8rem; /* Reduced from 0.9rem */
        }
        .nav-links a:hover {
          color: var(--text-primary);
        }
        .btn-primary {
          background: var(--text-primary);
          color: var(--bg-primary);
          border-radius: var(--radius-full);
          font-weight: 600;
          font-size: 0.8rem; /* Smaller font */
          padding: 0.3rem 0.8rem; /* Aggressively reduced padding */
          text-decoration: none;
          display: inline-block;
          border: none;
          cursor: pointer;
          transition: transform 0.1s;
        }
        .btn-primary:hover {
          background: #ffdbde; /* subtle tint */
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none; /* simple mobile hide for now, or hamburger later */
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
