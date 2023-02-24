import React from 'react'
import { ImgBusiness, ImgTourist } from '../../assets/images'

export default function Package() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 h-screen font-primary text-white text-center'>
            <div className='relative w-full h-full overflow-hidden'>
                <img class="absolute w-full h-full object-cover transition duration-700 transform hover:scale-110 brightness-50" src={ImgBusiness} alt="" />
                <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-extrabold'>Class with mentor</h1>
            </div>
            <div className='relative w-full h-full overflow-hidden'>
                <img class="absolute w-full h-full object-cover transition duration-700 transform hover:scale-110 brightness-50" src={ImgTourist} alt="" />
                <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-extrabold'>International Internship and Study</h1>
            </div>
        </div>


    )
}
