import React, { Component } from 'react'
import LocationList from '../../common/WeatherLocation/WeaterLocation/LocationList';
import ForestCast from '../../common/WeatherLocation/WeaterLocation/ForestCast';

import { Grid, Row, Col } from 'react-flexbox-grid';

import './index.css';



const cityes  = [
	'Buenos Aires,ar',
	'Santiago,cl',
	'Caracas,ve',
	'Panama,pa'
  ];


export default class Weather extends Component {
     
     constructor(){
       super();
 this.state = {city: null};
 }



	HandleSelectionLocacion = city => {
		this.setState({city})

	//this.setState({city:city })

		console.log(`andleSelectionLocacion,${city}`)  
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