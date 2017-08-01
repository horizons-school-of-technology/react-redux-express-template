import React from 'react';
import ReactDom from 'react-dom';
import {Redirect, Link} from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import '../assets/stylesheets/base.scss';

// const nav = {
//     backgroundColor: "#96070c",
//     fontColor: "#FFEBEE",
// }
class How extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
          <div>
              <div>
                  <AppBar
                      className="nav"
                      title="Bobcat Book Exchange"
                      iconClassNameRight="muidocs-icon-navigation-expand-more"
                      iconElementRight={<FlatButton label="Login" />}
                  />
              </div>
            <center>
                <h1>How It Works</h1>
            </center>
            <div className="flexcontainer">
                <div className="container">
                    <center>
                        <p>Buyers</p>
                    </center>
                    <ul>
                        <li>1. Search for a book</li>
                        <li>2. Contact Seller</li>
                        <li>3. Settle on a price with your seller</li>
                        <li>4. Decide when and where you want to meet the seller</li>
                        <li>5. Pick up your book!</li>

                    </ul>
                </div>
                <div className="container">
                    <center>
                        <p>Sellers</p>
                    </center>
                    <ul>
                        <li>1. Register and Login</li>
                        <li>2. Post a book and your Price</li>
                        <li>3. Wait to be contacted</li>
                        <li>4. Meet and Sell</li>
                        <li>5. Take down your book</li>

                    </ul>
                </div>
            </div>
          </div>
        );
    }
}

const style = {
    marginLeft: 20,
};

module.exports = How;
