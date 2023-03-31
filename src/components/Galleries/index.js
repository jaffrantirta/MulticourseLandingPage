import React, { useEffect, useRef, useState } from 'react'
import { ImgHero } from '../../assets/images'

export default function Galleries({ limit, className }) {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        let node = sectionRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.1,
            }
        );

        if (node) {
            observer.observe(node);
        }

        return () => {
            if (node) {
                observer.unobserve(node);
                node = null;
            }
        };
    }, [sectionRef]);
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
        <div ref={sectionRef} className={`h-fit font-primary p-10 bg-[url("/src/assets/images/bg-palm.png")] bg-cover bg-no-repeat ${className}`}>
            <div className='text-center'>
                <p className='text-primary'>Galeri</p>
                <h1 className='text-4xl font-bold'>Aktivitas kami</h1>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-1 mt-10">
                {galleries.slice(0, limit).map((item, index) => {
                    const arr = ['100', '200', '300', '500', '700', '1000'];
                    const randomIndex = Math.floor(Math.random() * arr.length);
                    const duration = arr[randomIndex];
                    return (
                        <div key={index} className={`aspect-square justify-center items-center flex md:hover:scale-110 transition-all duration-${duration} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}>
                            <img alt={item.alt} src={item.img} className='object-cover rounded-3xl w-full h-full md:w-72 md:h-72 shadow-md' />
                        </div>
                    )
                })}
            </div>
        </div>

    )
}
