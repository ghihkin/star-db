import React from 'react';

import './planet-details.css';

const PlanetDetails = () =>{
    return(
        <div className="planet-desc">
            <h2>Planet Name</h2>
                <ul>
                    <li>Population: 132132</li>
                    <li>Rotation Period: 13</li>
                    <li>Diametr: 100</li>
                </ul>
        </div>
    )
}
export default PlanetDetails;