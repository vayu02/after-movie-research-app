import React from 'react'
import { DetailsWrap } from './Details.styles';

const Details = ({ status, premiered, network }) => {
    return (
        <DetailsWrap>
            <p>
                Status: <span>{status}</span>
            </p>
            <p>
                Premiered {premiered} {network ? `on ${network.name}` : null}
            </p>
        </DetailsWrap>
    );
};

export default Details
