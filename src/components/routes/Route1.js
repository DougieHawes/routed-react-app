import React from 'react'

import { Route } from '../utils/Route'

import './style.css'

const Route1 = () => {
    const content =
        <div className='content'>
            <p>content</p>
        </div>

    return (<Route title='Route1' content={content} />)
}

export default Route1
