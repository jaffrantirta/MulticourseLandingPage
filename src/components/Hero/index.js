import React, { useEffect, useRef, useState } from 'react'
import ButtonRounded from '../ButtonRounded'

export default function Hero() {
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
        <div ref={sectionRef} id='hero-section' className={`h-screen relative bg-black flex flex-col items-center justify-center font-primary text-center text-white`}>
            <div className="relative z-10 px-10">
                <h1 className={`text-2xl md:text-7xl mb-5 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}>Learning the unique <br></br>and authentic subject with us</h1>
                <p className={`text-sm md:text-xl mb-5 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}>English Language, Japanese Language, Coding, Multimedia, Graphic Design, and Math. </p>
                <div className={`gap-5 flex flex-col md:flex-row justify-center items-center transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}>
                    <ButtonRounded text={`Your choice`} />
                    <ButtonRounded text={`Register Now!`} isBorderOnly={true} />
                </div>
            </div>
            <div className="absolute inset-0 z-0">
                <div className="bg-[url('/src/assets/images/hero.png')] bg-cover bg-center bg-no-repeat w-full h-full filter brightness-[0.4]"></div>
            </div>
        </div>


    )
}
