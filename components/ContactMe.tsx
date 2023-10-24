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
    <div className='h-screen flex flex-col text-center md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='uppercase tracking-[20px] text-gray-500 text-xl'>Contact</h3>
        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center'>
                I have got what you need.{" "}
                <span className='underline decoration-[#f7ab0a]/50'>Lets talk</span>
            </h4>
            <div className='space-y-10'>
                <div className='flex items-center space-x-5'>
                    <PhoneIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
                    <p className='text-2xl'>{contacts.phoneNumber}</p>
                </div>
                <div className='flex items-center space-x-5'>
                    <MapPinIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
                    <p className='text-2xl'>{contacts.address}</p>
                </div>
                <div className='flex items-center space-x-5'>
                    <EnvelopeIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
                    <p className='text-2xl'>{contacts.email}</p>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
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