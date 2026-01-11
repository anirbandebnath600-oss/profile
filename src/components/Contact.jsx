import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-container">
        <h2 className="title">Let's work together</h2>
        <p className="subtitle">
          Interested in marketing strategies or engineering consulting?
        </p>
        <a href="mailto:anirbandebnath600@gmail.com" className="email-link">
          Anirban Debnath
        </a>
      </div>
      <style>{`
        .contact-section {
          padding: 8rem 0;
          text-align: center;
        }
        .title {
          font-size: 3rem;
          margin-bottom: 1rem;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .subtitle {
          font-size: 1.2rem;
          color: var(--text-secondary);
          margin-bottom: 3rem;
        }
        .email-link {
          font-size: 1.5rem;
          color: var(--text-primary);
          border-bottom: 2px solid var(--accent-blue);
          padding-bottom: 5px;
        }
        .email-link:hover {
          color: var(--accent-blue);
        }
      `}</style>
    </section>
  );
};

export default Contact;
