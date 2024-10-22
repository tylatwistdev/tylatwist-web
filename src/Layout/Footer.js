import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          {/* Our Location & Contact Us */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="footer-heading">Our Location & Contact Us</h5>
            <p className="footer-text">
              1st Floor, The Engineering Tower,<br />
              Aliganj, Lucknow, UP 226021
            </p>
            <p className="footer-text">
              Email: <a href="mailto:info@jamtech.com">info@jamtech.com</a><br />
              Phone: <a href="tel:+1234567890">+1 (234) 567-890</a>
            </p>
            {/* Social Media Links */}
            <div className="social-icons mt-4">
              <a href="#" className="icon facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="icon twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="icon instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="icon linkedin">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Offered Services */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="footer-heading">Offered Services</h5>
            <ul className="footer-links">
              <li><a href="#">Web Development</a></li>
              <li><a href="#">SEO Optimization</a></li>
              <li><a href="#">Mobile App Development</a></li>
              <li><a href="#">Cloud Hosting</a></li>
              <li><a href="#">Digital Marketing</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Services</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="footer-heading">Subscribe to Newsletter</h5>
            <p className="footer-text">Get the latest updates and offers right in your inbox!</p>
            <form action="#" className="newsletter-form">
              <input type="email" className="newsletter-input" placeholder="Your Email" />
              <button type="submit" className="btn btn-primary btn-block mt-2">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Go to Top Button */}
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="btn btn-primary go-to-top"
            style={{
              position: 'fixed',
              bottom: '30px',
              right: '30px',
              zIndex: 1000,
            }}
          >
            <i className="fa fa-angle-double-up"></i>
          </button>
        )}

        {/* Footer Bottom */}
        <div className="footer-bottom mt-5">
          <p className="text-center">
            &copy; 2014 - 2024 Jamtech Technologies Pvt. Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
