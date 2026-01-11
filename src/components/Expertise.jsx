import React from 'react';

const Expertise = () => {
  const skills = [
    { title: "Marketing Strategy", desc: "Developing comprehensive marketing plans to drive growth." },
    { title: "Customer Relations", desc: "Building strong, lasting relationships with clients." },
    { title: "Civil Engineering", desc: "Technical background in infrastructure and design." },
    { title: "Project Management", desc: "Leading teams to deliver projects on time and budget." },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container">
        <h2 className="section-title">My Expertise</h2>
        <div className="grid-cols-2">
          {skills.map((skill, index) => (
            <div key={index} className="card skill-card">
              <h3 className="skill-title">{skill.title}</h3>
              <p className="skill-desc">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .section-padding {
          padding: 6rem 0;
        }
        .section-title {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          text-align: center;
        }
        .card {
          background: var(--bg-secondary);
          padding: 2rem;
          border-radius: var(--radius-md);
          transition: transform 0.2s;
        }
        .card:hover {
          transform: translateY(-5px);
        }
        .skill-title {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }
        .skill-desc {
          color: var(--text-secondary);
        }
        
        /* Dribbble-like style: diamond bullet or icon next to title */
        .skill-title::before {
          content: '◆'; 
          color: #FF512F; /* Orange from gradient */
          margin-right: 10px;
          font-size: 0.8em;
        }
      `}</style>
    </section>
  );
};

export default Expertise;
