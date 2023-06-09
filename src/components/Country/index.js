import React from 'react'
import { ImgLogo } from '../../assets/images'
import Card from '../Card'

export default function Country() {
    return (
        <div className='h-fit font-primary bg-[url("/src/assets/images/bg-world-op-30.png")] bg-black bg-opacity-20 p-10'>
            <div className='text-center'>
                <p className='text-primary'>Paket</p>
                <h1 className='text-4xl font-bold'>Internships International and Study</h1>
                {/* <p>Harga terjangkau dan cepat bisa</p> */}
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 my-10'>
                <Card duration={'1000'} from={'translate-y-24'} to={'translate-y-0'} title={'USA (J1 Internship)'} subtitle={'Have an Internship opportunity within 4-5 stars hotel and country clubs'} image={ImgLogo} />
                <Card duration={'700'} from={'translate-x-24'} to={'translate-x-0'} title={'UAE Internship'} subtitle={'Discover the culture and a change for a full time position'} image={ImgLogo} />
                <Card duration={'500'} from={'-translate-y-24'} to={'translate-y-0'} title={'Study Hospitality in Switzerland and Internship for 2 years'} subtitle={''} image={ImgLogo} />
            </div>

            <hr></hr>

            <div className='text-center mt-10'>
                <p className='text-primary'>Paket</p>
                <h1 className='text-4xl font-bold'>Variety of Courses with Certificates</h1>
                {/* <p>Harga terjangkau dan cepat bisa</p> */}
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-10'>
                <Card duration={'1000'} from={'translate-y-24'} to={'translate-y-0'} title={'English Language'} subtitle={'IELTS, TOEFL, English for General Practice, English for Sepaking Encouragement and English for Workplace'} image={ImgLogo} />
                <Card duration={'700'} from={'translate-x-24'} to={'translate-x-0'} title={'Japanese Language'} subtitle={'Basic N5 & Pre Intermediate N4, Intensive Class, Hiragana & Katakana, JLPT, NAT-TEST, J-TEST N5'} image={ImgLogo} />
                <Card duration={'500'} from={'-translate-y-24'} to={'translate-y-0'} title={'Barista'} subtitle={'Deep Coffee Knowledge and Cupping, Roasting and Steaming Process, Calibration & Latte Art, Live Practice and Training, Career Pathway.'} image={ImgLogo} />
                <Card duration={'1000'} from={'-translate-x-24'} to={'translate-x-0'} title={'IT & Social Media'} subtitle={'Basic HTML, CSS, CSS Layouting, VCS, Javascript, Front-end Web, Social Media Design, Video Editing & Communication.'} image={ImgLogo} />
                <Card duration={'300'} from={'translate-y-24'} to={'translate-y-0'} title={'Mathematics'} subtitle={'Math for Elementary, Junior High School (SMP) and Senior High School (SMA)'} image={ImgLogo} />
            </div>
        </div>
    )
}
