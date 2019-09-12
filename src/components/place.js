import React from "react";
import Nav from "./nav";
import axios from "axios";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Place extends React.Component {
  state = {
    place: {
      type: {
        name: ""
      },
      amenities: [{ name: "", icon: "" }],
      host: {
        avatar: "",
        name: ""
      },
      rating: 0,
      reviews: [{ author: "", date: "" }],
      image: []
    },
    images: [
      "https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg",
      "https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg",
      "https://q-ak.bstatic.com/images/hotel/max1280x900/186/186223171.jpg",
      "https://r-ak.bstatic.com/images/hotel/max1280x900/186/186223178.jpg",
      "https://r-ak.bstatic.com/images/hotel/max1280x900/186/186223178.jpg",
      "https://q-ak.bstatic.com/images/hotel/max1280x900/186/186223180.jpg",
      "https://q-ak.bstatic.com/images/hotel/max1280x900/186/186223186.jpg",
      "https://r-ak.bstatic.com/images/hotel/max1280x900/186/186223190.jpg",
      "https://q-ak.bstatic.com/images/hotel/max1280x900/186/186223195.jpg",
      "https://q-ak.bstatic.com/images/hotel/max1280x900/186/186223199.jpg"
    ],
    selectedImage: "",
    searchTerm: "",
    bookingStartDate: "",
    bookingEndDate: ""
  };
  handleChange = date => {
    this.setState({ bookingStartDate: date });
  };
  dateChange = date => {
    this.setState({ bookingEndDate: date });
  };

  toggleLike = e => {
    let newPlaces = this.state.places.map(p => {
      if (p.id === e.id) {
        let newPlace = Object.assign({}, p);
        newPlace.liked = !newPlace.liked;
        return newPlace;
      }
      return p;
    });
    this.setState({ newPlaces });
  };

  getLiked = () => this.state.places.filter(p => p.liked);
  showFiltered = () =>
    this.state.places.filter(p => p.title.includes(this.state.searchTerm));

  search = e => {
    this.setState({
      searchTerm: e.target.value
    });
  };

  selectImage = i => {
    this.setState({
      selectedImage: this.state.images[i]
    });
  };
  gotoPlacePage = e => {
    e.preventDefault();
    this.props.history.push({
      pathname: `/place/id`,
      name: "Name"
    });
  };

  componentWillMount() {
    axios
      .get(`http://localhost:4000/place/${this.props.match.params.id}`)
      .then(res => {
        console.log(res.data);
        this.setState({
          place: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <>
        <Nav />
        <div className="gallery">
          <div
            className="image-main"
            style={{
              backgroundImage: `url(${this.state.selectedImage})`
            }}
          >
            <button className="icon">
              <i className="far fa-heart"></i>
            </button>
          </div>
          <div className="thumbnails">
            {this.state.images.map((e, i) => (
              <div
                className="thumbnail selected"
                style={{
                  backgroundImage: `url(${e})`
                }}
              />
            ))}
          </div>
        </div>
        <div className="grid medium">
          <div className="grid sidebar-right">
            <div className="content">
              <h1>{this.state.place.title}</h1>
              <small>
                <i className="fas fa-map-marker-alt"></i>
                <span>
                  {this.state.place.city}, {this.state.place.country}
                </span>
              </small>
              <div className="user">
                <div
                  className="avatar"
                  style={{
                    backgroundImage:
                      "https://randomuser.me/api/portraits/women/2.jpg)"
                  }}
                ></div>
                <div className="name">
                  <small>Hosted by</small>
                  <span>{this.state.place.host.name}</span>
                </div>
              </div>
              <div className="card specs">
                <div className="content">
                  <ul className="grid two">
                    <li>
                      <i className="fas fa-fw fa-home"></i>
                      {this.state.place.type.name}
                    </li>
                    <li>
                      <i className="fas fa-fw fa-user-friends"></i>
                      {this.state.place.guests} Guests
                    </li>
                    <li>
                      <i className="fas fa-fw fa-bed"></i>7 bedrooms
                    </li>
                    <li>
                      <i className="fas fa-fw fa-bath"></i>
                      {this.state.place.bathrooms} Bathrooms
                    </li>
                  </ul>
                </div>
              </div>
              <p>{this.state.place.description}</p>
              <h3>Amenities</h3>
              <div className="card specs">
                <div className="content">
                  <ul className="grid two">
                    <li>
                      <i className="fas fa-utensils"></i>Kitchen
                    </li>
                    <li>
                      <i className="fas fa-dumbbell"></i>Gym
                    </li>
                    <li>
                      <i className="fas fa-dumbbell"></i>Wi-Fi
                    </li>
                    <li>
                      <i className="fas fa-tshirt"></i>Iron
                    </li>
                    <li>
                      <i className="fas fa-swimmer"></i>Swimming Pool
                    </li>
                    <li>
                      <i className="fas fa-wind"></i>Air Conditioning
                    </li>
                    <li>
                      <i className="fas fa-tv"></i>TV
                    </li>
                  </ul>
                </div>
              </div>
              <div className="reviews">
                <h2>{this.state.place.reviews.length} Reviews</h2>
                <form>
                  <div className="group">
                    <label>Leave a review</label>
                    <textarea></textarea>
                    <div className="rating">
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                    </div>
                    <button className="primary small">Submit</button>
                  </div>
                </form>
                <div className="card review">
                  <div className="content">
                    <div className="user">
                      <div
                        className="avatar"
                        style={{
                          backgroundImage:
                            "https://randomuser.me/api/portraits/women/3.jpg)"
                        }}
                      ></div>
                    </div>
                    <div className="card review">
                      <div className="content">
                        <div className="user">
                          <div
                            className="avatar"
                            style={{
                              backgroundImage:
                                "https://randomuser.me/api/portraits/men/5.jpg)"
                            }}
                          ></div>
                          <div className="name">
                            <small>
                              {moment(this.state.place.reviews.date).format(
                                "DD MMM YYYY "
                              )}
                            </small>
                            <span>{this.state.place.host.name}</span>
                          </div>
                        </div>
                        <div className="rating">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <p>We had a wonderful stay!</p>
                      </div>
                    </div>
                    <div className="card review">
                      <div className="content">
                        <div className="user">
                          <div
                            className="avatar"
                            style={{
                              backgroundImage:
                                "https://randomuser.me/api/portraits/women/7.jpg)"
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="name">
                        <small>
                          {moment(this.state.place.reviews.date).format(
                            "DD MMM YYYY "
                          )}
                        </small>
                        <span>Kitty</span>
                      </div>
                    </div>
                    <div className="rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <p>
                      It was beyond my imagination that my AirBnB experience
                      could be better than a 5 star resort hotel. It is one of
                      the most beautiful villa that I have had stayed so far in
                      the many countries travelled so far. The pictures have not
                      sufficiently described the details of the place.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="sidebar booking">
              <div className="card shadow">
                <div className="content large">
                  <h3>
                    ${this.state.place.price}
                    <small>/per night</small>
                  </h3>
                  <small>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                    <span>4 Reviews</span>
                  </small>
                  <form className="small">
                    <div className="group">
                      <label>Dates</label>
                      <DatePicker
                        placeholder="Check-in"
                        selected={this.state.bookingStartDate}
                        onChange={this.handleChange}
                      />
                      <DatePicker
                        placeholder="Check-out"
                        selected={this.state.bookingEndDate}
                        onChange={this.dateChange}
                      />
                    </div>
                    <div className="group">
                      <label>Guests</label>
                      <select>
                        {[...Array(this.state.place.guests)].map(
                          (guests, index) => (
                            <option value="1" key={index}>
                              Guests: {index + 1}
                            </option>
                          )
                        )}
                      </select>
                    </div>
                    <div className="group">
                      <button className="secondary full">
                        Book this place
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Place;
