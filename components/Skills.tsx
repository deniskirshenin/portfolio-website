"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';

type Props = {}

const Skills = (props: Props) => {
  return (
    <motion.div 
        initial={{
            opacity: 0
        }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='flex flex-col text-center md:text-left xl:flex-row xl:px-10 xl:space-y-0 items-center'>
        <div className='grid grid-cols-4 gap-5'>
            <Skill />
            <Skill />
            <Skill />
        </div>
    </motion.div>
  )
}

export default Skills;