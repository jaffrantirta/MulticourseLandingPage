import React, { useEffect, useRef, useState } from 'react'

export default function Card({ title, subtitle, image, duration, from, to }) {
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
        <div ref={sectionRef} className={`flex-1 flex bg-white shadow-md p-10 rounded-3xl items-center gap-2`}>
            {/* <img alt={title} src={image} className={`w-10 h-10 bg-cover bg-center bg-no-repeat border-2 rounded-full transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`} /> */}
            <div>
                <p className={`text-xl font-extrabold transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}>{title}</p>
                <p className={`transition-all italic duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}>{subtitle}</p>
            </div>
        </div>
    )
}
