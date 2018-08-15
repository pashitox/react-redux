

import React from 'react'

import {Component} from 'react'

import AppBar from '@material-ui/core/AppBar';

import Button from '@material-ui/core/Button';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import orange from '@material-ui/core/colors/orange';



import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import './index.css';



const theme = createMuiTheme({
  palette: {
    primary: { main: orange[500] }, // Purple and green play nicely together.
    secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
  },
 
});





class Header extends Component {
  render() {
      return (
          
        <MuiThemeProvider theme={theme}>
          <div className="app-bar">
              <AppBar position="static">
                  <Toolbar>
                      <div className="logo"></div>
                      <Typography variant="title" color="inherit" className="flex">

                      </Typography>

                      <Button color="inherit" >
                          <a href="/">inicio</a>
                          
                      </Button>
                      <Button color="inherit" >
                          <a href="/Departamento">Departamentos</a>
                      </Button>
                     
                     
                      <Button color="inherit" >
                          <a href="/MiAmazon">Mi Amazon</a>
                      </Button>
                      <Button color="inherit" >
                          <a href="/Ofertas">Ofertas</a>
                      </Button>
                     
                      <Button color="inherit" >
                          <a href="/Registro">Registro</a>
                      </Button>
                      <Button color="inherit" >
                          <a href="/Prime">Prime</a>
                      </Button>
                      <Button color="inherit" >
                          <a href="/Pedidos">Pedidos</a>
                      </Button>
                      <Button color="inherit" >
                          <a href="/Login">login</a>
                      </Button>
                      <Button color="inherit" >
                          <a href="/About">acerca</a>
                      </Button>

                  </Toolbar>
              </AppBar>
              
          </div>
          </MuiThemeProvider>
      );
  }
}

export default Header;




