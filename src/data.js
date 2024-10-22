import image1 from "./assets/images/banner/image1.jpg";
import image2 from "./assets/images/banner/image2.jpg";

import serviceImage1 from './assets/images/banner/image1.jpg'; // Replace with your actual image paths
import serviceImage2 from './assets/images/banner/image2.jpg';
import serviceImage3 from './assets/images/banner/image1.jpg';

import clientImage1 from './assets/images/banner/image1.jpg'; // Replace with your actual image paths
import clientImage2 from './assets/images/banner/image2.jpg';
import clientImage3 from './assets/images/banner/image1.jpg';


export const BannerSliderImages = () => {
    return [
        image1, image2
    ];
};


export const servicesData = () => {
    return [
        {
            id: 1,
            title: 'Service 1',
            description: 'Description of Service 1.',
            image: serviceImage1,
        },
        {
            id: 2,
            title: 'Service 2',
            description: 'Description of Service 2.',
            image: serviceImage2,
        },
        {
            id: 3,
            title: 'Service 3',
            description: 'Description of Service 3.',
            image: serviceImage3,
        },
        {
            id: 4,
            title: 'Service 1',
            description: 'Description of Service 1.',
            image: serviceImage1,
        },
        {
            id: 5,
            title: 'Service 2',
            description: 'Description of Service 2.',
            image: serviceImage2,
        },
        {
            id: 6,
            title: 'Service 3',
            description: 'Description of Service 3.',
            image: serviceImage3,
        },
        {
            id: 7,
            title: 'Service 1',
            description: 'Description of Service 1.',
            image: serviceImage1,
        },
        {
            id: 8,
            title: 'Service 2',
            description: 'Description of Service 2.',
            image: serviceImage2,
        },
        {
            id: 9,
            title: 'Service 3',
            description: 'Description of Service 3.',
            image: serviceImage3,
        },
        {
            id: 10,
            title: 'Service 3',
            description: 'Description of Service 3.',
            image: serviceImage3,
        },
    ];
}

export const TestimonialsData = () => {
    return [
        {
            id: 1,
            name: 'Client One',
            image: clientImage1,
            rating: 5, // Number of stars
            feedback: 'This service has changed my life! Highly recommended.',
        },
        {
            id: 2,
            name: 'Client Two',
            image: clientImage2,
            rating: 4, // Number of stars
            feedback: 'Great experience and fantastic support from the team.',
        },
        {
            id: 3,
            name: 'Client Three',
            image: clientImage3,
            rating: 5, // Number of stars
            feedback: 'Professional and reliable. Will definitely use their services again!',
        },
        {
            id: 4,
            name: 'Client One',
            image: clientImage1,
            rating: 5, // Number of stars
            feedback: 'This service has changed my life! Highly recommended.',
        },
        {
            id: 5,
            name: 'Client Two',
            image: clientImage2,
            rating: 4, // Number of stars
            feedback: 'Great experience and fantastic support from the team.',
        },
        {
            id: 6,
            name: 'Client Three',
            image: clientImage3,
            rating: 5, // Number of stars
            feedback: 'Professional and reliable. Will definitely use their services again!',
        },
    ];
}