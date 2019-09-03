import React from 'react'
import {Link} from 'react-router-dom'




class Thumbnail extends React.Component {
	state = {
		thumbnail: [
				{img:	"background-image: url('https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg')",
			 title: "Luxury Villa Indu Siam",
			  type: "Entire Villa",
			 rooms: 7,
			 price: "$350",
		 reviews: 37
	 		},{img:	"background-image: url('https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg')",
		   title: "Mountain View",
				type: "Private Room",
		   rooms: 1,
		   price: "$55",
		 reviews: 59
	 		},{img:	"background-image: url('https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg')",
		 	 title: "Villa Koh Samui",
				type: "Shared Villa",
 			 rooms: 5,
		 	 price: "$300",
		 reviews: 31
	 		},{img:"background-image: url('https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg')",
		   title: "Private Room City Center",
				type: "Private Room",
	 		 rooms: 1,
	 		 price: "$80",
		 reviews:	42
	 		},{img:"background-image: url('https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg')",
		 	 title: "Island House Cebu",
				type: "Entire House",
			 rooms: 4,
			 price: "$200",
		 reviews:	12
	 		},{img:	"background-image: url('https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg')",
		 	 title: "Beach View House",
				type: "Shared House",
			 rooms: 2,
			 price: "$120",
		 	 reviews:	21
		}
	]
}
	render () {
		return(
			<div className="card">
			<Link className="card link" to="place.html">
				<div className="image" style={{backgroundImage: 'url(https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg)'}}>
					<button className="icon">
						<i className="far fa-heart"></i>
					</button>
				</div>
				<div className="content">
					<small className="meta">Entire Villa • 7 Rooms</small>
					<h2>Luxury Villa Indu Siam</h2>
					<span className="price">$350/night</span>
					<span className="rating">
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="far fa-star"></i>
						<span>37 Reviews</span>
					</span>
				</div>
				{
		 card => this.state.places.map((place, index) => {
					return (
					<div className="thumbnail">
					<div>{this.state.place.img}</div>
					<h2>{this.state.place.title}</h2>
					<small>{this.state.place.type}</small>
					<small>{this.state.place.rooms}</small>
					<span>{this.state.place.price}</span>
				</div>)
				})
			}
		</Link>
		</div>
		)
	}
}

 export default Thumbnail
