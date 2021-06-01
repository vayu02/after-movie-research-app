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

    console.log(show)

    if(isLoad){
        return <div>Getting Data</div>
    }
    if(prob){
        return <div>Error occured : {prob}</div>
    }

    return <div> show page</div>
}

export default Showpage
