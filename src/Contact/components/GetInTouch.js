import React from 'react'

const GetInTouch = () => {
  return (
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
  )
}

export default GetInTouch
