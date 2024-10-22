import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { BannerSliderImages } from '../../data';

const BannerSlider = () => {
  const images = BannerSliderImages();

  return (
    <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      spaceBetween={30}
      slidesPerView={1} // Default for mobile
      loop={true}
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
          height: '60vh', // 60% of the viewport height
        },
        768: { // For tablets
          slidesPerView: 1, // 1 slide at a time
          height: '70vh', // 70% of the viewport height
        },
        1024: { // For desktops
          slidesPerView: 1, // 1 slide at a time
          height: '80vh', // 80% of the viewport height
        },
      }}
      style={{ height: '100%' }} // Set height to 100% of the swiper container
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt={`Banner ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BannerSlider;
