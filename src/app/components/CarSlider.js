'use client'

// importiruem slider
import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'

import Image from 'next/image'

import {FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'

import {motion} from 'framer-motion'

import {fadeIn} from '/variants'

const cars = [
  {
    type:'Хэтчбек',
    name:'Ford Focus',
    price: 29,
    stars: 3.5,
    image:'images/carSlider/car01.svg',
    info: [
      {
        icon:'icons/carSlider/gearshift.svg',
        text:'Механика',
      },
      {
        icon:'icons/carSlider/seat.svg',
        text:'5 мест',
      },
      {
        icon:'icons/carSlider/gas.svg',
        text:'Бензин',
      },
      {
        icon:'icons/carSlider/engine.svg',
        text:'125hp',
      },
      {
        icon:'icons/carSlider/wheel.svg',
        text:'Передний',
      },
    ],
  },
  {
    type:'Седан',
    name:'Toyota Corolla',
    price: 25,
    stars: 5,
    image:'images/carSlider/car02.svg',
    info: [
      {
        icon:'icons/carSlider/gearshift.svg',
        text:'Механика',
      },
      {
        icon:'icons/carSlider/seat.svg',
        text:'5 мест',
      },
      {
        icon:'icons/carSlider/gas.svg',
        text:'Бензин',
      },
      {
        icon:'icons/carSlider/engine.svg',
        text:'143hp',
      },
      {
        icon:'icons/carSlider/wheel.svg',
        text:'Передний',
      },
    ],
  },
  {
    type:'Седан',
    name:'Hyundai Solaris',
    price: 35,
    stars: 4.7,
    image:'images/carSlider/car03.svg',
    info: [
      {
        icon:'icons/carSlider/gearshift.svg',
        text:'Автомат',
      },
      {
        icon:'icons/carSlider/seat.svg',
        text:'5 мест',
      },
      {
        icon:'icons/carSlider/gas.svg',
        text:'Бензин',
      },
      {
        icon:'icons/carSlider/engine.svg',
        text:'123hp',
      },
      {
        icon:'icons/carSlider/wheel.svg',
        text:'Передний',
      },
    ],
  },
  {
    type:'Кабриолет',
    name:'Mazda MX-5',
    price: 32,
    stars: 4.9,
    image:'images/carSlider/car02.svg',
    info: [
      {
        icon:'icons/carSlider/gearshift.svg',
        text:'Автомат',
      },
      {
        icon:'icons/carSlider/seat.svg',
        text:'4 Места',
      },
      {
        icon:'icons/carSlider/gas.svg',
        text:'Бензин',
      },
      {
        icon:'icons/carSlider/engine.svg',
        text:'220hp',
      },
      {
        icon:'icons/carSlider/wheel.svg',
        text:'Задний',
      },
    ],
  },
];


export default function CarSlider() {
  return (
  <motion.div 
  variants={fadeIn('up',0.4)} 
  initial='hidden' 
  whileInView={'show'}
  viewport={{once: false, amount:0.2}}
  className='container mx-auto'
  >
      <Swiper 
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 15 },
        640: { slidesPerView: 2, spaceBetween: 32 },
        1260: { slidesPerView: 3, spaceBetween: 32 },
        }}
        >
          {cars.map((car,index)=> {

            return (
            <SwiperSlide key={index}>
              <div className='max-w-[385px] mx-auto sm:mx-0'>
                <Image src={car.image} width={380} height={284} alt=''/>
                <div className='flex justify-between'>
                  <div>
                    <div className='text-[13px] text-secondary uppercase'>{car.type}</div>
                    <h3 className='text-lg uppercase font-bold'>{car.name}</h3>
                    <div className='mb-10 text-accent font-semibold uppercase'>{car.price}/сутки</div>
                  </div>
                  {/* stars */}
                  <div className='flex gap-x-2 text-accent'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                  </div>
                </div>
                {/* info car */}
                <div className='flex gap-x-3 xl:gap-x-4 w-max mb-10'>
                  {car.info.map((item,index)=>{
                    return (
                    <div key={index} className='flex flex-col items-center'>
                      <div className='bg-primary w-12 h-12 rounded-full flex
                      justify-center items-center mb-2'>
                        <Image 
                        src={item.icon} 
                        width={24}
                         height={24} 
                         alt=''
                         />
                      </div>
                      <div className='text-[12px] uppercase'>{item.text}</div>
                    </div>
                    );
                  })}
                </div>
                <button className='btn btn-accent btn-lg'>Посмотреть детали</button>
              </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
  );
}
