import React from 'react'
import AppName from './AppName'
import Nav from './Nav'

const Mainlayout = ({children}) => {
    return (
        <div>
            <AppName 
            title="After Movie Research" 
            subtitle="Finding for some extra info of your fav actor or show" />
            <Nav />
            {children}
        </div>
    )
}

export default Mainlayout
