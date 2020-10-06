import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
    // console.log(props);
    // this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  render() {
    return (
      <div className="ui segment">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.props.onSearchSubmit(this.state.term);
          }}
          className="ui form"
        >
          <div className="field">
            <label htmlFor="search-bar"> Image Search: </label>
            <input
              id="search-bar"
              type="text"
              placeholder="Write Here"
              onChange={(event) => {
                this.setState({ term: event.target.value });
              }}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
