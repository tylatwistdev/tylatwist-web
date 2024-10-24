// Services.js
import React, { useContext, useEffect, useState } from 'react';

import { fetchServicesData } from '../Service/ApiService';
import { DataContext } from '../contexts/DataProvider';
import { DEFAULT_IMAGE } from '../config';
import CustomHeading from './CustomHeading';
import SkeletonLoader from './SkeletonLoader';



const ServicesSection = () => {

    const { services, setServices } = useContext(DataContext);
    const [loading, setLoading] = useState(false); // State for loading

    console.log("service", services);

    const getServicesData = async () => {
        setLoading(true);
        try {
            const response = await fetchServicesData();
            if (response.status) {
                console.log("data", response.data);
                setServices(response.data);
            }
        } catch (error) {
            console.log("error", error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        getServicesData();
    }, []);
    if (loading) {
        return <SkeletonLoader />; // Show skeleton loader while loading
    }
    return (
        <div className="container my-5">
            <CustomHeading title="Our Services" />
            {/* <p className='text-center'>
                Our team is composed of experienced professionals who are passionate about delivering the best results for our clients.
            </p> */}
            
            <div className="row">
                {services.map(service => (
                    <div key={service.id} className="col-md-4 mb-4">
                        <div className="card text-center shadow-sm service-card">
                            <div className="card-body">
                                <div className='service-card-image'>
                                    <img src={service.image || DEFAULT_IMAGE} className="card-img-top" alt={service.title} style={{ height: '200px', objectFit: 'cover' }} />
                                </div>
                                <h5 className="card-title">{service.title}</h5>
                                <p className="card-text">{service.content}</p>
                            </div>
                            <div className="card-footer">
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
