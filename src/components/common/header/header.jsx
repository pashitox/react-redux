

import React from 'react'
import {Component} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';






import './index.css';









class Header extends Component {
  render() {
      return (
          
      
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
         
      );
  }
}

export default Header;




