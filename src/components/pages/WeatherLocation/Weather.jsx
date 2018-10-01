import React, { Component } from 'react'
import LocationList from '../../common/WeatherLocation/WeaterLocation/LocationList';
import ForestCast from '../../common/WeatherLocation/WeaterLocation/ForestCast';

import { Grid, Row, Col } from 'react-flexbox-grid';

import {createStore} from 'redux';

import './index.css';



const cityes  = [
	'Buenos Aires,ar',
	'Santiago,cl',
	'Caracas,ve',
	'Panama,pa'
  ];


  const store = createStore(()=>{},
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

 const setCity = value => ({type:'setCity', value});

  

export default class Weather extends Component {
     
     constructor(){
       super();
 this.state = {city: null};
 }



	HandleSelectionLocacion = city => {
		this.setState({city})

	//this.setState({city:city })

		console.log(`andleSelectionLocacion,${city}`)  

		store.dispatch(setCity(city));
 }
	render() {

        const { city} = this.state;


		return (
	<Grid>        
	<Row>
			<Col xs={12} md={6}>			  
			<LocationList cityes={cityes} 
			onSelectedLocation={this.HandleSelectionLocacion}> 
			</LocationList>  
			</Col>
			<Col xs={12} md={6}>
			
			<div className='detail'>	 
   {!city ?
 <h2   >No se ha seleccionado la ciudad</h2>:
 <ForestCast city={city}> </ForestCast> }
			
			</div>
		
			</Col>
 </Row> 
 </Grid>
	)}
	}