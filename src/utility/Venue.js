import React from 'react';
import BaseCard from './BaseCard';

function Venue(props){

    const city = {image:"", cityName:"", price:"$99/mo"}

    return (
        <div>
            <BaseCard city={city} />
        </div>
    )
}

export default Venue;