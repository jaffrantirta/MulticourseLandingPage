import React from 'react'
import { Country, Hero, Join, Navbar, Package } from '../../components'

export default function Home() {
    return (
        <div className="relative">
            <Navbar className="" />
            <Hero />
            <Package />
            <Country />
            <Join />
        </div>

    )
}
