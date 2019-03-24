import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Login from "../LoginComponent/Login";
import Register from "../RegisterComponent/Register";
import Articles from "../ArticlesComponent/Articles";
import NewArticle from "../NewArticleComponent/NewArticle";

class Blog extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      isLogin : false,
      currentId : 0
    };
  }

  setLogin = (id) => {
    this.setState({
      isLogin : true,
      currentId : id
    });
  }

  setLogout = () => {
    this.setState({
      isLogin : false,
      currentId : 0
    });
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              {
                this.state.isLogin && (
                  <React.Fragment>
                    <li><Link to="/articles">Articles</Link></li>
                    <li><Link to="/newArticle">Create New Article</Link></li>
                  </React.Fragment>
                )
              }
            </ul>
            
            <Route path="/home" render={props => this.state.isLogin ? <Articles {...props} logoutEvent = {this.setLogout} currentUser={this.state.currentId}/> : <Login {...props} loginEvent={this.setLogin}/>}></Route>
            <Route exact path="/login" render={props => this.state.isLogin ? <Articles {...props} logoutEvent = {this.setLogout} currentUser={this.state.currentId}/> : <Login {...props} loginEvent={this.setLogin}/>} ></Route>
            <Route exact path="/register" render={props => this.state.isLogin ? <Articles {...props} logoutEvent = {this.setLogout} currentUser={this.state.currentId}/> : <Register {...props} loginEvent={this.setLogin}/>}></Route>
            <Route exact path="/articles" render={props => this.state.isLogin ? <Articles {...props} logoutEvent = {this.setLogout} currentUser={this.state.currentId}/> : <Redirect to="/login" />}></Route>
            <Route exact path="/newArticle" render={props => this.state.isLogin ? <NewArticle {...props} logoutEvent = {this.setLogout} currentUser = {this.state.currentId}/> : <Redirect to="/login" />}></Route>
          </div>
        </Router>
        <h1>An awesome blog will be here</h1>
      </React.Fragment>
      
    );
  }
  }

  export default Blog;