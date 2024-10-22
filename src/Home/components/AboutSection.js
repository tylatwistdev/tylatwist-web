// About.js
import React from 'react';
import aboutImage from '../../assets/images/about/about1.jpg'; // Replace with your actual image path

const AboutSection = () => {
    return (
        <div className="container-fluid my-5">
            <h2 className="text-center mb-4 underline">About Us</h2>
            <p className='text-center'>
                Our team is composed of experienced professionals who are passionate about delivering the best results for our clients.
            </p>
            <div className="row align-items-center">
                <div className="col-md-6">
                    <p>
                        With years of experience in the industry, our team brings unparalleled expertise and a deep understanding of technology trends, certifying that our clients receive top-notch solutions specialized to their needs.
                        We pride ourselves on delivering innovative solutions that go beyond conventional approaches, impacting emerging technologies to solve complex business challenges and drive transformation.
                        We take the time to understand each client's unique goals, challenges, and requirements, allowing us to customize our solutions to their specific needs and deliver maximum value.
                        Quality is at the heart of everything we do. From initial consultation to final delivery, we maintain the highest standards of quality in our work, ensuring that our clients receive solutions that meet or exceed their expectations.
                        Our commitment to our clients doesn't end with the project delivery. We provide ongoing support and maintenance to ensure that our solutions continue to perform ideally and meet our clients' evolving needs.
                        We believe in open and transparent communication with our clients every step of the way, keeping them informed and involved throughout the project biorhythm.
                        Our track record speaks for itself. We have successfully completed numerous projects for a diverse range of clients, earning a reputation for excellence and reliability in the industry.
                    </p>
                </div>
                <div className="col-md-6">
                    <div className="about-image-container">
                        <img src={aboutImage} alt="About Us" className="img-fluid about-image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
