import React from "react";

class Inputfield extends React.Component {
  render() {
    return (
      <div className="input-field">
        <input
          id="search"
          type="search"
          className="autocomplete"
          placeholder="Search for a class"
          required
          autofocus="autofocus"
        />
        <label
          className="label-icon"
          htmlFor="search"
          style={{
            color: "#9e9e9e !important"
          }}
        >
          <i
            className="material-icons"
            style={{
              position: "absolute",
              bottom: 12,
              color: "black !important"
            }}
          >
            search
          </i>
        </label>
        <i className="material-icons">close</i>
      </div>
    );
  }
}

export default Inputfield;
