import React, { useState } from 'react'

import { Fade } from 'react-reveal'

import { NavItem } from '../utils/NavItem'

import './style.css'

const Navbar = () => {
    const [open, toggleOpen] = useState(true)

    const navbarToggle = () => {
        toggleOpen(!open)
    }

    const navItems = [
        {
            id: 1,
            delay: 700,
            to: '/route1',
            text: 'Route1'
        },
        {
            id: 2,
            delay: 900,
            to: '/route2',
            text: 'Route2'
        },
        {
            id: 3,
            delay: 1100,
            to: '/route3',
            text: 'Route3'
        },
        {
            id: 4,
            delay: 1300,
            to: '/route4',
            text: 'Route4'
        },
    ]

    return (
        <Fade left>
            <div className='navbar'>
                <div className='navbar-title'>
                    <h1 onClick={navbarToggle}>*navbar*</h1>
                </div>
                {
                    open &&
                    <div className='nav-links'>
                        {
                            navItems.map(
                                item => <NavItem
                                    key={item.id}
                                    delay={item.delay}
                                    to={item.to}
                                    text={item.text} />
                            )
                        }
                    </div>
                }
            </div>
        </Fade>
    )
}

export default Navbar
