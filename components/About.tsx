"use client"
import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

const About = (props: Props) => {
  return (
    <div 
        className='flex flex-col relative h-screen mx-auto md:text-left md:flex-row text-center max-w-7xl px-10 justify-evenly items-center overflow-hidden'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
        <motion.img
            initial={{
                x: -200,
                opacity: 0
            }}
            transition={{ duration: 1.2 }}
            whileInView={{
                x: 0,
                opacity: 1
            }}
            viewport={{
                once: true
            }}
            src='/hero.jpg'
            alt=''
            width={200}
            height={200}
            className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[650px]'
        />
        <motion.div className='space-y-10 px-0 md:px-10'
        initial={{
            opacity: 0,
            y: 100
        }}
        transition={{
            duration: 1.5
        }}
        whileInView={{
            opacity: 1,
            y: 0
        }}>

            <h4 className='text-4xl font-semibold'>
                Here is a{" "}
                    <span className='underline decoration-[#f7ab0a]/40'>little</span>{" "} 
                background
            </h4>
            <p className='text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolor veritatis animi odio asperiores quae doloribus aspernatur corporis hic perspiciatis deserunt, consequatur culpa, repellendus odit repudiandae recusandae! Mollitia, asperiores laboriosam?</p>
        </motion.div>
    </div>
  );
};

export default About;