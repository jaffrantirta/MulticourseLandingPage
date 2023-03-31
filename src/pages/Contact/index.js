import React, { useEffect, useRef, useState } from 'react'
import { ImgFb, ImgIg, ImgWa } from '../../assets'
import { FloatingButton, Footer, Navbar } from '../../components'

export default function Contact() {
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

    const socmed = (title, img) => {
        const arr = ['100', '200', '300', '500', '700', '1000'];
        const randomIndex = Math.floor(Math.random() * arr.length);
        const duration = arr[randomIndex];
        return (
            <div className={`flex gap-3 w-full transition-all duration-${duration} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}>
                <img alt='' src={img} className='w-10 h-10' />
                <p className='w-3/4 self-center text-sm md:text-lg'>{title}</p>
            </div>
        )
    }
    return (
        <div>
            <Navbar />
            <div className='pt-28 p-5 bg-[url("/src/assets/images/bg-nature-2.png")] object-cover object-center font-primary bg-secondary h-fit md:h-screen flex justify-center items-center'>
                <div className='bg-white rounded-3xl shadow-2xl w-3/4 h-4/6 grid md:grid-cols-2 grid-cols-1'>
                    <div className='flex justify-center items-center p-5'>
                        <iframe title='map' className='md:w-3/4 md:h-3/4 w-full h-full rounded-3xl shadow-md' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.095004527586!2d115.17729341466921!3d-8.58686399382834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2391411f3b559%3A0x4003c9e9b3cebedc!2sMulticourse%20International%20Journey!5e0!3m2!1sen!2sid!4v1677662581143!5m2!1sen!2sid"></iframe>
                    </div>
                    <div ref={sectionRef} className='flex justify-center md:justify-start items-center'>
                        <div className='w-full'>
                            <p className={`text-xl md:text-3xl font-bold text-center md:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}>Kontak kami</p>
                            <div className='grid gap-3 p-10'>
                                {socmed('+62 81 353781440', ImgWa)}
                                {socmed('Multicouse International', ImgFb)}
                                {socmed('@multicouser', ImgIg)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FloatingButton />
            <Footer />
        </div>
    )
}
