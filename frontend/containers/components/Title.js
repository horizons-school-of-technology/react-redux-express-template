import React from "react";
import Inputfield from "./Inputfield";

class Title extends React.Component {
  render() {
    return (
      <div className="col l8 offset-l2">
        <h1
          className="center"
          style={{
            color: "white",
            textTransform: "uppercase",
            fontWeight: 300
          }}
        >
          <span
            style={{
              fontWeight: 400,
              transformStyle: "color:"
            }}
          >
            Emory
          </span>{" "}
          COURSE CRITIQUE
        </h1>
        <div
          style={{
            height: 30
          }}
        />
        <div className="row">
          <div className="col s12">
            <nav
              className
              style={{
                background: "white"
              }}
            >
              <div className="nav-wrapper">
                <form>
                  <Inputfield />
                </form>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Title;
