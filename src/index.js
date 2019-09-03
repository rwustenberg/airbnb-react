import React from 'react';
import ReactDOM from 'react-dom';
import Thumbnail from './components/thumbnail';
import Nav from './components/nav';
import Sidebar from './components/sidebar';
import Form from './components/form';
import Router from './components/route';
import Login from './components/login';

import "./styles/global.css"
import "./styles/grid.css"
import "./styles/buttons.css"
import "./styles/nav.css"
import "./styles/filters.css"
import "./styles/users.css"
import "./styles/cards.css"
import "./styles/icons.css"

ReactDOM.render(<Router />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
