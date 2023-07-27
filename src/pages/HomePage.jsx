import axios from 'axios';
import { useState,useEffect} from "react";
import { Link } from "react-router-dom";

function HomePage() {
    const [countries,setCountries] = useState([])
    const listUrl = 'https://ih-countries-api.herokuapp.com/countries';

    useEffect(()=>{
    axios.get(listUrl)
    .then(response=>{setCountries(response.data);console.log(countries)})
    .catch(err=>console.log(err))},[])
    
    
    return (<div className="container" 
    style={{maxHeight: "90vh", overflow: "scroll"}}>
    <h1 style={{fontSize: "24px"}}>WikiCountries: Your Guide to the World</h1>
    <div className="list-group">
        {countries.map((r)=>{ return(
        <a className="list-group-item list-group-item-action text-decoration-none">
            <Link to={'/'+r.alpha3Code}>
                <img src = {`https://flagpedia.net/data/flags/icon/72x54/${r.alpha2Code.toLowerCase()}.png`}/>
                <br/>
                {r.name.common}</Link>
        </a>
    )})}</div>
    </div>)
}

export default HomePage;
