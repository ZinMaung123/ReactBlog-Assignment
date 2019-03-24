import React from 'react';
import PropTypes from 'prop-types';

export default class Item extends React.Component{
    deleteThisItem = (e) => {
        this.props.removeItemEvent(this.props.itemIndex)
    }
    render(){
        const deleteStyle = {color: 'red', paddingLeft : '30px'};
        const liStyle = {padding : '10px'};
        return (
            <li style={liStyle}>{this.props.text} <span style={deleteStyle} onClick={this.deleteThisItem}>X</span></li>
        );
    }
}

Item.propTypes = {
    text : PropTypes.string.isRequired,
    removeItemEvent : PropTypes.func.isRequired
}
