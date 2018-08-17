import React, {Component} from 'react';
import Ubicacion from './Location';
import WeatherData from '../WeatherData/index';
import transformWeather from '../../../services/transformWeather'
import './styles.css'



import CircularProgress from '@material-ui/core/CircularProgress';
import orange from '@material-ui/core/colors/orange';

const location = "Santiago,cl"
const api_key = "86b966db3eedd4db847278ca9d9de1f7";

const Api_weather= `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`;

console.log(Api_weather);


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
         city: location,

         data: null
     }      
 }
    handleUpdateClick = () => {

        fetch(Api_weather).then(data =>{
            
          
            //console.log(Data);

            return data.json();
        }).then(Weather_Data => {
           // debugger;

          const data = transformWeather(Weather_Data);
            //console.log(data);
          this.setState({data})
            
          console.log(Weather_Data);
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

    const styles = theme => ({
        progress: {
          margin: theme.spacing.unit * 2,
        },
      });
     
     return (<div className="WeatherLocacionCont">
        
        <Ubicacion city={city}/>
        {data ? <WeatherData data={data}/> :  <CircularProgress className={styles.progress} style={{ color: orange[500] }} thickness={10} />}
        

     </div>);
    };

}

export default WeatherLocation;