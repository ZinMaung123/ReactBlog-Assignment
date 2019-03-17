import React from 'react';

export default class ItemList extends React.Component{
    render(){
        return(
            <ul>
                {this.props.children}
            </ul>
        );
    }
}