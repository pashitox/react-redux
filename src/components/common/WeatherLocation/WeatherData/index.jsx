import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import {WINDY } from '../../../constants/weathers';

import './styles.css';





const WeatherData = () => (

    <div className= "weatherDataCont" > 
     
  <WeatherTemperature className= "weatherTemperatureCont" Temperature={20} weatherState={WINDY} />
  <WeatherExtraInfo  className= "weatherExtraInfoCont" humidity= {80} wind={'10m/s'} />

    </div>
);



export default WeatherData 