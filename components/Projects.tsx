"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRightIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import Skills from './Skills';
import { Project } from '@/typings';

type Props = {
    projects: Project[];
};

const Projects = ({projects}: Props) => {
  return (
    <motion.div
        initial={{
            opacity: 0
        }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='h-screen relative flex flex-col mx-auto pt-20 items-center'>
        <h3 className='uppercase tracking-[20px] text-gray-500 text-xl pb-20'>Projects</h3>
        <div className='relative w-full h-screen flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>
            {projects.map((project, index) => (
                <div className='w-screen flex-shrink-0 snap-center flex flex-col lg:flex-row' key={project._id}>
                    <div className='w-1/2 h-full'>
                        <motion.img 
                            initial={{
                                y: -300,
                                opacity: 0
                            }}
                            transition={{ duration: 1.2 }}
                            whileInView={{
                                y: 0,
                                opacity: 1
                            }}
                            viewport={{ once: true }}
                            className='w-full h-full object-contain'
                            src="/hero.jpg" alt="" width={300} height={200}
                        />
                    </div>
                    
                    <div className='flex flex-col space-y-10 px-0 md:px-10 w-1/2'>
                        <h4 className='text-4xl font-semibold text-center'>
                            <span className='underline decoration-[#f7ab0a]/50'>Case study {index+1} of {projects.length}:</span> 
                            {" "}{project.title}
                        </h4>
                        <p className='text-lg text-center md:text-left'>{project.summary}</p>
                        <Skills />
                        <motion.div 
                            initial={{
                                opacity: 0,
                                x: 200,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            transition={{duration: 2}}
                            viewport={{ once: true }}
                            className='flex space-x-5'>
                            <Link 
                                className='flex items-center space-x-2 border border-transparent hover:border-b-black transition-all' href="#about">
                                <span>Demo</span> 
                                <ArrowTopRightOnSquareIcon className='w-8 h-8' /> 
                            </Link>
                            <Link className='flex items-center space-x-2 border border-transparent hover:border-b-black transition-all' href={project.linkToBuild}>
                                <span>Source code</span> 
                                <ArrowTopRightOnSquareIcon className='w-8 h-8'/>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            ))}
            
        </div>
    </motion.div>
  );
};

export default Projects;