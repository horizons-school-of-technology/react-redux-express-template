import React from "react";
import Title from "./Title";

class Body extends React.Component {
  render() {
    return (
      <div className="body-container">
        <div className="container">
          <div className="row">
            <div
              style={{
                height: "9vh"
              }}
            />
            <Title />
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
