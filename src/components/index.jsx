
import React from 'react';
import { Component } from 'react';


// Estilos
import './index.css';

// Componentes


// The CODE!

import Header from './common/header/header';
import Routers from "./Route/Route";
import LocationList from './common/WeatherLocation/WeaterLocation/LocationList';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import orange from '@material-ui/core/colors/orange';



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
	render() {

  // el slind  console.log("debuger");

handleSelectionLocacion = city => {

  console.log("handelseltion");

}

		return (
                  <MuiThemeProvider theme={theme}>
            <div>
                    
                  <Header /> 
                  
                  <LocationList cityes={cityes} 
                  onSelectedLocation={this.handleSelectionLocacion}> 
                  
                  </LocationList>    
        
                <Routers />
              
            
        </div>

         </MuiThemeProvider>
		)
	}
}




