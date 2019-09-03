import React from 'react'
import Nav from './nav'
import Thumbnail from './thumbnail'
import {Link} from 'react-router-dom'


class Confirm extends React.Component {
	state = {

	}
	render () {
		return(
			<>
			<Nav />
			<div class="grid medium">
				<div class="grid sidebar-left">
					<div class="sidebar">
						<div class="card link">
							<Thumbnail />
						</div>
					</div>
			<div className="content">
				<h2>Confirm Booking</h2>
				<form>
					<div className="group">
						<label>From</label>
						<input type="text" value="12/11/2019"/>
					</div>
					<div className="group">
						<label>To</label>
						<input type="text" value="15/11/2019"/>
					</div>
					<div className="group">
						<label>Guests</label>
						<select>
							<option>1 guest</option>
							<option>2 guests</option>
							<option>3 guests</option>
							<option selected>4 guests</option>
							<option>5 guests</option>
							<option>6 guests</option>
							<option>7 guests</option>
							<option>8 guests</option>
							<option>9 guests</option>
							<option>10 guests</option>
						</select>
					</div>
					<div className="group">
						<label>Total: 3 nights</label>
						<h2>$1,050</h2>
					</div>
					<button className="primary">Confirm</button>
				</form>
				<hr/>
				<button>Cancel</button>
			</div>
		</div>
	</div>
			</>
		)
	}
}

export default Confirm;
