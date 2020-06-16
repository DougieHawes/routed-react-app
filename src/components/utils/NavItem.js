import React from 'react'

import { Zoom } from 'react-reveal'
import { Link } from 'react-router-dom'

import './style.css'

export const NavItem = ({ id, delay, to, text }) =>
    <Zoom delay={delay} duration={700}>
        <div key={id} className='nav-item'>
            <Link to={to}>
                <p>{text}</p>
            </Link>
        </div>
    </Zoom>
