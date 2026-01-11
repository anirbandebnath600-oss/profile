import React from 'react';

const Projects = () => {
  const projects = [
    { title: "Portfolio V1", desc: "My first personal website built with HTML/CSS.", stacks: ["HTML", "CSS"] },
    { title: "Marketing Dashboard", desc: "Analytics dashboard for campaign tracking.", stacks: ["React", "ChartJS"] },
    { title: "Bridge Design Analysis", desc: "Civil engineering structural analysis project.", stacks: ["AutoCAD", "Excel"] },
    { title: "Customer CRM", desc: "Relation management tool for small business.", stacks: ["Node.js", "MongoDB"] },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <h2 className="section-title">Selected Works</h2>
        <div className="grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="card project-card">
              <div className="card-header">
                <h3 className="project-title">{project.title}</h3>
                <span className="arrow-icon">↗</span>
              </div>
              <p className="project-desc">{project.desc}</p>
              <div className="stacks">
                {project.stacks.map((stack, i) => (
                  <span key={i} className="stack-tag">{stack}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .project-card {
           background: var(--bg-secondary);
           padding: 2.5rem;
           border-radius: var(--radius-md);
           display: flex;
           flex-direction: column;
           justify-content: space-between;
           min-height: 250px;
           cursor: pointer;
           border: 1px solid transparent;
           transition: all 0.3s ease;
        }
        .project-card:hover {
           border-color: rgba(255,255,255,0.1);
           transform: translateY(-5px);
           background: linear-gradient(145deg, var(--bg-secondary) 0%, #252e3c 100%);
        }
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        .project-title {
          font-size: 1.5rem;
          color: var(--text-primary);
        }
        .arrow-icon {
          font-size: 1.5rem;
          opacity: 0;
          transition: opacity 0.3s, transform 0.3s;
        }
        .project-card:hover .arrow-icon {
          opacity: 1;
          transform: translate(5px, -5px);
        }
        .project-desc {
          font-size: 1rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        .stacks {
          display: flex;
          gap: 0.8rem;
          flex-wrap: wrap;
        }
        .stack-tag {
          font-size: 0.85rem;
          padding: 0.3rem 0.8rem;
          background: rgba(255,255,255,0.05);
          border-radius: var(--radius-full);
          color: var(--text-secondary);
        }
      `}</style>
    </section>
  );
};

export default Projects;
