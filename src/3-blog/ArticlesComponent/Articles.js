import React from 'react';
import {BrowserRouter as Router, Link} from "react-router-dom";
import Article from '../ArticleComponent/Article';

class Articles extends React.Component{
    constructor(props){
        super(props);
        const currentList = localStorage.getItem('articles');        
        this.state = {
            list : (currentList !== null ? JSON.parse(currentList) : [])
        }
    }

    removeArticle = (index)=>{
        console.log("TCL: Article -> deleteArticle -> userId", this.props.currentUser);               
        const currentList = localStorage.getItem('articles');
        let articleArray = [];
        if(currentList != null){
            articleArray = JSON.parse(currentList);
			console.log("TCL: Articles -> removeArticle -> rticleArray[index][1] === this.props.currentUser", articleArray[index][1] === this.props.currentUser)
            if(articleArray[index][1] === this.props.currentUser){
                articleArray.splice(index,1);
            }

            localStorage.setItem('articles',JSON.stringify(articleArray));

            this.setState({
                list : articleArray
            });
        }
        else{
            return false;
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
                        return <Article key={index} itemIndex={index} title={item[2]} body={item[3]} removeItemEvent = {this.removeArticle}/>;
                    })
                }

            </div>
        );
    }
}

export default Articles;