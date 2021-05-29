import React from 'react'
import {Link} from 'react-router-dom'



const Links = [
    {to: '/', text: "Home"},
    {to: '/starred', text: "Starred"},
]

const Nav = () => {
    return (
        <div>
            <ul>
                {
                    Links.map((link)=><li><Link key={link.to} to={Link.to}>{link.text}</Link></li>)
                }
            </ul>
        </div>
    )
}

export default Nav
