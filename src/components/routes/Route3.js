import React from 'react'

import { Route } from '../utils/Route'

import './style.css'

const Route3 = () => {
    const content =
        <div className='content'>
            <p>content</p>
        </div>

    return (<Route title='Route3' content={content} />)
}

export default Route3
