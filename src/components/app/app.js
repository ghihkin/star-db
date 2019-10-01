import React from 'react';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import PeoplePage from '../PeoplePage/people-page';
import ItemList from '../item-list/item-list';
import PersonDetail from '../person-details/person-details';
import SwapiServise from '../../services/swapi-service';
import './app.css';

export default class App extends React.Component{
    swapi = new SwapiServise();
    state = {
        personInfo: 'waiting for persone'
    }
render(){  
    const { personInfo} = this.state;
        return(
            <div>
                <Header/>
                <RandomPlanet />
                <PeoplePage /> 
                <div className="flex">
                    <ItemList 
                    infoPerson={this.infoPerson}
                    getData={this.swapi.getAllPlanets}/>
                    <PersonDetail personDetail={personInfo}/>
                </div> 
                <div className="flex">
                    <ItemList 
                    infoPerson={this.infoPerson}
                    getData={this.swapi.getAllStarships}/>
                    <PersonDetail personDetail={personInfo}/>
                </div> 
            </div>
        );
    };
};


