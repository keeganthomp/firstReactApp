import React, { Component } from "react";
import "../styles/App.css";
import Earthquakes from "../components/EarthquakesList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">
          <div className="my-header">
            <h1>Earthquakes!</h1>
            <Earthquakes />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
