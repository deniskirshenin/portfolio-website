"use client"

import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import Link from 'next/link';
import { PageInfo } from '@/typings';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

type Props = {
    pageInfo: PageInfo;
}

function Hero({pageInfo}: Props) {
    const [text,count] = useTypewriter({
        words: [`Hey, I'm ${pageInfo.name}`],
        loop: 1,
        delaySpeed: 1000,
        
    });
  return (
    <div className='h-screen flex flex-col space-y-12 lg:space-y-8 items-center justify-center text-center overflow-hidden'>
        <div className='flex flex-col p-5'>
            <h1 className='text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold lg:px-10 uppercase'>
                {text}
            </h1>
            <motion.h2 
            initial={{
                opacity: 0,
                y: 200,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{ once: true }}
            transition={{duration: 3.5}}
            className='text-2xl sm:text-3xl lg:text-6xl uppercase font-bold text-gray-500 pb-2 lg:px-10 tracking-[15px]'>{pageInfo.role}</motion.h2>
        </div>
        <motion.div 
            initial={{
                opacity: 0,
                y: 200,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            transition={{duration: 3}}
            viewport={{ once: true }}
            className='flex space-x-5'>
            <Link 
                className='flex items-center space-x-2 border border-transparent hover:border-b-black transition-all' href="#about">
                <span>About</span> 
                <ArrowRightIcon className='w-8 h-8' /> 
            </Link>
            <Link className='flex items-center space-x-2 border border-transparent hover:border-b-black transition-all' href='#projects'>
                <span>Projects</span> 
                <ArrowRightIcon className='w-8 h-8'/>
            </Link>
        </motion.div>
    </div>
  )
};

export default Hero;