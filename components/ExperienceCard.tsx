"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Props = {}

function ExperienceCard(props: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10'>
            <motion.img 
                initial={{
                    y: -100,
                    opacity: 0
                }}
                transition={{ duration: 1.2 }}
                whileInView={{
                    y: 0,
                    opacity: 1
                }}
                viewport={{ once: true }}
                className='relative rounded-full h-32 w-32 object-top xl:w-[200px] xl:h-[200px] object-cover'
                src='/hero.jpg' alt='' width={320} height={320} 
            />

            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>Frontend Developer trainee</h4>
                <p className='font-bold text-2xl mt-1'>League A agency</p>
                <div className='flex space-x-2 my-2'>
                    <Image 
                        className='h-10 w-10 rounded-full'
                        src="/hero.jpg" alt="" width={100} height={100} 
                    />
                    <Image 
                        className='h-10 w-10 rounded-full'
                        src="/hero.jpg" alt="" width={100} height={100} 
                    />
                    <Image 
                        className='h-10 w-10 rounded-full'
                        src="/hero.jpg" alt="" width={100} height={100} 
                    />
                </div>
                <p className='uppercase py-5 text-gray-300'>07-2023 - present</p>
                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <li>Summary point</li>
                    <li>Summary point</li>
                    <li>Summary point</li>
                    <li>Summary point</li>
                    <li>Summary point</li>
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard