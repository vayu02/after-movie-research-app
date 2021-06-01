import React from 'react'
import IMG_PLACEHOLDER from '../../images/not-found.png'
import { CastLs } from './Cast.Styles';

const Casts = ({ cast }) => {
    return (
    <CastLs>
    {cast.map(({ person, character, voice }, key) => (
        <div key={key} className='cast-itm'>
        <div className="pic-wrapp"> 
            <img
            src={person.image ? person.image.medium : IMG_PLACEHOLDER}
            alt="cast-person"
            />
        </div>
        <div className='actor'>
            <span className='bold' >{person.name}</span>  | {character.name} {voice ? '| Voice' : ''}
        </div>
        </div>
    ))}
    </CastLs>
);
};

export default Casts


