import React from 'react';

export default class Article extends React.Component{
    render(){
        const articleStyle = {border: "2px solid black", paddingBottom: "20px"};
        return (

            <div style={articleStyle}>
                <label htmlFor="title">Title : {this.props.title}</label><br/>

                <label htmlFor="body">Body : {this.props.body}</label>
            </div>
            
        );
    }
}