import React,{useState} from 'react'
import ActorGrid from '../components/artists/ActorGrid';
import Mainlayout from '../components/Mainlayout'
import ShowGrid from '../components/show/ShowGrid';
import {getApi} from '../msc/Configapi'
import { useLastQuery } from '../msc/CustomHook';


const Homepage = () => {

    const [input, setinput] = useLastQuery();
    const [result, setresult] = useState(null);
    const [radioOpt, setradioOPt] = useState('shows');

    const isShow = radioOpt === "shows"

    const chechInput = (ev) => {
        setinput(ev.target.value)
        // console.log(ev.target.value)
    }

    const doSearch = () => {
        getApi(`/search/${radioOpt}?q=${input}`)
        .then(res => {
            setresult(res);
            // console.log(res);
        });
    }

    const mapKey = (ev) =>{
        if(ev.keyCode === 13){
            doSearch()
        }
    }

    const onRadChange = (ev) => {
        setradioOPt(ev.target.value)
    }

    const displayResult = () =>{
        if(result && result.length === 0 ){
            //when user search gibberish and api send no value
            <div>Nothing To Show</div>
        }
        if(result && result.length > 0){
            return result[0].show
            ? <ShowGrid data={result} />
            : <ActorGrid data={result} />
        }
        return null;
    }

    return (
        <Mainlayout>
            <input type="text" 
            placeholder="Search Movie or Actor"
            onChange={chechInput} 
            value={input} 
            onKeyDown={mapKey} />

            <div>
                <label htmlFor='search-show'>
                    Shows 
                    <input id="search-show" type='radio' value='shows' checked={isShow} onChange={onRadChange}  ></input>
                    </label>
                <label htmlFor='actor-search'>
                    Actors 
                    <input id="actor-search" type="radio" value='people' checked={!isShow} onChange={onRadChange} >
                        </input>
                </label>
            </div>

            <button 
            type='button' 
            onClick={doSearch} >Search</button>

            {displayResult()}
        </Mainlayout>
        
    )
}

export default Homepage
