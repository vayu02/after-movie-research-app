import React from 'react'
import{Link} from 'react-router-dom'
import { Star } from '../Styled';
import { StyledCardShow } from './StyledCardShow';

const ShowCard = ({ id, image, name, summary, onStarClick, isStarred }) => {

    const summaryAsText = summary
    ? `${summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, "")}...`
    : 'No description';
    return (
    <StyledCardShow>
        <div className="img-wrap">
            <img src={image} alt="show"/>
        </div>
        <h1>{name}</h1>
        <p>{summaryAsText}</p>
        <div className='btns'>
            <Link to={`/show/${id}`}>Read more</Link>
            <button type="button" onClick={onStarClick}><Star active={isStarred}/> </button>
        </div>
    </StyledCardShow>
);
};


export default ShowCard
