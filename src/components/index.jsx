
import React from 'react';
import { Component } from 'react';


// Estilos
import './index.css';

// Componentes


// The CODE!

import Header from './common/header/header';
import Routers from "./Route/Route";
import WeatherLocation from './common/WeatherLocation/WeaterLocation/WeatherLocation';



export default class Root extends Component {
	render() {
		return (
            
            <div>
                 <Header />   
                 <div className="App">  
                 <WeatherLocation/>
                 </div>   
          <div className="contenedor">
                <Routers />

            </div>
        </div>
		)
	}
}




