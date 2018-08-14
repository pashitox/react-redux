import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import {WINDY } from '../../../constants/weathers';




const WeatherData = () => (
    <div> 
     
  <WeatherTemperature Temperature={20} weatherState={WINDY} />
  <WeatherExtraInfo humidity= {80} wind={'10m/s'} />

    </div>
);



export default WeatherData 