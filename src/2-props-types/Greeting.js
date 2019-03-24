import React from 'react';
import PropTypes from 'prop-types';
 
class Greeting extends React.Component {
    render() {
      return (
        <h1>Hello, {this.props.children}</h1>
      );
    }
  }
  

 
  Greeting.propTypes = {
    // name : PropTypes.string.isRequired //isRequired can be used as a chain function with others
    // optionalArray: PropTypes.array,
    // optionalBool: PropTypes.bool,
    // optionalFunc: PropTypes.func,
    // optionalNumber: PropTypes.number,
    // optionalObject: PropTypes.object,
    // optionalString: PropTypes.string,
    children: PropTypes.element.isRequired
}

export default Greeting;

//Ref : 
//https://www.npmjs.com/package/prop-types

