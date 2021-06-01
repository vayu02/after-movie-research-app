import React from 'react'
import Casts from '../components/show/Casts'
import Details from '../components/show/Details'
import Seasons from '../components/show/Seasons'
import ShowMain from '../components/show/ShowMain'
import {useParams} from 'react-router-dom'
import { ShowPageWrapper } from './Show.Styles'
import { Info } from './Show.Styles'
import { useShow } from '../msc/CustomHook'

const Showpage = () => {
    const {id} = useParams()
    const {show, isLoad, prob} = useShow(id)
    
    if(isLoad){
        return <div>Getting Data</div>
    }
    if(prob){
        return <div>Error occured : {prob}</div>
    }

    return (
        <ShowPageWrapper> 
        <ShowMain image={show.image} name={show.name} rating={show.rating} summary={show.summary} tags={show.genres} />
        <div>
            <h2>Details</h2>
            <Details status={show.status} network={show.network} premiered={show.premiered} />
        </div>

        <Info>
            <h2>Seasons</h2>
            <Seasons seasons={show._embedded.seasons} />
        </Info>

        <div>
            <h2>Casts</h2>
            <Casts cast={show._embedded.cast} />
        </div>
        </ShowPageWrapper>
    )
}

export default Showpage
