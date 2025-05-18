import React from 'react';
import './About.css';
import profileImage from '../asset/aboutImage.jpeg';

function About() {
  return (
    <section id="about" className="about-wrapper text-center">
      {/* Profile Image */}
      <div className="profile-img-wrapper">
        <img src={profileImage} alt="Imran Nabizada" className="profile-img" />
      </div>

      {/* About Me Text */}
      <div className="about-content mt-4">
        <h2 className="tag-header">&lt;About Me /&gt;</h2>
        <p className="intro">
        I'm a front-end developer with a passion for crafting clean, responsive, and user-friendly web applications. I specialize in building modern interfaces using React, JavaScript, HTML, and CSS, and have experience working with tools like Tailwind CSS, Bootstrap, React Router, and Axios. I also integrate frontend apps with Firebase for authentication and real-time features, and I'm comfortable using version control with Git and GitHub.        </p>
        <p>
          I enjoy building both the frontend and backend, working with React, Node.js, Flask, and PostgreSQL.
          My background in healthcare has sharpened my communication, organization, and problem-solving — and I apply those skills to code every day.
        </p>
      </div>
    </section>
  );
}

export default About;
