import React from 'react';
import SwapiServise from '../../services/swapi-service';
import Spiner from '../spiner/spiner';

import './item-list.css';

export default class ItemList extends React.Component{
    state={
        itemList:null
    };

    componentDidMount(){

        const {getData} = this.props;
        getData()
                .then((itemList)=>{
                    this.setState({
                        itemList
                    });
                });
    }
   
    renserItems(nameList){
            const idRegExp = /\/([0-9]*)\/$/;
            return nameList.map((objs)=>{
                let id = objs.url.match(idRegExp)[1];
                
                return(
                    <li key={id} className="list-group-item" onClick={() => this.props.infoPerson(id)}>{objs.name}</li>
                );
            });
    };
    render(){
        const {itemList} = this.state;
        if(!itemList){
            return <Spiner/>;
        };
         const nameList = this.renserItems(itemList);
        return(
            <div className="item-list">
                <ul className="list-group">
                    {nameList}
                </ul>
            </div>
        );
    };
};
