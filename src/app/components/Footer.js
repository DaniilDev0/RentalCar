'use client'

import Image from "next/image"

import { FaPhone, FaEnvelope } from 'react-icons/fa6';

import Copyright from "./Copyright"

import { motion } from 'framer-motion'

import { fadeIn } from '/variants'

import { Link } from 'react-scroll'

export default function Footer() {
  return (
  <footer className="pt-20 bg-white z-20" id="contact">
    <div className="container mx-auto mb-24">
      <motion.div
        variants={fadeIn('up', 0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.6}}
        className="flex flex-col lg:flex-row lg:justify-between gap-x-5
       gap-y-14"
       >
          <div className="flex flex-col flex-1 gap-y-8">
            <Link 
            to={'home'} 
            smooth={true} 
            spy={true} 
            className="cursor-pointer"
            >
            <Image 
              src={'/icons/logo.svg'} 
              width={200} 
              height={200} 
              alt=""/>
             </Link>
             <div className="text-secondary">
              Подписывайтесь на наши новости и получайте актуальные предложения прямо в вашу почту! 
              </div>
             {/* phone mail  */}
             <div className="flex flex-col gap-y-4 font-semibold">
              <div className="flex items-center gap-x-[10px]">
                <FaPhone/>
                <div className="font-meduim">+7-964-444-33-44</div>
              </div>
              <div className="flex items-center gap-x-[10px]">
                <FaEnvelope/>
                <div className="font-medium">carrental@carland.ru</div>
              </div>
             </div>
          </div>
          {/* ssilki */}
        <div className="flex-1 flex flex-col xl:items-center">
          <div>
            <h3 className="h3 font-bold mb-8">Компания</h3>
            <ul className="flex flex-col gap-y-4 font-semibold">
              <li>
                <a href="">Алматы</a>
              </li>
              <li>
                <a href="">Карьера</a>
              </li>
              <li>
                <a href="">Телефон</a>
              </li>
              <li>
                <a href="">Блог</a>
              </li>
              <li>
                <a href="">Как мы работаем</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1">
         <h3 className="h3 font-bold mb-8">Часы работы:</h3> 
         <div className="flex flex-col gap-y-4">
          <div className="flex gap-x-2">
            <div className="text-secondary">Пн-Пт:</div>
            <div>10:00 - 24:00</div>
          </div>
          <div className="flex gap-x-2">
            <div className="text-secondary">Сб:</div>
            <div>10:00 - 21:00</div>
          </div>
          <div className="flex gap-x-2">
            <div className="text-secondary">Вс:</div>
            <div className="font-semibold">Выходной</div>
          </div>
         </div>
        </div>
      </motion.div>
    </div>
    <Copyright/>
    </footer>
  );
}
