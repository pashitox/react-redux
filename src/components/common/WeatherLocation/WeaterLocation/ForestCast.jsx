import React, {Component} from 'react';
import PropTypes from 'prop-types';
import transformForecast from '../../../services/transformForescast'
import ForeCastItem from './../ForestCastItem'
import './styles.css';

/*const data = {
    temperature: 10,
    humidity:10,
    WeatherState:'normal',
    Wind:'normal'

}

const days = [
    'lunes',
    'martes',
    'miercoles',
    'jueves',
    'viernes',

]
*/

const url = "http://api.openweathermap.org/data/2.5/forecast";

const api_key = "86b966db3eedd4db847278ca9d9de1f7";



class ForestCast extends Component {
constructor() {
super();

this.state = {forescastData: null}

}

componentDidMount(){

this.UpdateCity(this.props.city)

    
  }

componentWillReceiveProps(nextPros){
    if (nextPros.city !== this.props.city) {

        this.setState({forescastData: null})
        this.UpdateCity(nextPros.city)
    }


}


UpdateCity =(city)=> {
   
    const url_forecast = `${url}?q=${city}&appid=${api_key}`;

    fetch(url_forecast).then(data =>
         (data.json()) 
        ).then(
            weather_data => {
                
                console.log(weather_data);

                const forescastData = transformForecast(weather_data);

                console.log(forescastData);

                this.setState({forescastData})
           
            }


);



}



ForesCastData(forescastData){

   
return forescastData.map(forescast=>( <ForeCastItem  
    key={`${forescast.WeekDay}${forescast.hour}`} 
    WeekDay={forescast.WeekDay}
     hour={forescast.hour}     
      data={forescast.data}></ForeCastItem>));         
          

}


renderProgress = () => {

    return <h3>"cargando pronostico"</h3>;
}



    render() {

         const {city} = this.props;
         const {forescastData} = this.state;


        return (<div>
            <h2 className="ForesCast-title"> pronostico extendido {city}</h2> 
               {forescastData   ?  this.ForesCastData(forescastData) : this.renderProgress() }
            </div>)
    }
}

ForestCast.propTypes = {
    city:PropTypes.string.isRequired,
}

export default ForestCast;