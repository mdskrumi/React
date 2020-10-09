import React from "react";
import ReactDOM from "react-dom";

import SeasonDisplay from "./components/SeasonDisplay";
import Spinner from "./components/Spinner";

class App extends React.Component {
  constructor(props) {
    super(props);

    // THIS IS THE ONLY TIME WE DIRECTLY ASSIGN VALUES TO STATE OBJECT. REST WE WILL USE SETSTATE METHOD
    this.state = {
      lat: null,
      lon: null,
    };
  }
  // THIS IS SAME AS INITIALIZING IN THE CONSTRUCTOR.
  //   state = {
  //     lat: null,
  //     lon: null,
  //   };

  // THIS GETS INVOCKED ONE TIME, SO LOADING DATA HERE IS A GOOD PLACE AND RECOMMANDED..
  componentDidMount() {
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

  renderContent() {
    if (this.state.errorMsg && !this.state.lat && !this.state.lon) {
      return <p>Error: {this.state.errorMsg}</p>;
    } else if (!this.state.errorMsg && this.state.lat && this.state.lon) {
      return (
        <div>
          <SeasonDisplay lat={this.state.lat} lon={this.state.lon} />
        </div>
      );
    } else return <Spinner text="Please Allow Location Permission" />;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
