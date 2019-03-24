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
        let articleArray = [];
        let newArticle = [];
        if(currentList != null){
            articleArray = JSON.parse.currentList;
        }

        const id = articleArray.length + 1;
        newArticle.push(id);
        newArticle.push(this.props.currentUser);
        newArticle.push(this.state.title);
        newArticle.push(this.state.body);

        articleArray.push(JSON.stringify(newArticle));

        localStorage.setItem("articles", articleArray);
    }

    logout = (e) => {
        e.preventDefault();
        this.props.logoutEvent();
    }

    render(){
        return (
            <div >
                <form action="/articles" onSubmit={this.createNewArticle}>
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