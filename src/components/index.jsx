
import React from 'react';
import { Component } from 'react';


// Estilos
import './index.css';

// Componentes


// The CODE!

import Header from './common/header/header';
import Routers from "./Route/Route";
import WeatherLocation from './common/WeatherLocation/WeaterLocation/WeatherLocation';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import orange from '@material-ui/core/colors/orange';



const theme = createMuiTheme({
      palette: {
        primary: { main: orange[500] }, // Purple and green play nicely together.
        secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
      },
     
    });



export default class Root extends Component {
	render() {
		return (
                  <MuiThemeProvider theme={theme}>
            <div>
                    
                  <Header /> 
                  <WeatherLocation/>     
        
                <Routers />
              
            
        </div>

         </MuiThemeProvider>
		)
	}
}




