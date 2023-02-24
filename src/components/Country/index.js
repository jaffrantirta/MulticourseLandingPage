import React from 'react'
import { ImgLogo } from '../../assets/images'

export default function Country() {
    return (
        <div className='h-fit md:h-screen font-primary bg-[url("/src/assets/images/bg-country-8.png")] bg-black bg-opacity-20 p-10'>
            <div className='text-center'>
                <p className='text-primary'>Paket</p>
                <h1 className='text-4xl font-bold'>Negara</h1>
                <p>Harga terjangkau dan cepat bisa</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-10'>
                <div className='flex-1 flex bg-white shadow-md p-10 rounded-3xl items-center gap-2'>
                    <img alt='' src={ImgLogo} className='w-16 h-16 bg-cover bg-center bg-no-repeat border-2 rounded-full' />
                    <div>
                        <p className='text-xl font-bold'>USA</p>
                        <p>Belajar bahasa inggris dari nol sampai bisa.</p>
                    </div>
                </div>
                <div className='flex-1 flex bg-white shadow-md p-10 rounded-3xl items-center gap-2'>
                    <img alt='' src={ImgLogo} className='w-16 h-16 bg-cover bg-center bg-no-repeat border-2 rounded-full' />
                    <div>
                        <p className='text-xl font-bold'>USA</p>
                        <p>Belajar bahasa inggris dari nol sampai bisa.</p>
                    </div>
                </div>
                <div className='flex-1 flex bg-white shadow-md p-10 rounded-3xl items-center gap-2'>
                    <img alt='' src={ImgLogo} className='w-16 h-16 bg-cover bg-center bg-no-repeat border-2 rounded-full' />
                    <div>
                        <p className='text-xl font-bold'>USA</p>
                        <p>Belajar bahasa inggris dari nol sampai bisa.</p>
                    </div>
                </div>
                <div className='flex-1 flex bg-white shadow-md p-10 rounded-3xl items-center gap-2'>
                    <img alt='' src={ImgLogo} className='w-16 h-16 bg-cover bg-center bg-no-repeat border-2 rounded-full' />
                    <div>
                        <p className='text-xl font-bold'>USA</p>
                        <p>Belajar bahasa inggris dari nol sampai bisa.</p>
                    </div>
                </div>
                <div className='flex-1 flex bg-white shadow-md p-10 rounded-3xl items-center gap-2'>
                    <img alt='' src={ImgLogo} className='w-16 h-16 bg-cover bg-center bg-no-repeat border-2 rounded-full' />
                    <div>
                        <p className='text-xl font-bold'>USA</p>
                        <p>Belajar bahasa inggris dari nol sampai bisa.</p>
                    </div>
                </div>
                <div className='flex-1 flex bg-white shadow-md p-10 rounded-3xl items-center gap-2'>
                    <img alt='' src={ImgLogo} className='w-16 h-16 bg-cover bg-center bg-no-repeat border-2 rounded-full' />
                    <div>
                        <p className='text-xl font-bold'>USA</p>
                        <p>Belajar bahasa inggris dari nol sampai bisa.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
