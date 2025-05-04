import React from 'react';
import projects from "../data/projectsLink";
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="container py-5">
    <h2 className="tag-header text-center mb-5">&lt;Projects /&gt;</h2>
      <div className="projects-grid">
        {projects.map((p, idx) => (
          <div key={idx} className="project-card">
            <img src={p.image} alt={p.title} className='project-img' />
            <div className="project-body">
              
                <h5 className="card-title">{p.title}</h5>
                <p className="card-text">{p.description}</p>
             
              <div className="project-links">
                {p.liveLink && <a href={p.liveLink} target="_blank" className="btn btn-sm btn-primary me-2">Live Demo</a>}
                {p.frontendRepo && <a href={p.frontendRepo} target="_blank" className="btn btn-sm btn-outline-light me-2">Frontend Repo</a>}
                {p.backendRepo && <a href={p.backendRepo} target="_blank" className="btn btn-sm btn-outline-light">Backend Repo</a>}
                {p.repo && <a href={p.repo} target="_blank" className="btn btn-sm btn-outline-light">GitHub Repo</a>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
