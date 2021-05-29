import React from 'react'
import {Link} from 'react-router-dom'

const URLS = [
    {to: '/', text: "Home"},
    {to: '/starred', text: "Starred"}
]

const Nav = () => {
    return (
        <div>
            <ul>
                {
                    URLS.map((URL)=><li key={URL.to}><Link to={URL.to}>{URL.text}</Link></li>)
                }
            </ul>
        </div>
    )
}

export default Nav
