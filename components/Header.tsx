"use client"
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Social } from '@/typings';

type Props = {
    socials: Social[]
}

const Header = ({socials}: Props) => {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div 
            initial={{
                x: -500,
                opacity: 0,
                scale: 0.5,
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1,
            }}
            transition={{
                duration: 2,
            }}
            className='flex flex-row items-center'>
            {socials.map((social) => (
                <SocialIcon 
                key={social._id}
                url={social.url}
                fgColor='black'
                bgColor='transparent'
                />
            ))}
        </motion.div>
        <Link href="#contact">
            <motion.div 
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{ duration: 2 }}
                className='flex flex-row items-center text-black cursor-pointer'>
                <SocialIcon 
                    className='cursor-pointer'
                    network='email'
                    fgColor='black'
                    bgColor='transparent'
                />
                <p className='uppercase hidden md:inline-flex text-sm text-black'>Get in touch</p>
            </motion.div>
        </Link>
        {/* <div className='pt-5'>
                <Link href='#about'>
                    <button className='heroButton'>About</button>
                </Link>
                <Link href='#experience'>
                    <button className='heroButton'>Experience</button>
                </Link>
                <Link href='#skills'>
                    <button className='heroButton'>Skills</button>
                </Link>
                <Link href='#projects'>
                    <button className='heroButton'>Projects</button>
                </Link>
            </div> */}
    </header>
  )
}

export default Header