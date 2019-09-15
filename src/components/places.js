import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Thumbnail from "./thumbnail";
import Nav from "./nav";

class Places extends React.Component {
  state = {
    places: [],
    types: [
      "All types",
      "Entire Villa",
      "Shared Villa",
      "Entire House",
      "Shared House",
      "Private Room"
    ]
  };

  componentWillMount() {
    //console.log("why won't I work");
    axios
      .get("http://localhost:4000/places")
      .then(res => {
        //console.log(res);
        this.setState({
          places: res.data
        });
        console.log(this.state.places);
      })
      .catch(err => {
        console.log("errrrr", err);
      });
  }

  render() {
    return (
      <>
        <Nav />
        <div className="filters">
          <select>
            {[...Array(10)].map((guests, index) => (
              <option value="1" key={index}>
                Guests: {index + 1}
              </option>
            ))}
          </select>
          <select>
            {this.state.types.map((type, index) => (
              <option value="1" key={index}>
                {type}{" "}
              </option>
            ))}
          </select>
          <input type="number" placeholder="max price" />
          <select>
            <option value="date">Latest</option>
            <option value="price">Price</option>
            <option value="rating">Rating</option>
          </select>
          <input type="text" className="search" placeholder="Search..." />
        </div>
        <div className="grid five large">
          {this.state.places.map((place, index) => (
            <Link className="card link" key={index} to={`/Place/${place._id}`}>
              <Thumbnail place={place} />
            </Link>
          ))}
        </div>
      </>
    );
  }
}

export default Places;
