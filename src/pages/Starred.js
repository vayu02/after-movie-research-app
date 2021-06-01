import React,{useEffect, useState} from 'react'
import Mainlayout from '../components/Mainlayout'
import {useShows} from '../msc/CustomHook'
import {getApi} from '../msc/Configapi'
import ShowGrid from '../components/show/ShowGrid'
const Starred = () => {
        const [starred] = useShows()
        const [show, setShows] = useState(null);
        const [isloading, setisLoading] = useState(true);
        const [error, setError] = useState(null);

        useEffect(() => {
            if(starred && starred.length > 0){
                const promise = starred.map(showId => getApi(`/shows/${showId}`))
                Promise.all(promise)
                .then(apiData => apiData.map(show => ({show})))
                .then(results =>{
                    setShows(results)
                    setisLoading(false)
                }).catch(err => {
                    setError(err.message);
                    setisLoading(false);
                })
            }else{
                setisLoading(false)
            }
        }, [starred])
    return (
        <Mainlayout >
            { isloading && <div>Shows are Loading</div>}
            {error && <div>Error occured: {error} </div>}
            {isloading && !show && <div>No Shows were added</div>}
            {!isloading && !error && show && <ShowGrid data={show}></ShowGrid>}
        </Mainlayout>
    )
}

export default Starred
