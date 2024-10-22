import React from 'react'
import BannerSection from './components/BannerSection'

const Contact = () => {
    return (
        <div>
            {/* Banner Section */}
            <div
                className="banner"
                style={{
                    backgroundImage: 'url(http://localhost:3000/static/media/image1.bab8adb0a1a6c85a982a.jpg)', // Replace with your banner image URL
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '300px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                }}
            >
                <h1 className="banner-title">Contact Us</h1>
            </div>

            {/* Contact Us Section */}
            <div className="container-fluid mt-4">
                <div className="row">
                    {/* Left Section with Address and Social Media */}
                    <div className="col-lg-6 col-md-6 left-section d-flex flex-column justify-content-center align-items-start p-5" style={{ backgroundColor: '#f8f9fa' }}>
                        <h2 className="contact-heading">Get in Touch</h2>
                        <div className="contact-details mb-4">
                            <h5 className="detail-title">Address:</h5>
                            <p className="address-text">
                                1st Floor, The Engineering Tower,<br />
                                Aliganj, Lucknow, UP 226021
                            </p>
                        </div>
                        <div className="contact-details mb-4">
                            <h5 className="detail-title">Email:</h5>
                            <p className="address-text">

                                <i class="fa-solid fa-envelope"></i>{' '}
                                <a href="mailto:info@jamtech.com">info@jamtech.com</a>
                            </p>
                        </div>
                        <div className="contact-details mb-4">
                            <h5 className="detail-title">Phone:</h5>
                            <p className="address-text">
                                <i className="fa fa-phone" aria-hidden="true"></i>
                                {' '}
                                <a href="tel:+1234567890">+1 (234) 567-890</a>
                            </p>
                        </div>
                        <div className="social-icons mt-4">
                            <h5 className="detail-title">Follow Us:</h5>
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

                    {/* Right Section with Contact Form */}
                    <div className="col-lg-6 col-md-6 right-section p-5">
                        <h2 className="contact-heading">Contact Form</h2>
                        <form className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Your Email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea className="form-control" id="message" rows="5" placeholder="Your Message" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block mt-3">Send Message</button>
                        </form>
                    </div>
                </div>

                {/* Map Section */}
                <div className="mt-5">
                    <h2 className="contact-heading">Find Us Here</h2>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.9940537403467!2d80.95516901472785!3d26.869766383159688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399b40a943ae623f%3A0xc85cc8d5e918d5b3!2sThe%20Engineering%20Tower%2C%20Aliganj%2C%20Lucknow%2C%20Uttar%20Pradesh%20226021!5e0!3m2!1sen!2sin!4v1693536523945!5m2!1sen!2sin"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        title="Our Location"
                    ></iframe>
                </div>
            </div>
        </div>
    )
}

export default Contact
