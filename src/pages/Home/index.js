import React from 'react'
import { Country, Footer, Galleries, Hero, Join, Navbar, Package } from '../../components'

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Package />
            <Country />
            <Join />
            <Galleries limit={3} />
            <Footer />
        </div>

    )
}
