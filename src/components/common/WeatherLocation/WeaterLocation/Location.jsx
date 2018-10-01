import React from 'react';
import  PropTypes from 'prop-types';
import './styles.css'



const Ubicacion = ({city}) => {  //super proooooo

    //console.log(props);
    //debugger;
   // const city = props.city;
   // const {city} = props; //destrupturin woooo

    return(<div className="LocationCont"> 
    <h1>{city}</h1>    
    </div>);
};

Ubicacion.propTypes = {

    city: PropTypes.string.isRequired
}

export default Ubicacion