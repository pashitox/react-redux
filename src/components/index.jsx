
import orange from '@material-ui/core/colors/orange';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import React, { Component } from 'react';
// Componentes
import { Grid, Row, Col } from 'react-flexbox-grid';
import './index.css';



import Routers from "./Route/Route";
import Header from './common/header/header';
// Estilos








const theme = createMuiTheme({
      palette: {
        primary: { main: orange[500] }, // Purple and green play nicely together.
        secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
      },
      
     
    });



export default class Root extends Component {

  HandleSelectionLocacion = city => {

    this.setState({city});

    console.log(`andleSelectionLocacion,${city}` )
    
    
  
   
  }
  


	render() {

  // el slind  console.log("debuger");
 
		return (
   <MuiThemeProvider theme={theme}>
 <Grid>     
 <Row>
	<Col xs={12}>
 <Header/>
  </Col>
  </Row>
 </Grid>

                 <Routers/>


                 </MuiThemeProvider>
		)
	}
}




