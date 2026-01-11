import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');

  const firstName = "ANIRBAN";
  const lastName = "DEBNATH";

  useEffect(() => {
    let timer1;
    let timer2;

    // Logic: type whole first name, then types whole last name.
    // Use indices to ensure no dropped characters.

    let i = 0;
    timer1 = setInterval(() => {
      // Typing first name
      if (i <= firstName.length) {
        setLine1(firstName.slice(0, i));
        i++;
      } else {
        clearInterval(timer1);

        // Start typing last name
        let j = 0;
        timer2 = setInterval(() => {
          if (j <= lastName.length) {
            setLine2(lastName.slice(0, j));
            j++;
          } else {
            clearInterval(timer2);
          }
        }, 100);
      }
    }, 100);

    return () => {
      if (timer1) clearInterval(timer1);
      if (timer2) clearInterval(timer2);
    };
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="container hero-content">
        <div className="hero-text">
          <p className="greeting">Hi, I'm</p>
          <h1 className="name">
            {line1}<span className="cursor">|</span> <br />
            <span className="text-gradient">{line2}</span>
          </h1>
          <p className="role">
            Marketing & Customer Relation Specialist <br />
            <span style={{ fontSize: '0.9em', opacity: 0.7 }}>B.Tech in Civil Engineering</span>
          </p>
          <div className="social-links">
            <a href="https://github.com/anirbandebnath600-oss" target="_blank" rel="noopener noreferrer" className="btn-social">GitHub</a>
            <a href="https://www.linkedin.com/in/anirban-debnath2003/" target="_blank" rel="noopener noreferrer" className="btn-social">LinkedIn</a>
            <a href="mailto:anirbandebnath600@gmail.com" className="btn-social">Email</a>
            {/* Add more social links if needed */}
          </div>
        </div>

        <div className="hero-image-container">
          <div className="image-wrapper">
            {/* Using the new uploaded profile picture */}
            <img src={`${import.meta.env.BASE_URL}profile-pic.jpg`} alt="Anirban Debnath" className="profile-img" />
          </div>
        </div>
      </div>

      <style>{`
        .cursor {
          animation: blink 1s step-end infinite;
          font-weight: 100;
          opacity: 1;
          color: var(--text-primary);
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
        
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 80px; /* offset for fixed navbar */
        }
        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 4rem;
          width: 100%;
        }
        .greeting {
          font-size: 1.5rem;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
        }
        .name {
          font-size: 4rem;
          line-height: 1.1;
          margin-bottom: 1rem;
          font-weight: 800;
          min-height: 2.2em; /* Reserve height for 2 lines to prevent layout shift */
        }
        .role {
          font-size: 1.2rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        .intro-lead {
           margin-bottom: 2rem;
           max-width: 500px;
        }
        .image-wrapper {
          position: relative;
          width: 300px;
          height: 300px;
          border-radius: var(--radius-full);
          background: var(--bg-secondary);
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
          border: 4px solid var(--bg-secondary);
        }
        .profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        /* Gradient blob behind image */
        .hero-image-container {
          position: relative;
          display: flex;
          justify-content: center;
        }
        .hero-image-container::before {
          content: '';
          position: absolute;
          width: 120%;
          height: 120%;
          background: var(--gradient-primary);
          filter: blur(80px);
          opacity: 0.5;
          z-index: -1;
          top: -10%;
          left: -10%;
          border-radius: 50%;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }
        .btn-social {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          color: var(--text-primary);
          padding: 0.6rem 1.2rem;
          border-radius: var(--radius-full);
          text-decoration: none;
          display: inline-block;
          transition: all 0.3s ease;
        }
        .btn-social:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.3);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2rem;
          }
           .hero-image-container {
             order: -1; /* Image on top mobile */
           }
           .hero-image-container::before {
            width: 250px;
            height: 250px;
           }
           .image-wrapper {
             width: 200px;
             height: 200px;
             margin: 0 auto;
           }
           .social-links {
             justify-content: center;
           }
        }
      `}</style>
    </section>
  );
};

export default Hero;
