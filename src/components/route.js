import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Signup from './signup';
import Login from './login'
import Confirm from './confirm'
class Router extends React.Component {
	render () {
		return (
			<BrowserRouter>
				<Switch>
				<Route path='/confirm' component={Confirm} />
				<Route path='/login' component={Login} />
				<Route path='/' component={Signup} />
				</Switch>
			</BrowserRouter>
		)
	}
}

export default Router;
