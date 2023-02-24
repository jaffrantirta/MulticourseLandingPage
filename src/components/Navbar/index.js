import React, { useEffect, useState } from 'react'
import { ImgLogo } from '../../assets/images'
import ButtonRounded from '../ButtonRounded'

export default function Navbar({ className }) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollDirection, setScrollDirection] = useState(null);
    const [hasPassedHero, setHasPassedHero] = useState(false);

    useEffect(() => {
        let lastScrollY = window.pageYOffset;

        const updateScrollDirection = () => {
            const scrollY = window.pageYOffset;
            const direction = scrollY > lastScrollY ? "down" : "up";
            if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
                setScrollDirection(direction);
            }
            lastScrollY = scrollY > 0 ? scrollY : 0;
        };

        const updateHasPassedHero = () => {
            const heroSection = document.getElementById("hero-section");
            if (heroSection && window.pageYOffset >= heroSection.offsetTop + heroSection.offsetHeight) {
                setHasPassedHero(true);
            } else {
                setHasPassedHero(false);
            }
        };

        window.addEventListener("scroll", updateScrollDirection);
        window.addEventListener("scroll", updateHasPassedHero);

        return () => {
            window.removeEventListener("scroll", updateScrollDirection);
            window.removeEventListener("scroll", updateHasPassedHero);
        };
    }, [scrollDirection]);

    return (
        <nav className={`${hasPassedHero ? "bg-white text-primary" : "bg-transparent text-white"} ${scrollDirection === "down" ? "-top-32" : "top-0"} transition-all duration-500 z-30 fixed inset-0 bg-transparent p-5 px-10 ${isOpen ? 'bg-white' : 'bg-transparent'} font-primary flex h-24 justify-between items-center ${className}`}>
            <img
                alt="logo"
                src={ImgLogo}
                className="w-16 md:w-24 h-auto shadow-lg"
            />
            <div className="hidden md:flex items-center gap-5">
                <div className="grid grid-cols-4 gap-1 text-center text-lg">
                    <p>Beranda</p>
                    <p>Paket</p>
                    <p>Galeri</p>
                    <p>Kontak</p>
                </div>
                <div>
                    <ButtonRounded text={`Daftar sekarang!`} />
                </div>
            </div>
            <div className={`transition-all md:hidden p-3 rounded-xl hover:border-primary hover:border-2 ${isOpen ? 'bg-primary' : 'bg-transparent'}`}>
                <button
                    className={`block hover:text-gray-200 focus:text-gray-200 focus:outline-none ${hasPassedHero ? "text-primary" : "text-white"} ${isOpen ? 'text-white' : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg className='h-6 w-6 fill-current' viewBox='0 0 24 24'>
                        <path
                            className={`${isOpen ? 'hidden' : 'inline-flex'}`}
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 5H4v2h16v-2z'
                        />
                        <path
                            className={`${isOpen ? 'inline-flex' : 'hidden'}`}
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M5 4h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm5 6v2H6v-2h4zm0 4v2H6v-2h4zm6-4v2h-4v-2h4zm0 4v2h-4v-2h4z'
                        />
                    </svg>
                </button>
                <div className={`transition-all duration-700 ${isOpen ? 'block bg-white text-primary' : 'hidden'} absolute p-5 w-full top-full right-0 md:relative md:flex md:items-center md:gap-5 md:pt-5 md:pb-10 md:w-auto`}>
                    <div className='grid grid-cols-1 gap-1 text-center text-lg'>
                        <p>Beranda</p>
                        <p>Paket</p>
                        <p>Galeri</p>
                        <p>Kontak</p>
                    </div>
                    <div className='pt-5 justify-center flex'>
                        <ButtonRounded text={`Daftar sekarang!`} />
                    </div>
                </div>
            </div>
        </nav>
    )
}