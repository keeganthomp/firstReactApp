import React, { Component } from "react";
import "../styles/App.css";
import Earthquakes from "../components/EarthquakesList";
import EarthquakeInfo from "../components/EarthquakeInfo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">
          <div className="my-header">Earthquakes!</div>
        </div>
        <EarthquakeInfo />
        <Earthquakes />
      </div>
    );
  }
}

export default App;
