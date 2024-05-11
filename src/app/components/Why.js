'use client'

import Image from "next/image"

import { motion } from 'framer-motion'

import { fadeIn } from "/variants"

import { MdHandshake, MdKey, MdTrendingUp } from 'react-icons/md'


export default function Why() {
  return (
    <section className="section flex items-center" id="why">
      <div className="container mx-auto">
        <motion.h2 
        variants={fadeIn('up', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.6}}
        className="h2 text-center"
        >
          Непревзойденное качество и удовлетворенность клиентов.
        </motion.h2>
        <motion.p 
        variants={fadeIn('up', 0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.6}}
        className="max-w-[680px] text-center mx-auto mb-2"
        >
          Наше стремление к предоставлению исключительных услуг отличает нас от конкурентов.
          С момента начала взаимодействия с нами, мы стремимся превзойти ваши ожидания в каждом контакте.
        </motion.p>
        <motion.div 
        variants={fadeIn('up', 0.6)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.6}}
        className="hidden md:flex justify-center mb-6 xl:mb-2">
          <Image 
          src={'/images/why/car.svg'} 
          width={1060} 
          height={420} 
          alt=""/>
        </motion.div>
        <motion.div 
        variants={fadeIn('up', 0.8)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.4}}
        className="flex flex-wrap justify-center xl:grid xl:grid-cols-3 gap-4
        xl:gap-y-0 xl:gap-x-[30px]">
          <div className="flex flex-col items-center text-center max-w-[160px]
          xl:max-w-none p-2 xl:p-0">
            <MdKey className="text-[38px] text-accent mb-4"/>
            <h3 className="h3">Арендуйте просто и быстро.</h3>
            <p className="hidden xl:flex">
              Мы отдаём приоритет вашим потребностям и делаем все возможное, 
              чтобы ваш опыт с нами был не просто отличным, а выдающимся.
            </p>
          </div>
          <div className="flex flex-col items-center text-center max-w-[160px]
            xl:max-w-none p-2 xl:p-0">
            <MdTrendingUp className="text-[38px] text-accent mb-4"/>
            <h3 className="h3">Современные и ухоженные автомобили.</h3>
            <p className="hidden xl:flex">
              Мы отдаём приоритет вашим потребностям и делаем все возможное, 
              чтобы ваш опыт с нами был не просто отличным, а выдающимся.
            </p>
          </div>
          <div className="flex flex-col items-center text-center max-w-[160px]
          xl:max-w-none p-2 xl:p-0">
            <MdHandshake className="text-[38px] text-accent mb-4"/>
            <h3 className="h3">Гибкие и оперативные услуги.</h3>
            <p className="hidden xl:flex">
              Мы отдаём приоритет вашим потребностям и делаем все возможное, 
              чтобы ваш опыт с нами был не просто отличным, а выдающимся.
            </p>
          </div>
        </motion.div>
      </div>
      </section>
  )
}
