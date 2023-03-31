import React, { useEffect, useRef, useState } from 'react'
import { ImgTourist } from '../../assets/images'
import { FloatingButton, Footer, Navbar, Snap } from '../../components'

export default function Courses() {
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
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Navbar />
            <div ref={sectionRef} id='hero-section'>
                <div className='font-primary h-fit md:h-screen bg-secondary pt-32'>
                    <h1 className={`text-center text-5xl font-extrabold transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}>Classes with mentor</h1>
                    <div className='w-full h-1/2'>
                        <img alt='' src={ImgTourist} className='top-0 left-0 w-full h-full object-cover' />
                    </div>
                    <div className='grid md:grid-cols-2 grid-cols-1 p-10 '>
                        <div className='flex justify-center items-center md:px-64 text-center'>
                            <p className={`text-3xl mb-5 md:mb-0 md:text-5xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}>Kursus dengan mentor</p>
                        </div>
                        <div>
                            <p className={`text-center md:text-left transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Snap />
            <FloatingButton />
            <Footer />
        </div>
    )
}
