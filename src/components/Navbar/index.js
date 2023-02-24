import React from 'react'
import { ImgLogo } from '../../assets/images'
import ButtonRounded from '../ButtonRounded'

export default function Navbar({ className }) {
    return (
        <div className={`fixed inset-0 bg-transparent z-50 p-5 px-10 text-white font-primary flex h-32 justify-between items-center ${className}`}>
            <img alt='logo' src={ImgLogo} className='w-15 h-fit shadow-lg' />
            <div className='flex items-center gap-5'>
                <div className='grid grid-cols-4 gap-1 text-center font-bold text-lg'>
                    <p>Beranda</p>
                    <p>Paket</p>
                    <p>Galeri</p>
                    <p>Kontak</p>
                </div>
                <div>
                    <ButtonRounded text={`Daftar sekarang!`} />
                </div>
            </div>
        </div>
    )
}
