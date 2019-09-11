import React from "react";
import Nav from "./nav";
import Sidebar from "./sidebar";

class Create extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <div className="grid medium">
          <div className="grid sidebar-left">
            <Sidebar />
            <div className="content">
              <h2>Host a new place</h2>
              <form>
                <div className="group">
                  <label>Title</label>
                  <input type="text" />
                </div>
                <div className="group">
                  <label>Description</label>
                  <textarea></textarea>
                </div>
                <div className="group">
                  <label>City or Town</label>
                  <input type="text" />
                </div>
                <div className="group">
                  <label>Country</label>
                  <input type="text" />
                </div>
                <div className="group">
                  <label>Price per Night (USD)</label>
                  <input type="number" />
                </div>
                <div className="group">
                  <label>Type</label>
                  <select>
                    {this.state.types.map((type, index) => (
                      <option>{type} </option>
                    ))}
                  </select>
                </div>
                <div className="group">
                  <label>Number of Rooms</label>
                  <input type="number" />
                </div>
                <div className="group">
                  <label>Number of Bathrooms</label>
                  <input type="number" />
                </div>
                <div className="group">
                  <label>Maximum number of Guests</label>
                  <input type="number" />
                </div>
                <div className="group">
                  <label>Upload Photos</label>
                  <input type="file" multiple />
                </div>
                <div className="group">
                  <label>Amenities</label>
                  <label className="checkbox">
                    <input type="checkbox" /> Swimming Pool
                  </label>
                  <label className="checkbox">
                    <input type="checkbox" /> Kitchen
                  </label>
                  <label className="checkbox">
                    <input type="checkbox" /> Wi-Fi
                  </label>
                  <label className="checkbox">
                    <input type="checkbox" /> TV
                  </label>
                  <label className="checkbox">
                    <input type="checkbox" /> Gym
                  </label>
                  <label className="checkbox">
                    <input type="checkbox" /> Iron
                  </label>
                  <label className="checkbox">
                    <input type="checkbox" /> Air Conditioning
                  </label>
                </div>
                <button className="primary">Publish this Place</button>
                <button className="cancel">
                  <i className="fas fa-times"></i>
                </button>
              </form>
            </div>
          </div>
          Name
        </div>
      </>
    );
  }
}

export default Create;
