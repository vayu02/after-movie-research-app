import React from 'react'
import { SeasonLs, SeasonsWrap } from './Seasons.Styles';

const Seasons = ({ seasons }) => {
    return (
    <SeasonsWrap>
        <p>
            Seasons in total: <span>{seasons.length}</span>
        </p>
        <p>
            Episodes in total:{' '}
            <span>
                {seasons.reduce((acc, season) => acc + season.episodeOrder, 0)}
            </span>
        </p>
    <SeasonLs>
        {seasons.map(season => (
            <div key={season.id} className='.season-itm'>
                <div className='left'>
                    <p>Season {season.number}</p>
                        <p>
                            Episodes: <span>{season.episodeOrder}</span>
                        </p>
                </div>
                <div className='right'>
                    Aired:{' '}
                    <span>
                        {season.premiereDate} - {season.endDate}
                    </span>
                </div>
            </div>
        ))}
    </SeasonLs>
    </SeasonsWrap>
);
};



export default Seasons
