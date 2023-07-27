import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState,useEffect} from "react";
import { Link } from "react-router-dom";

function CountryDetails() {
    const [countryDetail,setCountryDetail] = useState(null)
    let param = useParams();

    let countryUrl = `https://ih-countries-api.herokuapp.com/countries/${param.countryId}`   
    useEffect(()=>{
        axios.get(countryUrl)
        .then(response=>{setCountryDetail(response.data)})
        .catch(err=>console.log(err))},[])

    console.log(countryDetail)
    if (countryDetail==null){
        return <h2>Loading...</h2>
    }
    else{
    return (<div className="container">
    <p style={{fontSize: "24px", fontWeight: "bold"}}>Country Details</p>
   
    <h1>{countryDetail.name.official}</h1>
    <table className="table">
        <thead></thead>
        <tbody>
            <tr>
              <td style={{width: "30%"}}>Capital</td>
              <td>{countryDetail.capital[0]}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {countryDetail.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
                <td>Borders</td>
                <td><ul>
        {countryDetail.borders.map((r)=>{ return(
        <li style={{listStyle:'none'}}>
            <Link to={'/'+r}>{r}</Link>
        </li>)})}</ul>
                </td>
            </tr>
        </tbody>
    </table>
    
    </div>)}
}

export default CountryDetails;
