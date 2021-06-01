import React from 'react'
import { useLocation } from 'react-router'
import { NavLs, LinkStyle } from './Navs.styles'

const URLS = [
    {to: '/', text: "Home"},
    {to: '/starred', text: "Starred"}
]

const Nav = () => {
    const location = useLocation()
    return (
        <div>
            <NavLs>
                {
                    URLS.map((URL)=><li key={URL.to}><LinkStyle className={URL.to === location.pathname ? 'active' : ''} to={URL.to}>{URL.text}</LinkStyle></li>)
                }
            </NavLs>
        </div>
    )
}

export default Nav
