import React from "react";
import Thumbnail from "./thumbnail";
import Nav from "./nav";
import Sidebar from "./sidebar";

class Bookings extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <div className="grid medium">
          <div className="grid sidebar-left">
            <Sidebar />
            <div className="content">
              <h2>Upcoming Trips</h2>
              <div className="grid two">
                <Thumbnail />
              </div>
              <h2>Past Trips</h2>
              <div className="grid two">
                <Thumbnail />
                <Thumbnail />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Bookings;
