import React from 'react'
import '../styles/forms.css'

class Form extends React.Component {
	render () {
		return (
			<div className="grid center middle tall image">
				<div className="card small">
					<div className="content">
						<div className="image" style={{backgroundImage: 'url(https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg)'}}></div>
						<form>
							<div className="group">
								<label>Name</label>
								<input type="text">
							</div>
							<div className="group">
								<label>Email</label>
								<input type="email">
							</div>
							<div className="group">
								<label>Password</label>
								<input type="password">
							</div>
							<div class=Name"group">
								<label>Location</label>
								<input type="text">
							</div>
							<div className="group">
								<label>Profile Picture</label>
								<input type="file" />
							</div>
							<button className="primary">Signup</button>
						</form>
						<p class="footer">
							Already have an account? <a href="">Login</a>
						</p>
					</div>
				</div>
			</div>Name
		)
	}
}

export default Form;
