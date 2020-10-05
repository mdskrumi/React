import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    // THIS IS THE ONLY TIME WE DIRECTLY ASSIGN VALUES TO STATE OBJECT. REST WE WILL USE SETSTATE METHOD
    this.state = {
      lat: null,
      lon: null,
    };
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
          errorMsg: "",
        });
      },
      (err) => {
        console.log(err);
        this.setState({
          errorMsg: err.message,
        });
      }
    );
  }

  render() {
    if (this.state.errorMsg && !this.state.lat && !this.state.lon) {
      return <p>Error: {this.state.errorMsg}</p>;
    } else if (!this.state.errorMsg && this.state.lat && this.state.lon) {
      return (
        <div>
          <p> Latitude: {this.state.lat} </p>
          <p> Longitude: {this.state.lon} </p>
        </div>
      );
    } else
      return (
        <div>
          <h1> Hasbunallahu </h1>
        </div>
      );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
