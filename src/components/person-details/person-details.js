import React from 'react';

import './person-details.css';

const PersonDetail = ({personDetail}) =>{
    const {name, height, eye, hair, gender, mass} = personDetail;
    return(
        <div className="pers_detail">
            <div className="person_img">
                <img src="https://icon-library.net/images/person-icon-png-transparent/person-icon-png-transparent-7.jpg" alt="personPhoto"/>
            </div>
            <div className="person_list">
                <h2>{name}</h2>
                <ul>
                    <li>Height: {height}</li>
                    <li>Eye Color: {eye}</li>
                    <li>Hair Color: {hair}</li>
                    <li>Gender: {gender}</li>
                    <li>Mass: {mass}</li>
                </ul>
            </div>
        </div>
    )
}
export default PersonDetail;
