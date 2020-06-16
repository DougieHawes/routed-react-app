import React from 'react'

import { Route } from '../utils/Route'

import './style.css'

const Route4 = () => {
    const content =
        <div className='content'>
            <p>content</p>
        </div>

    return (<Route title='Route4' content={content} />)
}

export default Route4
