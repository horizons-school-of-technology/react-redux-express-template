import React from "react";

class dropdown extends React.Component {
  render() {
    return (
      <ul id="dropdown1" className="dropdown-content">
        <li>
          <a href="#!">one</a>
        </li>
        <li>
          <a href="#!">two</a>
        </li>
        <li className="divider" />
        <li>
          <a href="#!">three</a>
        </li>
      </ul>
    );
  }
}

export default dropdown;
