import convert from 'convert-units';
import {SUN} from '../constants/weathers';


const getWeatherState = (weather) =>{
    return SUN;

}

const GetTemperature = (a) =>{
    
    return Number(convert(a).from('K').to('C').toFixed(1))
}




     
 const transformWeather = (Weather_Data) =>{

    const {humidity, temp} = Weather_Data.main;
    const {speed} = Weather_Data.wind;
    const weatherState = getWeatherState(this.weather);

    const temperature = GetTemperature(temp);



const data = {
    humidity,
    temperature,
    weatherState,
    wind: `${speed}m/s`


}
console.log(data);

return data

}


export default transformWeather;