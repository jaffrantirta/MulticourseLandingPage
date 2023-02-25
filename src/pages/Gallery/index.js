import React from 'react'
import { Footer, Galleries, Navbar } from '../../components'

export default function Gallery() {
    return (
        <div>
            <Navbar className={`text-black`} btnMobileWhiteColor={`text-black`} />
            <div id='hero-section'>
                <Galleries className={`pt-28`} />
            </div>
            <Footer />
        </div>
    )
}
