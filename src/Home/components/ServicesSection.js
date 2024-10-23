// Services.js
import React, { useContext, useEffect, useState } from 'react';
import { servicesData } from '../../data';
import { fetchServicesData } from '../../Service/ApiService';
import { DataContext } from '../../contexts/DataProvider';
import SkeletonLoader from './SkeletonLoader';
import { DEFAULT_IMAGE } from '../../config';



const ServicesSection = () => {

    const { services, setServices } = useContext(DataContext);
    const [loading, setLoading] = useState(false); // State for loading
    const servicess = servicesData()
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
        <div className="container-fluid my-5">
            <h2 className="text-center mb-4 underline">Our Services</h2>
            <p className='text-center'>
                Our team is composed of experienced professionals who are passionate about delivering the best results for our clients.
            </p>
            <div className="row">
                {/* {servicess.map((service) => (
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
                ))} */}
                {services.map((service) => (
                    // <div className="col-md-4 mb-4" key={service._id}>
                    //     <div className="card">
                    //         <img src={service?.image ?? DEFAULT_IMAGE} alt={service.title} className="card-img-top" />
                    //         <div className="card-body">
                    //             <h5 className="card-title">{service.title}</h5>
                    //             <p className="card-text service-content">{service.content}</p>
                    //             <a href="#" className="btn btn-primary">Learn More</a>
                    //         </div>
                    //     </div>
                    // </div>
                    <div className="col-md-4 mb-4">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <div>
                            <img src={service?.image ?? DEFAULT_IMAGE} alt={service.title} className="card-img-top" />

                                </div>
                                <h5 className="card-title">{service.title}</h5>
                                <p className="card-text">{service.content}</p>
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
