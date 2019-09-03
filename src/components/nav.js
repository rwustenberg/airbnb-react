import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/grid.css'

class Nav extends React.Component {
	state = {

	}
		render () {
			return(
		<nav>
			<Link to="/" className="logo" style={{backgroundImage: 'url(https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c513.png)'}}></Link>
			<div className="profile">
				<Link to="/profile" className="button">
					<div className="avatar" style={{backgroundImage: 'url(https://randomuser.me/api/portraits/men/9.jpg)'}}></div>
					<span>Tony</span>
				</Link>
			</div>
		</nav>
		)
	}
}

export default Nav
