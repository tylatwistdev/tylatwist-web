import image1 from "./assets/images/banner/image1.jpg";
import image2 from "./assets/images/banner/image2.jpg";

import serviceImage1 from './assets/images/banner/image1.jpg'; // Replace with your actual image paths
import serviceImage2 from './assets/images/banner/image2.jpg';
import serviceImage3 from './assets/images/banner/image1.jpg';


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