import React, {Component} from 'react';

import  PropTypes from 'prop-types';
import Ubicacion from './Location';
import WeatherData from '../WeatherData/index';
import transformWeather from '../../../services/transformWeather'
import LinearProgress from '@material-ui/core/LinearProgress';



const url = "http://api.openweathermap.org/data/2.5/weather";

const api_key = "86b966db3eedd4db847278ca9d9de1f7";



//console.log(Api_weather);


//const data2 = {
//    temperature: 8,
//      weatherState: WINDY , 
//      humidity: 80, 
//      wind: '15'
//}


class WeatherLocation extends Component {

     constructor({ city }){
     super();
     
     this.state = {
         city,
         data: null
     }      
 }
 
    handleUpdateClick = () => {


        const {city} = this.state;
       

        const Api_weather = `${url}?q=${city}&appid=${api_key}`;


        fetch(Api_weather).then(data =>{
                     
            //console.log(Data);

            return data.json();
        }).then(Weather_Data => {
           // debugger;

          const data = transformWeather(Weather_Data);
            //console.log(data);
          this.setState({data})
            
          //console.log(Weather_Data);
        })

        //console.log("actulizado")
       // this.setState({
        //city: 'buenos aires!',
       // Data: data2 

       // });

    }

    componentWillMount(){
        this.handleUpdateClick()
    }
     render = () => {

    const {city, data} = this.state;

    const {onWeatherLocationClick} = this.props;

     
     return (<div className="WeatherLocacionCont" onClick={onWeatherLocationClick}>
        
        <Ubicacion city={city}/>
        {data ? <WeatherData data={data}/> :  

         <LinearProgress  variant="query" />}
        

     </div>);
    };

}

WeatherLocation.propTypes = {

 city: PropTypes.string,
 onWeatherLocationClick: PropTypes.func
}


   
export default WeatherLocation;