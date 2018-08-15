import React from 'react';
import Ubicacion from './Location';
import WeatherData from '../WeatherData/index';



const WeatherLocation = () => (

<div className="WeatherLocacionCont"> 


<Ubicacion city={'Venezuela'}/>
<WeatherData/>

</div>);



export default WeatherLocation;