import React from 'react';
import ReactDOM from 'react-dom';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import {Redirect, Link} from 'react-router-dom';
import How from './how';
import styles from '../assets/stylesheets/base.scss';

let imgUrl = './quad2.jpg';
const style = {
    margin: 12,
    //fontFamily: "Courier",
    backgroundColor: "#96070c",
    fontColor: "#96070c"
};
const button = {
    margin: 12,
    fontFamily: "Courier",
    backgroundColor: "#96070c",
    //backgroundColor: "#96070c",
};
// const nav = {
//     backgroundColor: "#96070c",
//     fontColor: "#FFEBEE",
// }
class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        return (
        <div>
            <AppBar
                className='nav'
                title="Bobcat Book Exchange"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                iconElementRight={<FlatButton label="Login" containerElement={<Link to="/login" />}
            />
            <div style={style}>
            <center>
                <h1>Bobcat Book Exchange</h1>
            </center>
            <center>
                <RaisedButton label="Buy A Book" style={button} />
                <RaisedButton label="Sell A Book" style={button} />
                <RaisedButton
                    label="How It Works"
                    style={button}
                    containerElement={<Link to="/how" />}
                />
            </center>
            </div>
        </div>
        )
    }

}

module.exports = Home;
