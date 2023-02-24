import React from 'react'
import ButtonRounded from '../ButtonRounded'

export default function Hero() {
    return (
        <div className={`h-screen relative bg-black flex flex-col items-center justify-center font-primary text-center text-white`}>
            <div className="relative z-10 px-10">
                <h1 className='text-4xl md:text-7xl mb-5'>Belajar berbagai<br></br>macam bersama</h1>
                <p className='text-lg md:text-xl mb-5'>Kursus Bahasa Inggris, Ngoding, Desain Grafis atau Matematika</p>
                <div className='gap-5 flex flex-col md:flex-row justify-center items-center'>
                    <ButtonRounded text={`Daftar sekarang!`} />
                    <ButtonRounded text={`Daftar sekarang!`} isBorderOnly={true} />
                </div>
            </div>
            <div className="absolute inset-0 z-0">
                <div className="bg-[url('/src/assets/images/hero.png')] bg-cover bg-center bg-no-repeat w-full h-full filter brightness-[0.4]"></div>
            </div>
        </div>


    )
}
