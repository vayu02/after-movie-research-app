import React,{useState} from 'react'
import Mainlayout from '../components/Mainlayout'
import {getApi} from '../msc/Configapi'


const Homepage = () => {

    const [input, setinput] = useState('');
    const [result, setresult] = useState(null);
    const chechInput = (ev) => {
        setinput(ev.target.value)
        // console.log(ev.target.value)
    }

    const doSearch = () => {
        getApi(`/search/shows?q=${input}`)
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

    const displayResult = () =>{
        if(result && result.length === 0 ){
            //when user search gibberish and api send no value
            <div>Nothing To Show</div>
        }
        if(result && result.length > 0){
            return <div>{result.map((rslt)=><div key={rslt.show.id}>{rslt.show.name}</div>)}</div>
        }
        return null;
    }

    return (
        <Mainlayout>
            <input type="text" onChange={chechInput} value={input} onKeyDown={mapKey} />
            <button type='button' onClick={doSearch} >Search</button>
            {displayResult()}
        </Mainlayout>
        
    )
}

export default Homepage
