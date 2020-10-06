import React from "react";

import unsplash from "../api/unsplash";

import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

// Convert this class to functional component.
// Use hooks to manage it's local state.
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      error_msg: null,
    };
  }
  // Handle Error - DONE
  onSearchSubmit = (term) => {
    // const response = await unsplash.get("/search/photos", {
    //   params: {
    //     query: term,
    //   },
    // });

    fetch("https://api.unsplash.com/search/photos/?query=" + term, {
      method: "GET",
      headers: {
        Authorization: "Client-ID R4Q_V32stbrWOzb3DpOntSfstan64mljhm-QftIjSCY",
      },
    })
      .then((response) => {
        console.log(response);
        if (response.status == 200) {
          // console.log("here");
          return response.json();
        } else throw "Something went wrong";
      })
      .then((response) => {
        this.setState({
          images: response.results,
        });
      })
      .catch((err) => {
        this.setState({
          error_msg: err,
        });
        console.log(err);
      });
  };

  renderContent() {
    if (!this.state.error_msg) {
      return <ImageList images={this.state.images} />;
    } else {
      return (
        <h2
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            color: "red",
          }}
        >
          {this.state.error_msg}
        </h2>
      );
    }
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <h4>Found: {this.state.images.length} Images</h4>
        {this.renderContent()}
      </div>
    );
  }
}

export default App;
