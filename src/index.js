import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Greeting from './2-props-types/Greeting';
import * as serviceWorker from './serviceWorker';
// import ShoppingList from './1-shopping-list/ShoppingList';
import Blog from './3-blog/BlogComponent/Blog';

ReactDOM.render(<Blog/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
