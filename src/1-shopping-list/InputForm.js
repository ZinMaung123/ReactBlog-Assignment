import React from 'react';

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