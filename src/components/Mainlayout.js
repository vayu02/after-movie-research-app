import React from 'react'
import AppName from './AppName'
import Nav from './Nav'

const Mainlayout = ({children}) => {
    return (
        <div>
            <AppName 
            title="After Movie Research" 
            subtitle="Finding some Extra Info of your Fav Actor or Show" />
            <Nav />
            {children}
        </div>
    )
}

export default Mainlayout
