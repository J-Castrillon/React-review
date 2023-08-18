import React from 'react'
import { HeaderNav } from './components/HeaderNav'
import { Footer } from './components/Footer'
import { Outlet } from 'react-router-dom'

export const MainPortfolio = () => {
    return (
        <div id='body-portfolio' className='layout-'>
            <HeaderNav />

            <main id='portfolio-outlet'>
                <Outlet /> {/* Salida de los elementos del nav */}
            </main>

            <Footer />
        </div>
    )
}
