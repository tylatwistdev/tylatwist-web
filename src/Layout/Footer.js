// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          {/* Logo and Description */}
          <div className="col-md-4 mb-4">
            <img src="/path-to-your-logo.png" alt="Company Logo" className="mb-3" style={{ width: '150px' }} />
            <p>Your company tagline or a brief description goes here. Providing excellent services in software development and more.</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light">Home</a></li>
              <li><a href="/about" className="text-light">About Us</a></li>
              <li><a href="/services" className="text-light">Services</a></li>
              <li><a href="/contact" className="text-light">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 mb-4">
            <h5>Contact Us</h5>
            <p>
              <strong>Address:</strong><br />
              123 Main Street, Suite 101,<br />
              City, Country 12345
            </p>
            <p><strong>Email:</strong> info@yourcompany.com</p>
            <p><strong>Phone:</strong> +123 456 7890</p>
          </div>

          {/* Social Media Links */}
          <div className="col-md-3 mb-4">
            <h5>Follow Us</h5>
            <div className="d-flex">
              <a href="https://facebook.com" className="text-light me-3">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" className="text-light me-3">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" className="text-light me-3">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" className="text-light me-3">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="row mt-4">
          <div className="col text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
