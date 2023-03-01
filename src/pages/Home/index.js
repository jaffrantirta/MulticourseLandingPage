import React, { useEffect } from 'react'
import { Country, FloatingButton, Footer, Galleries, Hero, Join, Navbar, Package } from '../../components'

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Navbar />
            <Hero />
            <Package />
            <Country />
            <Join />
            <Galleries limit={3} />
            <FloatingButton />
            <Footer />
        </div>

    )
}
