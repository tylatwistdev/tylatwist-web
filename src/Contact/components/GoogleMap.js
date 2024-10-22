import React from 'react'

const GoogleMap = () => {
    return (
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
    )
}

export default GoogleMap
