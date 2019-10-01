import React from 'react';

import './header.css';

const Header = () =>{
    return(
        <div className="header">
            <div>StarDB</div>
            <ul>
                <li>People</li>
                <li>Planets</li>
                <li>Starships</li>
            </ul>
        </div>
    )
}
export default Header;