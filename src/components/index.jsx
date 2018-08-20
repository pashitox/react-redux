
import orange from '@material-ui/core/colors/orange';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import React, { Component } from 'react';
// Componentes
// The CODE!
import Header from './common/header/header';
import LocationList from './common/WeatherLocation/WeaterLocation/LocationList';
// Estilos
import './index.css';
import Routers from "./Route/Route";

import { Grid, Row, Col } from 'react-flexbox-grid';







const theme = createMuiTheme({
      palette: {
        primary: { main: orange[500] }, // Purple and green play nicely together.
        secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
      },
      
     
    });

const cityes  = [
  'Buenos Aires,ar',
  'Santiago,cl',
  'Caracas,ve',
  'Panama,pa'
];

export default class Root extends Component {

  HandleSelectionLocacion = city => {

    console.log(`andleSelectionLocacion,${city}` )
  
  }
  


	render() {

  // el slind  console.log("debuger");
 
		return (
                  <MuiThemeProvider theme={theme}>
                       
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
        



         </MuiThemeProvider>
		)
	}
}




