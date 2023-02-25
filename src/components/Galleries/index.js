import React from 'react'
import { ImgHero } from '../../assets/images'

export default function Galleries({ limit, className }) {
    const galleries = [
        {
            img: ImgHero,
            alt: 'hero'
        },
        {
            img: ImgHero,
            alt: 'hero'
        },
        {
            img: ImgHero,
            alt: 'hero'
        },
        {
            img: ImgHero,
            alt: 'hero'
        },
        {
            img: ImgHero,
            alt: 'hero'
        },
        {
            img: ImgHero,
            alt: 'hero'
        },
        {
            img: ImgHero,
            alt: 'hero'
        },
        {
            img: ImgHero,
            alt: 'hero'
        },
        {
            img: ImgHero,
            alt: 'hero'
        },
    ]
    return (
        <div className={`h-fit font-primary p-10 bg-[url("/src/assets/images/bg-palm.png")] bg-cover bg-no-repeat ${className}`}>
            <div className='text-center'>
                <p className='text-primary'>Galeri</p>
                <h1 className='text-4xl font-bold'>Aktivitas kami</h1>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-1 mt-10">
                {galleries.slice(0, limit).map((item, index) => {
                    return (
                        <div key={index} className="aspect-square justify-center items-center flex md:hover:scale-110 transition-all duration-700">
                            <img alt={item.alt} src={item.img} className='object-cover rounded-3xl w-full h-full md:w-72 md:h-72 shadow-md' />
                        </div>
                    )
                })}
            </div>
        </div>

    )
}
