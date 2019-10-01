import React from 'react';


import ItemList from '../item-list/item-list';
import PersonDetail from '../person-details/person-details';
import SwapiServise from '../../services/swapi-service';


export default class PeoplePage extends React.Component{
    swapi = new SwapiServise();
    state = {
        personInfo: 'waiting for persone'
    }
    
    
    infoPerson = (id) =>{ // find person info by click in ItemList
        console.log(id);
        this.swapi
            .getPersone(id)
            .then((info)=>{
                this.setState(({personInfo})=>{
                    const newPerson = {
                        name: info.name,
                        height: info.height,
                        eye: info.eye_color,
                        hair: info.hair_color,
                        gender: info.gender,
                        mass: info.mass
                    }
                    return{
                        personInfo: newPerson
                    }
                });
            });

        }
        
    render(){
        const { personInfo} = this.state;
        return(
            <div className="flex">
                    <ItemList 
                    infoPerson={this.infoPerson}
                    getData={this.swapi.getAllPeople}/>
                    <PersonDetail personDetail={personInfo}/>
                </div>
        )
    }
}