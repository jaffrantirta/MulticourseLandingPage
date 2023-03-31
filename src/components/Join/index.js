import React, { useEffect, useRef, useState } from 'react'
import { ImgJoin } from '../../assets/images'
import ButtonRounded from '../ButtonRounded'

export default function Join() {
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
    return (
        <div ref={sectionRef} className='grid grid-cols-1 md:grid-cols-2 font-primary h-screen bg-secondary bg-opacity-10 text-center md:text-left px-5'>
            <div className='flex flex-col justify-center p-10 gap-5'>
                <p className='text-primary'>Yuk daftar!</p>
                <h1 className={`text-3xl md:text-5xl font-bold transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}>Daftar sekarang juga jangan sampai kelewatan.</h1>
                <p className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}>Bisa tanya - tanya dulu loh. Yuk hubungi kami!</p>
                <ButtonRounded text={`Daftar!`} customStyle={`md:w-1/2 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`} />
            </div>
            <div className='flex flex-col justify-end'>
                <img alt='' src={ImgJoin} className='w-3/4' />
            </div>
        </div>
    )
}
