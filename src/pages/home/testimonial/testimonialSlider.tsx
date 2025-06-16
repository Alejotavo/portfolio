// components/TestimonialSlider.tsx

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Alan Macgowan',
    role: 'Software Engineer at Alora Home Health',
    feedback:
      'Alejo is an excellent professional. I had the privilege of working with him and I highly recommend him. He has UI/UX and technical knowledge and is very committed to producing quality work. His attention to detail and willingness to learn the business need makes him a great asset for any team. I would definitely recommend him as a person and as a professional!',
    image: '/images/testimonials/alan.jpg',
  },
  {
    name: 'Facundo Merighi',
    role: 'Software Architect',
    feedback:
      'I have the privilege to work with Alejo.  He is a talented Visual Designer and Web UI developer. He worked with the team improving the application and bringing the designs live. Thank Alejo! ',
    image: '/images/testimonials/facu.jpg',
  },
  {
    name: 'Matias Leandro Nuñez',
    role: 'QA Engineer',
    feedback:
      'He is not only an always punctual and careful expert but also an inspiring UI/UX. Responsible co-worker. That is him - energetic employee always ready to put all his energy and stamina to get the job done. Highly recommended. Is able to work in a fast-paced environment.',
    image: '/images/testimonials/mati.jpg',
  },
];

export default function TestimonialSlider() {
  return (
<div style={{ backgroundColor: "#f9f9fb" }}>
  <div style={{ maxWidth: "700px" }} className="mx-auto p-5">
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
    >
      {testimonials.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="dark:bg-zinc-900 p-8 rounded-2xl shadow-xl text-center flex flex-col items-center">
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: '90px',
                height: '90px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '3px solid #33BBE5',
                marginBottom: '1rem',
              }}
            />
            <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-6 max-w-xl">
              “{item.feedback}”
            </p>
            <p className="text-indigo-600 font-semibold dark:text-indigo-400">
              {item.name}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">{item.role}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</div>
  );
}
