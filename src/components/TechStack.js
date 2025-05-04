import React from 'react';
import './TechStack.css';

function TechStack() {
  return (
    <section id="tech-stack" className="tech-stack-section">
      <h2 className="tag-header text-center mb-5">&lt;My Tech Stack /&gt;</h2>

      <div className="tech-stack-flex">
        {/* LEFT: All stack text sections */}
        <div className="tech-stack-content">
          {/* Frontend */}
          <div className="stack-section">
            <h4>Frontend</h4>
            <ul>
              <li>React.js with hooks and component-based architecture</li>
              <li>Responsive design using Bootstrap and CSS3</li>
              <li>State management with Context API and useReducer</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="stack-section">
            <h4>Backend</h4>
            <ul>
              <li>Node.js with Express for RESTful API development</li>
              <li>PostgreSQL and Firebase for data management and auth</li>
              <li>JWT-based authentication and session handling</li>
            </ul>
          </div>

          {/* Testing */}
          <div className="stack-section">
            <h4>Testing</h4>
            <ul>
              <li>Jest and Supertest for backend unit/integration tests</li>
              <li>React Testing Library for UI behavior testing</li>
            </ul>
          </div>

          {/* Additional */}
          <div className="stack-section">
            <h4>Additional Skills</h4>
            <ul>
              <li>Version control with Git & GitHub</li>
              <li>Deployment with Render and Vercel</li>
              <li>Third-party API integration (Mapbox, ClickSend)</li>
              <li>Bilingual in English and Farsi/Dari</li>
            </ul>
          </div>
        </div>

        {/* RIGHT: Image */}
        <div className="tech-stack-image">
          <img
            src="/tech-stack.png"
            alt="Tech Stack Logos"
            className="img-fluid tech-stack-logo"
          />
        </div>
      </div>
    </section>
  );
}

export default TechStack;
