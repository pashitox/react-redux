import React, { Component } from 'react'
import LocationList from '../../common/WeatherLocation/WeaterLocation/LocationList';
import { Grid, Row, Col } from 'react-flexbox-grid';

import './index.css';



const cityes  = [
	'Buenos Aires,ar',
	'Santiago,cl',
	'Caracas,ve',
	'Panama,pa'
  ];


export default class Weather extends Component {
	HandleSelectionLocacion = city => {
	//	console.log(`andleSelectionLocacion,${city}`)  
 }
	render() {
		return (
	<Grid>        
	<Row>
			<Col xs={12} md={6}>			  
			<LocationList cityes={cityes} 
			onSelectedLocation={this.HandleSelectionLocacion}> 
			</LocationList>  
			</Col>
			<Col xs={12} md={6}>
			
			<div className='detail'></div>
		
			</Col>
 </Row> 
 </Grid>
	)}
	}