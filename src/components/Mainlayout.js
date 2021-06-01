import React from 'react'
import AppName from './AppName'
import Nav from './Nav'

const Mainlayout = ({children}) => {
    return (
        <div>
            <AppName 
            title="After Movie Research" 
            subtitle="FInding for some extra information of your fav actor or show" />
            <Nav />
            {children}
        </div>
    )
}

export default Mainlayout
