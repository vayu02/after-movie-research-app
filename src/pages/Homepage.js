import React,{useState} from 'react'
import Mainlayout from '../components/Mainlayout'


const Homepage = () => {

    const [input, setinput] = useState('');
    const chechInput = (ev) => {
        setinput(ev.target.value)
        // console.log(ev.target.value)
    }

    const doSearch = () => {
        //https://api.tvmaze.com/search/shows?q=girls
        fetch(`https://api.tvmaze.com/search/shows?q=${input}`).then(res => res.json()).then(res =>{
            console.log(res);
        })
    }

    const mapKey = (ev) =>{
        if(ev.keyCode === 13){
            doSearch()
        }
    }

    return (
        <Mainlayout>
            <input type="text" onChange={chechInput} value={input} onKeyDown={mapKey} />
            <button type='button' onClick={doSearch} >Search</button>
            
        </Mainlayout>
        
    )
}

export default Homepage
