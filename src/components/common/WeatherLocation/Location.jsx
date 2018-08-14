import React from 'react';

import  PropTypes from 'prop-types';

const Ubicacion = ({city}) => {  //super proooooo

    //console.log(props);
    //debugger;

   // const city = props.city;
   // const {city} = props; //destrupturin woooo
    return(<div> <h1>
        
        {city}  
        
        </h1></div>);
};

Ubicacion.propTypes = {
    city: PropTypes.string.isRequired
}

export default Ubicacion