import React from "react";
import { Link } from "react-router-dom";

class Thumbnail extends React.Component {
  state = {
    thumbnail: {
      image:
        "https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg",
      title: "Luxury Villa Indu Siam",
      description: "Wonderful Villa",
      type: "Entire Villa",
      rooms: 7,
      price: "$350",
      reviews: 37
    }
  };
  render() {
    return (
      <Link className="card link" to={`/Place/${this.props.place._id}`}>
        <div
          className="image"
          style={{
            backgroundImage: `url(${this.props.place.image})`
          }}
        >
          <button className="icon">
            <i className="far fa-heart"></i>
          </button>
        </div>
        <div className="content">
          <small className="meta">
            {this.props.place.type.name} • {this.props.place.guests}{" "}
            {this.props.place.guest === 1 ? "Guest" : "Guests"}
          </small>
          <h2>{this.props.place.title}</h2>
          <span className="price">
            {"$" + this.props.place.price + "/night"}
          </span>
          <span className="rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
            <span>{this.props.place.reviews} Reviews</span>
          </span>
        </div>
        {card =>
          this.props.places.map((place, index) => (
            <div className="thumbnail">
              <div>{this.state.place.image}</div>
              <h2>{this.state.place.title}</h2>
              <small>{this.state.place.type}</small>
              <small>{this.state.place.rooms}</small>
              <span>{this.state.place.price}</span>
            </div>
          ))
        }
      </Link>
    );
  }
}

export default Thumbnail;
