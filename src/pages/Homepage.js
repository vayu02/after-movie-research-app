import React,{useState} from 'react'
import ActorGrid from '../components/artists/ActorGrid';
import CustomRd from '../components/CustomRd';
import Mainlayout from '../components/Mainlayout'
import ShowGrid from '../components/show/ShowGrid';
import {getApi} from '../msc/Configapi'
import { useLastQuery } from '../msc/CustomHook';
import { SearchInpt, RadioInptWrap, SearchBtnWrap } from './Homepage.styles';


const Homepage = () => {

    const [input, setinput] = useLastQuery();
    const [result, setresult] = useState(null);
    const [radioOpt, setradioOPt] = useState('shows');

    const isShow = radioOpt === "shows"

    const chechInput = (ev) => {
        setinput(ev.target.value)
    }

    const doSearch = () => {
        getApi(`/search/${radioOpt}?q=${input}`)
        .then(res => {
            setresult(res);
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
            <SearchInpt type="text" 
            placeholder="Search Movie or Actor"
            onChange={chechInput} 
            value={input} 
            onKeyDown={mapKey} />

            <RadioInptWrap>
                <div>
                    <CustomRd 
                    label="Shows"
                    id="shows-search" 
                    value='shows' 
                    checked={isShow}
                    onChange={onRadChange}/>
                </div>
                <div>
                    <CustomRd 
                    label="Actors"
                    id="actors-search" 
                    value="people" 
                    checked={!isShow} 
                    onChange={onRadChange}/>
                </div>
            </RadioInptWrap>

            <SearchBtnWrap>
                <button 
                type='button' 
                onClick={doSearch}>
                    Search
                </button>
            </SearchBtnWrap>
            {displayResult()}
        </Mainlayout>
        
    )
}

export default Homepage
