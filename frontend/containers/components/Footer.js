import React from "react";
import Footercopyright from "./Footercopyright";

class Footer extends React.Component {
  render() {
    return (
      <footer
        className="page-footer"
        style={{
          background: "#d28e00"
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Welcome!</h5>
              <p className="grey-text text-lighten-4">
                Emory Course Critique is a site meant to help Emory students
                choose the best classes and professors. If you have any feedback
                or questions, feel free to ask us!
              </p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Useful Links</h5>
              <ul>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    About us
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    FAQ
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Feedback
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Footercopyright />
      </footer>
    );
  }
}

export default Footer;
