import React from 'react';
import SwapiServise from '../../services/swapi-service';
import Spiner from '../spiner/spiner';
import ErrorMess from '../error-mess/error-mess';
import './random-planet.css';

export default class RandomPlanet extends React.Component{
    
    swapiServise = new SwapiServise();
    state ={
        planet: {},
        loading: true,
        error: false
    };
    componentDidMount(){
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 2500);
    };
    componentWillMount(){
        clearInterval(this.interval);
    };
    onPlanetLoaded = (planet) =>{
        this.setState({
            planet,
            loading: false
        })
    }
    onError = (err) =>{
        this.setState({
            error:true,
            loading: false
        })
    }

    updatePlanet = () =>{
        const id = Math.floor(Math.random()*10) + 2;
        //console.log('here',randomPlanet.type);
        this.swapiServise
            .getPlanet(id)
                .then(this.onPlanetLoaded)
                .catch(this.onError);
    }
    
    render(){
        const {planet, loading, error} = this.state;

        const hasData = !(loading || error);
        const errorMessage = error ? <ErrorMess/> : null;
        const spiner = loading ? <Spiner/> : null;
        const content = hasData ? <PlanetView planet={planet}/> : null;
        return(
            <div className="sub-heade">
                <div className="centred_box">
                    {errorMessage}
                    {spiner}
                    {content}
                </div>
            </div>
        );
    }
}
const PlanetView = ({planet}) => {
    const {id, name, population, rotationPeriod, diameter} =planet;
    return(
        <React.Fragment>
            <div className="planet-image">
                        <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="randPlanet"/>
                    </div>
                    <div className="planet-desc">
                        <h2>{name}</h2>
                            <ul>
                                <li>Population: {population}</li>
                                <li>Rotation Period: {rotationPeriod}</li>
                                <li>Diametr: {diameter}</li>
                            </ul>
                    </div>
        </React.Fragment>
    )
}