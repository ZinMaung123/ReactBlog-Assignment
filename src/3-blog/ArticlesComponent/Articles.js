import React from 'react';
import {BrowserRouter as Router, Link} from "react-router-dom";
import Article from '../ArticleComponent/Article';

class Articles extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list : []
        }
    }


    logoutState = () => {
        this.props.logoutEvent()
    }
    render(){
        return (
            <div>
                Articles Page
                <form action = '/home' onSubmit={this.logoutState}>
                    <button type="submit">Logout</button>
                </form>
                {
                    this.state.list.map ((item, index)=>{
                        return <Article key={index} userId={this.props.currentUser} title={item[0]} body={item[1]}/>;
                    })
                }

            </div>
        );
    }
}

export default Articles;