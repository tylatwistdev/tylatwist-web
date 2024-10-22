import React from 'react'

const ContactForm = () => {
    return (
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
    )
}

export default ContactForm
