//import
import "./App.css";
import React from "react";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";
import FullName from "./Component/Profile/FullName";
import Address from "./Component/Profile/Address";
import CollapsibleExample from "./Component/Profile/Navbar";
//the function that return the information 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CollapsibleExample />
      </header>
      <main className="App-main">
        <div className="Profile-carta">
          <div className="App-photo">
            <ProfilePhoto />
          </div>
          <div className="App-cartadetail">
            <div className="App-fullname">
              <FullName />
            </div>
            <div className="App-address">
              <Address />
            </div>
          </div>
        </div>
      </main>
      <footer className="App-footer">

      <div className="socialmedia">Created by Beji Mohamed &copy;
        <a href="#"><i className="fa-brands fa-linkedin"></i></a>
        <a href="#"><i className="fa-brands fa-square-twitter"></i></a>
        <a href="#"><i className="fa-brands fa-facebook"></i></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
