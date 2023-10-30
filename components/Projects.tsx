"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import { Project } from '@/typings';
import Image from 'next/image';

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
        <h3 className='uppercase tracking-[20px] text-gray-500 text-xl pb-2 lg:pb-20'>Projects</h3>
        <div className='relative w-full h-screen flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>
            {projects.map((project, index) => (
                <div className='w-screen flex-shrink-0 snap-center flex flex-col sm:flex-row' key={project._id}>
                    <motion.div 
                        initial={{
                            x: 300,
                            opacity: 0
                        }}
                        transition={{ duration: 1.2 }}
                        whileInView={{
                            x: 0,
                            opacity: 1
                        }}
                        viewport={{ once: true }}
                        className='w-full h-52 lg:w-1/2 lg:h-full sm:pt-10'>
                        <Image
                            className='w-full h-full object-contain'
                            src={project.image} alt="" width={400} height={208}
                        />
                    </motion.div>
                    
                    <div className='flex flex-col space-y-3 lg:space-y-10 p-5 md:px-10 h-2/3 sm:h-full w-full lg:w-1/2'>
                        <motion.div
                            initial={{
                                opacity: 0
                            }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1.5 }}
                        >
                            <h4 className='text-2xl lg:text-4xl font-semibold text-left lg:text-center'>
                                <span className='underline decoration-[#f7ab0a]/50'>Case study {index+1} of {projects.length}:</span> 
                                {" "}{project.name}
                            </h4>
                            <p className='text-md lg:text-lg text-left lg:text-center md:text-left'>{project.summary}</p>
                        </motion.div>
                        
                        <motion.div 
                            initial={{
                                opacity: 0
                            }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1.5 }}
                            className='flex flex-col text-center md:text-left xl:flex-row xl:px-10 xl:space-y-0'>
                            <div className='grid grid-cols-4 gap-5'>
                                {project.technologies.map((tech) => (
                                <motion.div 
                                    initial={{
                                        opacity: 0
                                    }}
                                    transition={{ duration: 1 }}
                                    whileInView={{
                                        opacity: 1
                                    }}
                                    className='flex' key={tech._id}>
                                    <Image
                                        src={tech.image} alt="" width={20} height={20} 
                                        className='object-cover h-12 w-12 xl:w-16 xl:h-16'
                                    />
                                </motion.div>
                                ))}
                            </div>
                        </motion.div>
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
                            className='flex justify-between lg:space-x-5'>
                            <Link 
                                className='flex items-center space-x-2 border border-transparent hover:border-b-black transition-all' href={project.linkToDemo}>
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