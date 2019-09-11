import React from "react";
import Thumbnail from "./thumbnail";
import Nav from "./nav";
import Sidebar from "./sidebar";
import { Link } from "react-router-dom";

class Host extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <div className="grid medium">
          <div className="grid sidebar-left">
            <Sidebar />
            <div className="content">
              <Link className="button primary" to="/create">
                Host new place
              </Link>
              <hr />
              <h2>Places I'm hosting</h2>
              <div class="grid two">
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

export default Host;
