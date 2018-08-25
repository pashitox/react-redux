

import React from 'react';
import { 
	Route,
	BrowserRouter,	
	//Redirect,
	Switch
} from 'react-router-dom'






import Home from '../pages/';
import Departamento from '../pages/Departamento'
import MiAmazon from '../pages/MiAmazon'
import Ofertas from '../pages/Ofertas'
import Pedidos from '../pages/Pedidos'
import Prime from '../pages/Prime'

import Weather from '../pages/WeatherLocation/Weather'
import Protegida from '../pages/protected/'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Error404 from '../pages/Error404'

//const PrivateRoute = ( { component: Component, authed, rest } ) => (
  //  <Route
//      {...rest}
//      render={
//        props => authed === true
//          ? <Component {...props} />
//          : <Redirect to={ { pathname: '/login', state: { from: props.location } } } />
//      }
//    />
//  )


class Routers extends React.Component {
    constructor(...props) {
        super(...props)
    
        this.state = {
          authed: false,
          loading: true
        }
    
     //   this.login = this.login.bind(this);
       // this.logaut = this.logaut.bind(this);
    
    
        
      }
    
      handleOnClick(e) {
        //alert('click')
       
      }
    
    // login() {
        
      //  this.setState({ authed: true,
        //loading: true });
     // }
    
    //  logaut() {
        
      //  this.setState({ authed: false, loading: true });
     // }
     
     
    

    render(){ 
  return  this.state.loading === false
  ? <h1>Cargando...</h1> 
  : (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
          
              <Route  exact path='/Departamento'  component={Departamento} />
              <Route  path='/MiAmazon' exact component={MiAmazon} />
              <Route  path='/Ofertas' component={Ofertas} />
              <Route  path='/Pedidos' component={Pedidos} />
              <Route  path='/Prime' component={Prime} />
              <Route  path='/Weather' component={Weather} />
              <Route  path='/login' component={Login} />
              <Route  path='/registro' component={Register} />
              <Route  path='/protegida' component={Protegida} />
              <Route component={Error404} />
            
        </Switch>
    </BrowserRouter>
)
    }
}

export default Routers;