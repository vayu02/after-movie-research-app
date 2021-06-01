import React from 'react'
import { TitleWrap } from './AppName.style'

const AppName = ({title, subtitle}) => {
    return (
        <TitleWrap>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </TitleWrap>
    )
}

export default AppName
