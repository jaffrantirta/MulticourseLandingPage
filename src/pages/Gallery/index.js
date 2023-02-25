import React, { useEffect } from 'react'
import { Footer, Galleries, Navbar } from '../../components'

export default function Gallery() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
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
