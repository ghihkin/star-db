export default class SwapiServise {
    _apiBase = 'https://swapi.co/api';
    async getResourse(url){
        const res = await fetch(`${this._apiBase}${url}`);
        if(!res.ok){
            throw new Error(`Could not fetch ${url}`)
        } 
        return await res.json();
    };
    getAllPeople = async () =>{
        const res = await this.getResourse(`/people/`);
        return res.results;
    };
    getPersone(id){
        return this.getResourse(`/people/${id}`);
    };
    getAllPlanets = async () =>{
        const res = await this.getResourse(`/planets/`);
        // const result = await res.results.map(this._trandsformPlanet());
        // return result
        return res.results;
    };
    getPlanet = async (id) =>{
        const planet = await this.getResourse(`/planets/${id}`);
        return this._trandsformPlanet(planet);
    };
    getAllStarships= async () =>{
        const res = await this.getResourse(`/starships/`);
        return res.results;
    };
    getStarships(id){
        return this.getResourse(`/starships/${id}`);
    };
    _exstractId(item){
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    };
    _trandsformPlanet = (planet) => {
        return {
            id: this._exstractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        };
    };

}


