import React, {Component} from 'react';
import Ubicacion from './Location';
import WeatherData from '../WeatherData/index';
import './styles.css'

import {SUN } from '../../../constants/weathers';


const location = "Santiago,cl"
const api_key = "86b966db3eedd4db847278ca9d9de1f7";

const Api_weather= `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`;

console.log(Api_weather);

const data = {
    temperature: -1,
      weatherState: SUN, 
      humidity: 50, 
      wind: '10'
}

//const data2 = {
//    temperature: 8,
//      weatherState: WINDY , 
//      humidity: 80, 
//      wind: '15'
//}



class WeatherLocation extends Component {
 constructor(){
     super();
     
     this.state = {
         city: 'venezuela',

         Data: data
     }      
 }

       



    handleUpdateClick = () => {

        fetch(Api_weather).then(Data =>{
            
          
            console.log(Data);

            return Data.json();
        }).then(Weather_Data => {
            debugger;

          
            console.log(Weather_Data);
        })

        console.log("actulizado")
       // this.setState({
        //city: 'buenos aires!',
       // Data: data2 

       // });

    }
    


     render = () => {

    const {city, Data} = this.state;
     
     return (<div className="WeatherLocacionCont">
        
        <Ubicacion city={city}/>
         <WeatherData data={Data}/>
         <button onClick={this.handleUpdateClick}> actulizar</button>

     </div>);
    };

}

export default WeatherLocation;