import React from 'react'

import { Fade } from 'react-reveal'

import './style.css'

export const Route = ({ title, content }) =>
    <Fade>
        <div className='route'>
            <h2>{title}</h2>
            <div className='route-content'>
                {content}
            </div>
        </div>
    </Fade>
