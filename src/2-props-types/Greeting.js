import React from 'react';
import PropTypes from 'prop-types';
 
class Greeting extends React.Component {
    render() {
      return (
        <h1>Hello, {this.props.name}</h1>
      );
    }
  }
  

 
  Greeting.propTypes = {
    optionalArray: PropTypes.array,
    optionalBool: PropTypes.bool,
    optionalFunc: PropTypes.func,
    optionalNumber: PropTypes.number,
    optionalObject: PropTypes.object,
    optionalString: PropTypes.string,
    //children: PropTypes.element.isRequired
}

export default Greeting;

//Ref : 
//https://www.npmjs.com/package/prop-types

