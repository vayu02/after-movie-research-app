import{useReducer, useEffect, useState} from 'react'
import { getApi } from './Configapi';

function showReducer(prevState, action ){
    switch(action.type){
        case 'ADD'  :{
            return[...prevState, action.showId]
        }
        case 'REMOVE':{
            return prevState.filter((showId)=> showId !== action.showId)
        }
        default: return prevState;
    }
}
function usePersistedReducer(reducer, initialState, key){
    const[state, dispatch] = useReducer(reducer, initialState, (initial)=>{
        const persisted = localStorage.getItem(key);
        return persisted ? JSON.parse(persisted) : initial;
    })

    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(state))}, [state, key])
    return [state, dispatch]
}

export function useShows(key = 'shows'){
    return usePersistedReducer(showReducer, [], key)
}

export function useLastQuery(key = 'lastQuery'){
    const [input, setinput] =   useState(()=>{
        const persisted = sessionStorage.getItem(key);
        return persisted ? JSON.parse(persisted) : "";
    });
    const SetPersistedInput = (newState) => {
        setinput(newState);
        sessionStorage.setItem(key, JSON.stringify(newState))
    } 
    return [input, SetPersistedInput]
}

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

export function useShow(showId){
const [state, dispatch] = useReducer(reducer, {
    show : null, 
    isLoad : true,
    prob : null,
})
    
    useEffect(() => {
        let isMounted = true;
        getApi(`/shows/${showId}?embed[]=seasons&embed[]=cast`).then(res => {
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
    }, [showId])
    return state;
}