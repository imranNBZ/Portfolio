import React from 'react';
import './Contacts.css';

function Contact() {
  return (
    <section id="contact" className="py-5 bg-dark text-white">
      <div className="container text-center">
      <h2 className="tag-header text-center mb-5">&lt;Get In Touch /&gt;</h2>
        <ul className="list-unstyled fs-5">
          <li className="mb-2">
            <strong>Email:</strong>{' '}
            <a href="mailto:imran.nabizada@icloud.com" className="link-light">
              imran.nabizada@icloud.com
            </a>
          </li>
          <li className="mb-2">
            <strong>Phone Number:</strong>{' '}
            <a href="" className="link-light">
              +1-518-416-8460
            </a>
          </li>
          <li className="mb-2">
            <strong>GitHub:</strong>{' '}
            <a
              href="https://github.com/nbzImran"
              target="_blank"
              rel="noopener noreferrer"
              className="link-light"
            >
              nbzImran
            </a>
          </li>
          <li className="mb-2">
            <strong>LinkedIn:</strong>{' '}
            <a
              href="https://www.linkedin.com/in/imran-nabizada-1b134b281"
              target="_blank"
              rel="noopener noreferrer"
              className="link-light"
            >
              Imran Nabizada
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
