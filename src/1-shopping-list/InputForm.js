import React from 'react';
import PropTypes from 'prop-types';

export default class InputForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : ""
        };
    }
    onChangeEvent = (e) => {
        this.setState({
            name : e.target.value
        });
    }
    
    formSubmit = (e) => {
        e.preventDefault();
        this.props.formIsSubmitted(this.state.name);
        this.setState({
            name : ""
        });
    }

    render(){
        return(
            <form onSubmit={this.formSubmit}>
                <input value={this.state.name} onChange={this.onChangeEvent}>
                </input>
                <button type='submit'>
                    Add
                </button>
            </form>
        );
    }
}

InputForm.propTypes = {
    formIsSubmitted: PropTypes.func.isRequired
}