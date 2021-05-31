import React from 'react'
import ActorCard from './ActorCard'
import IMAGE_NOT_FOUND from '../../images/not-found.png'
import { DivLay } from '../Styled'

const ActorGrid = ({data}) => {
    return (
        <DivLay>
            {
                data.map(({person}) => 
                <ActorCard key={person.id} 
                name={person.name} 
                country={person.counrty ? person.counrty.name : null}
                summary={person.summary}
                birthday={person.birthday}
                deathday={person.deathday}
                gender={person.gener}
                image={person.image ? person.image.medium :IMAGE_NOT_FOUND } 
                />)
            }
        </DivLay>
    
    )}

export default ActorGrid
