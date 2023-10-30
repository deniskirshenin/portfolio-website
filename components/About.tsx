"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { PageInfo } from '@/typings';

type Props = {
    aboutInfo: PageInfo;
}

const About = ({aboutInfo}: Props) => {
  return (
    <motion.div
        initial={{
            x: 200,
            opacity: 0
        }}
        transition={{ duration: 2 }}
        whileInView={{
            x: 0,
            opacity: 1,
        }}
        viewport={{ once: true }}
        className='flex flex-col-reverse sm:flex-row justify-end relative h-screen w-full mx-auto md:text-left text-center'
        >
        <motion.div className='space-y-10 p-4 sm:pt-60 md:px-10 lg:pl-60 w-full h-full md:w-[50%] lg:w-[75%]'
        initial={{
            opacity: 0,
            x: -200
        }}
        transition={{
            duration: 2
        }}
        whileInView={{
            opacity: 1,
            x: 0
        }}
        viewport={{
            once: true,
        }}
        >
            <h3 className='uppercase tracking-[20px] text-black text-2xl lg:pb-3 lg:border-b-4 lg:border-b-black'>About</h3>
            <p className='text-base text-black'>{aboutInfo.backgroundInformation}</p>
        </motion.div>
        <motion.div
            initial={{
                x: 200,
                opacity: 0
            }}
            transition={{ duration: 2 }}
            animate={{
                x: 0,
                opacity: 1
            }}
            viewport={{
                once: true
            }}
            className='w-full h-[50%] sm:h-[75%] md:pt-20 md:w-[50%] lg:w-[25%]'
        >
            <Image
                
                src={aboutInfo.heroImage}
                alt=''
                width={200}
                height={200}
                className='w-full h-full rounded-b-lg sm:rounded-b-none sm:rounded-bl-lg md:rounded-none object-cover aspect-[2/3]'
            />
        </motion.div>
    </motion.div>
  );
};

export default About;