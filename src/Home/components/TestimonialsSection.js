// Testimonials.js


import { TestimonialsData } from '../../data';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const TestimonialsSection = () => {
    const testimonials = TestimonialsData()

    return (
        <div className="container-fluid my-5">
            <h2 className="text-center mb-4">Testimonials</h2>
            <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                spaceBetween={30}
                slidesPerView={4} // Show 4 testimonials at a time
                loop={true}
                pagination={{ clickable: true }}
                navigation={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1, // 1 slide at a time for mobile
                    },
                    768: {
                        slidesPerView: 2, // 2 slides at a time for tablets
                    },
                    1024: {
                        slidesPerView: 4, // 4 slides at a time for desktops
                    },
                }}
            >
                {testimonials.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                        <div className="testimonial-card testimonial-image text-center p-4">
                            <img src={testimonial.image} alt={testimonial.name} className="client-image rounded-circle mb-3" />
                            <h5 className="client-name">{testimonial.name}</h5>
                            <div className="client-rating">
                                {Array.from({ length: testimonial.rating }, (_, i) => (
                                    <span key={i} className="star">&#9733;</span> // Star character
                                ))}
                            </div>
                            <p className="client-feedback">{testimonial.feedback}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TestimonialsSection;
