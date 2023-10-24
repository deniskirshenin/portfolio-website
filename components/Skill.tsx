"use client"
import React from 'react';
import { motion } from 'framer-motion';

type Props = {
    directionLeft?: boolean;
}

const Skill = ({directionLeft}: Props) => {
  return (
    <div className='flex'>
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
            src="/hero.jpg" alt="" width={20} height={20} 
            className='rounded-full border border-gray-500 object-cover h-12 w-12 xl:w-16 xl:h-16'
            />
    </div>
  );
};

export default Skill