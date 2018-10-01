import React from 'react';
import PropTypes from 'prop-types'; 
import WeatherData from './../WeatherData/';

const ForeCastItem = ({WeekDay, hour , data}) => (

<div>
<div><h2>{WeekDay}-{hour} hs</h2></div>
<WeatherData data={data}></WeatherData>
</div>


);

ForeCastItem.propTypes = {
    WeekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired
     
     
     
       })
    
}


export default ForeCastItem;