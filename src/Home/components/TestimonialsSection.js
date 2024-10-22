// Testimonials.js

import { TestimonialsData } from '../../data';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const TestimonialsSection = () => {
    const testimonials = TestimonialsData();

    return (
        <div className="container-fluid my-5">
            <h2 className="text-center mb-4">Testimonials</h2>
            <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                spaceBetween={30}
                slidesPerView={1} // Default for mobile
                // loop={true}
                pagination={{ clickable: true }}
                navigation={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                speed={2000}
                breakpoints={{
                    640: { // For mobile devices
                        slidesPerView: 1, // 1 slide at a time
                    },
                    768: { // For tablets
                        slidesPerView: 2, // 2 slides at a time
                    },
                    1024: { // For desktops
                        slidesPerView: 4, // 4 slides at a time
                    },
                }}
                style={{ height: '100%' }} // Set height to 100% of the swiper container
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <div className="testimonial-card text-center p-4">
                            <img
                                src={testimonial.image}
                                alt={`Client ${testimonial.name}`}
                                className="client-image rounded-circle mb-3"
                                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                            />
                            <h5 className="client-name">{testimonial.name}</h5>
                            <p className="client-feedback">
                                {testimonial.feedback}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TestimonialsSection;
