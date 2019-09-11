import React from "react";
import Sidebar from "./sidebar";
import Nav from "./nav";

class Profile extends React.Component {
  state = {
    form: [
      {
        label: "Name",
        type: "text",
        value: "John"
      },
      {
        label: "Email",
        type: "email",
        value: "everyjohn@everyjohn.com"
      },
      {
        label: "Location",
        type: "text",
        value: "Thailand"
      },
      {
        label: "Profile Picture"
      }
    ]
  };
  render() {
    return (
      <>
        <Nav />
        <div className="grid medium">
          <div class="grid sidebar-left">
            <Sidebar />
            <div className="content">
              <h2>My Profile</h2>
              <div>
                <form>
                  <div className="group">
                    <label>Name</label>
                    <input type="text" value="John" />
                  </div>
                  <div className="group">
                    <label>Email</label>
                    <input type="email" value="everyjohn@everyjohn.com" />
                  </div>
                  <div className="group">
                    <label>Location</label>
                    <input type="text" value="Thailand" />
                  </div>
                  <div className="group">
                    <label>Profile Picture</label>
                    <div className="user">
                      <div
                        className="avatar"
                        style={{
                          backgroundImage:
                            "url(https://randomuser.me/api/portraits/men/9.jpg)"
                        }}
                      />
                      <div className="name">
                        <input type="file" />
                      </div>
                    </div>
                  </div>
                  <button>Save Changes</button>
                </form>
              </div>
              <hr />
              <button className="secondary">Logout</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Profile;
