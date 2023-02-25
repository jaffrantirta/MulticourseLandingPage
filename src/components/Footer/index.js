import React from 'react'
import { Link } from 'react-router-dom'
import { ImgFb, ImgIg, ImgLinkedin, ImgLogo, ImgTwitter } from '../../assets/images'

export default function Footer() {
    const menus = [
        {
            name: 'Beranda',
            child: [
                {
                    name: 'Beranda',
                    url: '/'
                },
                {
                    name: 'Galeri',
                    url: '/'
                },
            ]
        },
        {
            name: 'Kontak',
            child: [
                {
                    name: 'Daftar',
                    url: '/'
                },
                {
                    name: 'Bantuan',
                    url: '/'
                },
            ]
        },
        {
            name: 'Paket',
            child: [
                {
                    name: 'Kursus Bahasa Inggris',
                    url: '/'
                },
                {
                    name: 'IT/Digital Marketing',
                    url: '/'
                },
                {
                    name: 'Matemaika',
                    url: '/'
                },
            ]
        },
    ]
    const socials = [
        {
            img: ImgFb,
            url: '/',
            name: 'facebook'
        },
        {
            img: ImgIg,
            url: '/',
            name: 'instagram'
        },
        {
            img: ImgLinkedin,
            url: '/',
            name: 'linkedin'
        },
        {
            img: ImgTwitter,
            url: '/',
            name: 'twitter'
        },
    ]
    return (
        <div className='h-fit font-primary text-slate-200'>
            <div className='grid md:flex bg-dark p-10 h-full'>
                <div className='p-10 md:hidden'>
                    <img alt='logo' src={ImgLogo} className='w-full' />
                    <div className='flex gap-2 py-5 w-full justify-center'>
                        {socials.map((itemSocial, indexSocial) => {
                            return <Link className='hover:bg-slate-300 rounded-full p-1' to={itemSocial.url}><img alt={itemSocial.name} className='flex-1' src={itemSocial.img} /></Link>
                        })}
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-10 md:flex md:w-4/6 justify-center md:p-20'>
                    {menus.map((itemPerent, indexPerent) => {
                        return (
                            <div key={indexPerent} className={`flex-1 flex-col gap-2 flex`}>
                                <p className='text-2xl font-bold mb-4'>{itemPerent.name}</p>
                                {itemPerent.child.map((itemChild, indexChild) => {
                                    return <Link className='hover:text-slate-500' key={indexChild} to={itemChild.url}>{itemChild.name}</Link>
                                })}
                            </div>
                        )
                    })}
                </div>
                <div className='w-2/6 hidden md:flex flex-col items-center p-10'>
                    <img alt='logo' src={ImgLogo} className='w-3/4' />
                    <div className='flex gap-2 py-5'>
                        {socials.map((itemSocial, indexSocial) => {
                            return <Link className='hover:bg-slate-300 rounded-full p-1' to={itemSocial.url}><img alt={itemSocial.name} className='flex-1' src={itemSocial.img} /></Link>
                        })}
                    </div>
                </div>
            </div>
            <div className='bg-dark2 p-10 text-center'>
                <p>©{new Date().getFullYear()} Multicouse International Journey</p>
            </div>
        </div>
    )
}
