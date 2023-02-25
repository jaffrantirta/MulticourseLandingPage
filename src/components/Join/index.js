import React from 'react'
import { ImgJoin } from '../../assets/images'
import ButtonRounded from '../ButtonRounded'

export default function Join() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 font-primary h-screen bg-secondary bg-opacity-10 text-center md:text-left px-5'>
            <div className='flex flex-col justify-center p-10 gap-5'>
                <p className='text-primary'>Yuk daftar!</p>
                <h1 className='text-3xl md:text-5xl font-bold'>Daftar sekarang juga jangan sampai kelewatan.</h1>
                <p>Bisa tanya - tanya dulu loh. Yuk hubungi kami!</p>
                <ButtonRounded text={`Daftar!`} customStyle={`md:w-1/2`} />
            </div>
            <div className='flex flex-col justify-end'>
                <img alt='' src={ImgJoin} className='w-3/4' />
            </div>
        </div>
    )
}
