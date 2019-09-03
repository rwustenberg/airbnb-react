import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/sidebar.css'


class Sidebar extends React.Component {
	state = {
		
	}
	render () {
		return(
		<div className="grid medium">
			<div className="grid sidebar-left">
				<div className="sidebar">
					<ul>
						<li className="">
							<Link to="profile.html">Profile</Link>
						</li>
						<li className="">
							<Link to="bookings.html">Bookings</Link>
						</li>
						<li className="">
							<Link to="favorites.html">Favorites</Link>
						</li>
						<li className="active">
							<Link to="host.html">Host</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
		)
	}
}

export default Sidebar;
