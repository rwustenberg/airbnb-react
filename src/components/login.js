import React from 'react'
import {Link} from 'react-router-dom'



class Login extends React.Component {
	state = {

	}
	render () {
		return (
		<div>
			<div className="grid center middle tall image">
				<div className="card small">
					<div className="content">
						<div className="logo"></div>
						<form>
							<div className="group">
								<label>Email</label>
								<input type="email"/>
							</div>
							<div clasNames="group">
								<label>Password</label>
								<input type="password"/>
							</div>
							<button className="primary">Login</button>
						</form>
						<p className="footer">
							New to Airbnb? <Link to="/">Signup</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
		)
	}
}

export default Login;
