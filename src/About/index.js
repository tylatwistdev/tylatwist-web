import React from 'react'
import aboutImage from '.././assets/images/about/about1.jpg';
// Update with your image path
import teamMember1 from '.././assets/images/about/about1.jpg'; // Update with actual image paths
import teamMember2 from '.././assets/images/about/about1.jpg'; // Update with actual image paths
import teamMember3 from '.././assets/images/about/about1.jpg';

const About = () => {
  // Team member data
  const teamMembers = [
    {
      name: "John Doe",
      position: "Software Engineer",
      image: teamMember1,
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Jane Smith",
      position: "Project Manager",
      image: teamMember2,
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Emily Johnson111",
      position: "UX/UI Designer",
      image: teamMember3,
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
  ];
  return (

    <div className="container mt-5">
      <div className="row mb-4">
        <div className="col-md-6 about-image-container">
          <img src={aboutImage} alt="About Us" className="img-fluid rounded img-fluid about-image" />
        </div>
        <div className="col-md-6">
          <h1>About Us</h1>
          <p>
            Welcome to Tech Innovations, where we are dedicated to providing the best technology solutions for businesses. Our mission is to empower companies through innovative technology, enabling them to achieve their goals efficiently and effectively.
          </p>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-12">
          <h2>Our Values</h2>
          <p>
            We believe in:
            <ul>
              <li><strong>Integrity:</strong> We uphold the highest standards of honesty and transparency in all our interactions.</li>
              <li><strong>Innovation:</strong> We embrace creativity and strive to offer cutting-edge solutions that meet the evolving needs of our clients.</li>
              <li><strong>Collaboration:</strong> We work closely with our clients and partners, fostering an environment of teamwork and shared success.</li>
            </ul>
            These core values drive our operations and guide our decision-making processes.
          </p>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-12">
          <h2>Our Team</h2>
          <div className="row">
            {teamMembers.map((member, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card">
                  <img src={member.image} className="card-img-top team-image" alt={`Team Member ${index + 1}`} />
                  <div className="card-body">
                    <h5 className="card-title">{member.name}</h5>
                    <p className="card-text">{member.position}</p>
                    <div className="social-icons mt-4">
                      <a href={member.socialLinks.facebook} className="icon facebook" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href={member.socialLinks.twitter} className="icon twitter" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href={member.socialLinks.instagram} className="icon instagram" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href={member.socialLinks.linkedin} className="icon linkedin" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <h2>Contact Us</h2>
          <p>
            If you have any questions or need further information, feel free to reach out to us at <strong>contact@techinnovations.com</strong> or call us at <strong>(123) 456-7890</strong>. We would love to hear from you!
          </p>
        </div>
      </div>
    </div>
  )
}

export default About