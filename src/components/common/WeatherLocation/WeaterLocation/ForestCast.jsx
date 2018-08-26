import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './styles.css';


class ForestCast extends Component {

    render() {

         const {city} = this.props;
        return (<div>
            <h2 className="ForesCast-title"> pronostico extendido {city}</h2>          
            </div>)
    }



}

ForestCast.propTypes = {
    city:PropTypes.string.isRequired
}

export default ForestCast;