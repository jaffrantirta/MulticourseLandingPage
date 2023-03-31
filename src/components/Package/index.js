import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ImgBusiness, ImgTourist } from '../../assets/images'

export default function Package() {
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
        <div ref={sectionRef} className='grid grid-cols-1 md:grid-cols-2 h-screen font-primary text-white text-center'>
            <Link to={'/class/with-mentor'}>
                <div className='relative w-full h-full overflow-hidden'>
                    <img class="absolute w-full h-full object-cover transition duration-700 transform hover:scale-110 brightness-50" src={ImgBusiness} alt="" />
                    <h1 className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-extrabold transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}>Class with mentor</h1>
                </div>
            </Link>
            <Link to={'/class/internship-study'}>
                <div className='relative w-full h-full overflow-hidden'>
                    <img class="absolute w-full h-full object-cover transition duration-700 transform hover:scale-110 brightness-50" src={ImgTourist} alt="" />
                    <h1 className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-extrabold transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}>International Internships and Study</h1>
                </div>
            </Link>
        </div>


    )
}
