import React from 'react'
import { Country, Galleries, Hero, Join, Navbar, Package } from '../../components'

export default function Home() {
    return (
        <div className="relative">
            <Navbar className="" />
            <Hero />
            <Package />
            <Country />
            <Join />
            <Galleries limit={3} />
        </div>

    )
}
