"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { SkillType, Technology } from '@/typings';

type Props = {
  skills: SkillType[];
}

const Skills = ({skills}: Props) => {
  return (
    <motion.div 
        initial={{
            opacity: 0
        }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='flex flex-col text-center md:text-left xl:flex-row xl:px-10 xl:space-y-0 items-center'>
        <div className='grid grid-cols-4 gap-5'>
            {skills.map((skill) => (
              <div className='flex' key={skill._id}>
                <motion.img 
                  initial={{
                      x: 200,
                      opacity: 0
                  }}
                  transition={{ duration: 1 }}
                  whileInView={{
                      x: 0,
                      opacity: 1
                  }}
                  src={skill.image} alt="" width={20} height={20} 
                  className='object-cover h-12 w-12 xl:w-16 xl:h-16'
                />
              </div>

            ))}
        </div>
    </motion.div>
  )
}

export default Skills;