"use client"
import React from 'react';
import { motion } from 'framer-motion';

type Props = {
    directionLeft?: boolean;
}

const Skill = ({directionLeft}: Props) => {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img 
            initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0
            }}
            transition={{ duration: 1 }}
            whileInView={{
                x: 0,
                opacity: 1
            }}
            src="/hero.jpg" alt="" width={100} height={100} 
            className='rounded-full border border-gray-500 object-cover h-24 w-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
            />
            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 xl:w-32 xl:h-32 rounded-full'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-3xl font-bold text-black opacity-100'>100%</p>
                </div>
            </div>
    </div>
  );
};

export default Skill