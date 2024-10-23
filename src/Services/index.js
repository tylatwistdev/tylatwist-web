import React from 'react'
import aboutImage from '.././assets/images/about/about1.jpg';
// Update with your image path
import teamMember1 from '.././assets/images/about/about1.jpg'; // Update with actual image paths
import teamMember2 from '.././assets/images/about/about1.jpg'; // Update with actual image paths
import teamMember3 from '.././assets/images/about/about1.jpg';
import BannerSection from './BannerSection';
import { DEFAULT_IMAGE } from '../config';

import './Services.css';

const Services = () => {
  // Team member data
  // Sample services data
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Build responsive and modern websites that adapt to any device and enhance user experience.',
      image: DEFAULT_IMAGE
    },
    {
      id: 2,
      title: 'Graphic Design',
      description: 'Create stunning graphics and visuals that effectively communicate your brand identity and message. Manage your social media presence by creating engaging content, scheduling posts, responding to followers, and analyzing performance metrics to enhance brand visibility and engagement. Manage your social media presence by creating engaging content, scheduling posts, responding to followers, and analyzing performance metrics to enhance brand visibility and engagement.',
      image: DEFAULT_IMAGE
    },
    {
      id: 3,
      title: 'SEO Optimization',
      description: 'Improve your site\'s visibility on search engines through keyword research, on-page SEO, and link-building strategies.',
      image: DEFAULT_IMAGE
    },
    {
      id: 4,
      title: 'Digital Marketing',
      description: 'Promote your brand online effectively through targeted campaigns, social media, and email marketing.',
      image: DEFAULT_IMAGE
    },
    {
      id: 5,
      title: 'Content Writing',
      description: 'Engaging content tailored to your audience that drives traffic and fosters brand loyalty through storytelling.',
      image: DEFAULT_IMAGE
    },
    {
      id: 6,
      title: 'Social Media Management',
      description: 'Manage your social media presence by creating engaging content, scheduling posts, responding to followers, and analyzing performance metrics to enhance brand visibility and engagement.',
      image: DEFAULT_IMAGE
    },
  ];

  return (
    <div>
      <BannerSection />
      <div className="container mt-5">
            <h2 className="text-center mb-4">Our Services</h2>
            <div className="row">
                {services.map(service => (
                    <div key={service.id} className="col-md-4 mb-4">
                        <div className="card text-center shadow-sm service-card">
                            <img src={service.image} className="card-img-top" alt={service.title} style={{ height: '200px', objectFit: 'cover' }} />
                            <div className="card-body">
                                <h5 className="card-title">{service.title}</h5>
                                <p className="card-text">{service.description}</p>
                            </div>
                            <div className="card-footer">
                                <a href="#" className="btn btn-primary">Learn More</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Services