"use client"
import { PageInfo } from '@/typings';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type Props = {
    contacts: PageInfo;
}

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const ContactMe = ({contacts}: Props) => {
    const { register, handleSubmit } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:deniskirshenin@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
    };
  return (
    <div className='h-screen flex flex-col text-center md:text-left max-w-7xl p-5 sm:px-10 sm:pt-12 sm:pb-5 justify-evenly mx-auto items-center'>
        <h3 className='uppercase tracking-[20px] text-gray-500 text-xl'>Contact</h3>
        <div className='flex flex-col space-y-8 sm:space-y-6 lg:space-y-10 w-full md:items-center'>
            <h4 className='text-xl lg:text-4xl font-semibold text-center'>
                I have got what you need.{" "}
                <span className='underline decoration-[#f7ab0a]/50'>Lets talk</span>
            </h4>
            <div className='space-y-8 sm:space-y-5 lg:space-y-10'>
                <div className='flex items-center space-x-5'>
                    <PhoneIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
                    <p className='text-lg lg:text-2xl text-black'>{contacts.phone}</p>
                </div>
                <div className='flex items-center space-x-5'>
                    <MapPinIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
                    <p className='text-lg lg:text-2xl'>{contacts.address}</p>
                </div>
                <div className='flex items-center space-x-5'>
                    <EnvelopeIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
                    <p className='text-lg lg:text-2xl'>{contacts.email}</p>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-3 lg:space-y-2 w-full sm:w-fit mx-auto'>
                <div className='flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 sm:flex-shrink-0 sm:justify-stretch sm:w-full'>
                    <input {...register('name')} className='contactInput' placeholder='Name' type="text" />
                    <input {...register('email')} className='contactInput' placeholder='Email' type="email" />
                </div>
                <input {...register('subject')} className='contactInput' placeholder='Subject' type="text" />
                <textarea {...register('message')} className='contactInput' placeholder='Message'></textarea>
                <button type='submit' className='bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default ContactMe;