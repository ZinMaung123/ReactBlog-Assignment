import React from 'react';

export default class NewArticle extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title : "",
            body : ""
        }
    }

    detectTitleChange = (e) => {
        this.setState({
            title : e.target.value
        });
    }

    detectBodyChange = (e) => {
        this.setState({
            body : e.target.value
        });
    }

    createNewArticle = (e)=>{
        e.preventDefault();
        const currentList = localStorage.getItem('articles');
        console.log('currentList: ', currentList);
        let articleArray = [];
        let newArticle = [];
        if(currentList != null){
            articleArray = JSON.parse(currentList);
        }
        let id = 1;
        if(articleArray.length !== 0){
            const lastEle = articleArray[articleArray.length-1];
            id = lastEle[0] + 1;
        }        
        newArticle.push(id);
        newArticle.push(this.props.currentUser);
        newArticle.push(this.state.title);
        newArticle.push(this.state.body);

        articleArray.push(newArticle);

        localStorage.setItem("articles",JSON.stringify(articleArray));
    }

    logout = (e) => {
        e.preventDefault();
        this.props.logoutEvent();
    }

    render(){
        return (
            <div >
                <form onSubmit={this.createNewArticle}>
                    <label htmlFor="title">Title : </label>
                    <input type='text' id="title" value={this.props.title} onChange={this.detectTitleChange} /><br/>

                    <label htmlFor="body">Body : </label>
                    <input type="text" id="body" value={this.props.body} onChange={this.detectBodyChange} /><br/>

                    <button type="submit">Upload</button>
                </form>
                <a href="/home" onClick={this.logout}>Logout</a>
            </div>
        );
    }
}