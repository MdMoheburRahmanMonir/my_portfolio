'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { HiOutlineChatAlt2 } from 'react-icons/hi';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    name: 'Jhon Doe',
    review: 'A really good job, all aspects of the project were followed step by step and with good results.',
  },
  {
    id: 2,
    name: 'Harry Clinton',
    review: 'Excellent developer! The communication was great and the final product exceeded my expectations.',
  },
  {
    id: 3,
    name: 'Sara Ali',
    review: 'Very professional and creative. Helped me to build my brand from scratch with a modern touch.',
  },
  {
    id: 4,
    name: 'Michael Ross',
    review: 'Fast delivery and high quality code. I would highly recommend working with him.',
  },
];

const ClientReview = () => {
  return (
    <div id='ClientReview' className="py-12 w-full">
      <div className=" w-11/12 mx-auto px-6">
         
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">My Clients Say</h2>
          <span className="text-gray-500 dark:text-gray-400 mt-2 italic">Testimonials</span>
        </div>
 
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          grabCursor={true}  
          centeredSlides={false}
          autoplay={{
            delay: 3000, 
          }}
          pagination={{
            clickable: true, 
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },  
            1000: { slidesPerView: 3 },  
          }}
          className="pb-8"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="dark:bg-white/5 bg-black/5 shadow-black/20 dark:shadow-white/20 hover:shadow-black/5 hover:dark:shadow-white/5 border hover:scale-105 duration-300 delay-300 p-8 mb-10 rounded-[2rem] shadow-sm hover:shadow-2xl transition-shadow h-full flex flex-col">
                <HiOutlineChatAlt2 className="text-3xl text-gray-800 dark:text-blue-500 mb-4" />
                <span className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6  ">
                  {item.review}
                </span>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mt-auto">
                  {item.name}
                </h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>  
    </div>
  );
};

export default ClientReview;