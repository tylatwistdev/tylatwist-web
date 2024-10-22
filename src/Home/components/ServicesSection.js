// Services.js
import React, { useEffect, useState } from 'react';
import { servicesData } from '../../data';
import { fetchServicesData } from '../../Service/ApiService';



const ServicesSection = () => {
    
    const servicess = servicesData()
    const [services, setServices] = useState([]);
   

    const getServicesData = async () => {
        try {
            const data= await fetchServicesData({ });
            console.log("data", data);
            
           
        } catch (error) {
        }
    };
    useEffect(() => {
        getServicesData();
    }, []);
    return (
        <div className="container-fluid my-5">
            <h2 className="text-center mb-4 underline">Our Services</h2>
            <p className='text-center'>
                Our team is composed of experienced professionals who are passionate about delivering the best results for our clients.
            </p>
            <div className="row">
                {servicess.map((service) => (
                    <div className="col-md-4 mb-4" key={service.id}>
                        <div className="card">
                            <img src={service.image} alt={service.title} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{service.title}</h5>
                                <p className="card-text">{service.description}</p>
                                <a href="#" className="btn btn-primary">Learn More</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesSection;
