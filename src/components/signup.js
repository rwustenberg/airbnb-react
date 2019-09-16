import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Signup extends React.Component {
  state = {
    user: {
      name: "",
      email: "",
      password: "",
      location: ""
    }
  };
  signup = e => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_MONGO}/signup`, this.state.user)
      .then(res => {
        localStorage.setItem("token", res.data);
        this.props.history.push({
          pathname: `/`
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  changeField = (e, field) => {
    let user = this.state.user;
    user[field] = e.target.value;
    this.setState({ user });
  };

  render() {
    return (
      <div className="grid center middle tall image">
        <div className="card small">
          <div className="content">
            <div className="logo"></div>
            <form onSubmit={this.signup}>
              <div className="group">
                <label>Name</label>
                <input
                  type="text"
                  value={this.state.user.name}
                  onChange={e => this.changeField(e, "name")}
                />
              </div>
              <div className="group">
                <label>Email</label>
                <input
                  type="email"
                  value={this.state.user.email}
                  onChange={e => this.changeField(e, "email")}
                />
              </div>
              <div className="group">
                <label>Password</label>
                <input
                  type="password"
                  value={this.state.user.password}
                  onChange={e => this.changeField(e, "password")}
                />
              </div>
              <div className="group">
                <label>Location</label>
                <input
                  type="text"
                  value={this.state.user.location}
                  onChange={e => this.changeField(e, "location")}
                />
              </div>
              <div className="group">
                <label>Profile Picture</label>
                <input type="file" />
              </div>
              <button className="primary" disabled="">
                Signup
              </button>
            </form>

            <p clasNames="footer">
              Already have an account? <Link to="/login"> Login </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
