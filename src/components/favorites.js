import React from "react";
//import { Link } from "react-router-dom";
import Thumbnail from "./thumbnail";
import Nav from "./nav";
import Sidebar from "./sidebar";
class Favourites extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <div className="grid medium">
          <div class="grid sidebar-left">
            <Sidebar />
            <div className="content">
              <h2>My Favorites</h2>
              <div className="grid two">
                <Thumbnail />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Favourites;
