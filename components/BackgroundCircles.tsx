"use client"

import React from 'react';
import { motion } from "framer-motion";

type Props = {}

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
        initial={{
            opacity: 0,
        }}
        animate={{
            scale: [1, 1.2, 1.2, 1.3, 1],
            opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
            borderRadius: ['20%', '20%', '50%', '80%', '20%'],
        }}
        transition={{
            duration: 2.5
        }}
        className='relative flex justify-center items-center'>
        <div className='absolute border border-gray-300 rounded-full mt-52 h-[100px] w-[100px] animate-ping'></div>
        <div className='absolute border border-gray-300 rounded-full mt-52 h-[200px] w-[200px] animate-ping'></div>
        <div className='absolute border border-gray-300 rounded-full mt-52 h-[300px] w-[300px] animate-ping'></div>
        <div className='absolute border rounded-full border-gray-500 opacity-20 h-[450px] w-[450px] mt-52 animate-pulse'></div>
        <div className='absolute border rounded-full border-gray-700 h-[550px] w-[550px] mt-52'></div>
    </motion.div>
  )
}

export default BackgroundCircles