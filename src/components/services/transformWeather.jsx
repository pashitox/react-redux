import convert from 'convert-units';
import { CLOUDY, SUN, RAIN, SNOW, THUNDER, DRIZZLE } from '../constants/weathers';





const getWeatherState = weather =>{
      
    const {id} = weather[0];

    if (id < 300) {
        return THUNDER;
    } else if (id < 400) {
       return DRIZZLE;
    }else if (id < 600) {
        return RAIN;
    } else if (id < 700) {
        return SNOW;
     } else if (id === 800) {
        return SUN;
     } else {
         return CLOUDY;
     }




   

}

const GetTemperature = (a) =>{
    
    return Number(convert(a).from('K').to('C').toFixed(1))
}




     
 const transformWeather = (Weather_Data) =>{
    const { weather} = Weather_Data;
    const {humidity, temp} = Weather_Data.main;
    const {speed} = Weather_Data.wind;
    const weatherState = getWeatherState(weather);

    const temperature = GetTemperature(temp);



const data = {
    humidity,
    temperature,
    weatherState,
    wind: `${speed}m/s`
}



//console.log(data);

return data

}


export default transformWeather;