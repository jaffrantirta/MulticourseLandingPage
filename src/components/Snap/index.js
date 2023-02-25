import { ChevronRightIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import { SvgGlobeFeature } from '../../assets'
import ButtonRounded from '../ButtonRounded'

export default function Snap() {
    const DATA_FEATURES = [
        {
            title: 'The Most Affordable Programs',
            desc: 'We guarantee that the programs provided by Konsultan Visa are wallet-friendly to all with discretion.'
        },
        {
            title: 'All-in-one Service',
            desc: 'We can solve any kind of problems before, during, and after your process with us in terms of visa and the selected program.'
        },
        {
            title: 'Client Centered (CC)',
            desc: 'We focus on the client’s issues, and serve with accountable and prompt solutions we could.'
        },
        {
            title: '$0 Consultation Fee',
            desc: 'No upfront fee for consulting with us! Everything is free before proceeding to the desired program.'
        },
    ]
    const [deg, setDeg] = useState(0)
    const [index, setIndex] = useState(0)
    const handleActive = () => {
        let x = deg + 90
        setDeg(x)
        setIndex(i => {
            if (i === DATA_FEATURES.length - 1) {
                return i = 0
            } else {
                return i + 1
            }
        })
    }
    return (
        <div className="content-center font-primary h-screen md:h-screen pt-10 dark:from-dark-1 dark:to-dark-2 bg-[url('/src/assets/images/bg-nature.png')] bg-secondary bg-opacity-10">
            <div className='h-1/6 text-center grid content-center'>
                <h1 className='font-extrabold text-4xl'>Why Us?</h1>
            </div>
            <div className="h-5/6">
                <div className='grid content-center md:h-2/5 h-4/5'>
                    <div className='grid justify-center'>
                        <div className='font-primary text-center w-screen grid justify-center'>
                            <h1 className='font-extrabold text-2xl w-screen'>{DATA_FEATURES[index].title}</h1>
                            <p className='md:px-40 lg:px-72 px-10'>{DATA_FEATURES[index].desc}</p>
                        </div>
                        <div className='text-center'>
                            <ButtonRounded onClick={() => handleActive()} text={<ChevronRightIcon className='h-7' />} />
                        </div>
                    </div>
                </div>
                <div className='w-screen md:h-3/5 h-1/5 justify-center grid overflow-hidden'>
                    <img alt='' style={{
                        transform: `rotate(${deg}deg)`,
                    }} src={SvgGlobeFeature} className='duration-1000 w-screen h-full transition' />
                </div>
            </div>
        </div>
    )
}
