import React from 'react'
import Image from 'next/image'
import { Carousel } from 'flowbite-react';

const Banner = () => {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[500px]'>
        <Image src="/bg.jpg" alt='bg' priority 
        className='object-cover object-left' fill/>
        <div className='absolute top-1/2 w-full text-center'>
            <p className='text-sm sm:text-lg text-white'>Not sure where to go? perfect.</p>
            <button type='button' className='btn text-[#1F334E] bg-white px-10 py-4 mt-4 shadow-md rounded-xl font-bold '>
                I am flexible
            </button>
        </div>
    </div>
  )
}

export default Banner