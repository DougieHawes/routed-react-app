import React from 'react'

import { Route } from '../utils/Route'

import './style.css'

const Route2 = () => {
    const content =
        <div className='content'>
            <p>content</p>
        </div>

    return (<Route title='Route2' content={content} />)
}

export default Route2
