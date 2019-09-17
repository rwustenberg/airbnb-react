import React from "react";
import Nav from "./nav";
import Thumbnail from "./thumbnail";
import StripeForm from "./Stripeform";
import { Elements, StripeProvider } from "react-stripe-elements";

class Confirm extends React.Component {
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
    dates: [],
    guests: [],

    users: {
      avatar: "",
      name: "",
      email: ""
    }
  };
  componentWillMount() {
    let dates = {
      bookingStartDate: this.props.location.bookingStartDate,
      bookingEndDate: this.props.location.bookingEndDate
    };
    let guests = this.props.location.guests;
    this.setState(dates, guests);
  }
  render() {
    return (
      <>
        <Nav />
        <div className="grid medium">
          <div className="grid sidebar-left">
            <div className="sidebar">
              <div className="card link">
                <Thumbnail place={this.state.place} />
              </div>
            </div>
            <div className="content">
              <h2>Confirm Booking</h2>
              <form>
                <div className="group">
                  <label>From</label>
                  <input
                    type="text"
                    value={this.state.dates.bookingStartDate}
                  />
                </div>
                <div className="group">
                  <label>To</label>
                  <input type="text" value={this.state.dates.bookingEndDate} />
                </div>
                <div className="group">
                  <label>Guests</label>
                  <select>{this.state.guests}</select>
                </div>
                <div className="group">
                  <label>Total: 3 nights</label>
                  <h2>$1,050</h2>
                </div>
                <button className="primary">Confirm</button>
              </form>
              <hr />
              <button onClick={this.props.history.goBack}>Cancel</button>
            </div>
          </div>
        </div>
        <StripeProvider apiKey={process.env.REACT_APP_STRIPE_PK}>
          <div className="stripe-form">
            <Elements>
              <StripeForm
                amount={this.state.total}
                description={this.state.place.title}
              />
            </Elements>
          </div>
        </StripeProvider>
      </>
    );
  }
}

export default Confirm;
