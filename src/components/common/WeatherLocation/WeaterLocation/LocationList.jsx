import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';
import './styles2.css'




const LocationList = ({cityes, onSelectedLocation}) => {

    const hanldeWeatherLocation = city => {
        //console.log("handeloncclik");
        //console.log(city);
        onSelectedLocation(city);
    }
    
    const sTrToComponent = cityes => (
        cityes.map( (city, index) => 
        (<WeatherLocation
            
            key={index} 
            
            
            city={city}
            
            
            onWeatherLocationClick={()=> hanldeWeatherLocation(city)}
            
            />))  
      );




    return (<div className="LocationList">
        {sTrToComponent(cityes)}
        </div>);
};

LocationList.propTypes = {
    cityes: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func
}

export default LocationList;