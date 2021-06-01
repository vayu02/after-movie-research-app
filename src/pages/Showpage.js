import Casts from '../components/show/Casts'
import Details from '../components/show/Details'
import Seasons from '../components/show/Seasons'
import ShowMain from '../components/show/ShowMain'
import React, {useEffect, useReducer} from 'react'
import {useParams} from 'react-router-dom'
import { getApi } from '../msc/Configapi'

const reducer = (prevState, action) =>{
    switch(action.type){
        case 'SUCESS_FETCH':{
            return{ isLoad:false, prob:null, show: action.show}
        }
        case 'FAILED_FETCH' : {
            return{...prevState, ifLoad:false, error: action.error}
        }
        default: return prevState
    }
}

const initialState = {
    show : null, 
    isLoad : true,
    prob : null,
}

const Showpage = () => {
    const {id} = useParams()
    const [{show, isLoad, prob}, dispatch] = useReducer(reducer, initialState)
    
    useEffect(() => {
        let isMounted = true;
        getApi(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(res => {
            if(isMounted){
                dispatch({type: 'SUCESS_FETCH', show: res})
            }
        }).catch(err => {
            if(isMounted){
                dispatch({type: 'FAILED_FETCH', error: err.message})
            }
        })
        return () => {
            isMounted = false;
        }
    }, [id])

    if(isLoad){
        return <div>Getting Data</div>
    }
    if(prob){
        return <div>Error occured : {prob}</div>
    }

    return <div> 
        <ShowMain image={show.image} name={show.name} rating={show.rating} summary={show.summary} tags={show.genres} />
        <div>
            <h2>Details</h2>
            <Details status={show.status} network={show.network} premiered={show.premiered} />
        </div>

        <div>
            <h2>Seasons</h2>
            <Seasons seasons={show._embedded.seasons} />
        </div>

        <div>
            <h2>Casts</h2>
            <Casts cast={show._embedded.cast} />
        </div>
        
        
        </div>
}

export default Showpage
