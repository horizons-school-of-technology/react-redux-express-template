import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import actions from '../actions/index';
import { Redirect } from 'react-router';

//material ui
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
// import StarBorder from 'material-ui/svg-icons/toggle/star-border';

// const logo = require('../assets/visuals/CramberryMed.png');


class Students extends Component {
    onLogout(e) {
        e.preventDefault();
        this.props.logout();
    }
    math() {
        return (
            <div style={styles.root}>
                <h2 style={styles.subHeader}>
                    Mathematics
                </h2>
                <GridList
                  cellHeight={240}
                  cols={4}
                  style={styles.gridList}
                >
                    {/* <Subheader>
                        <h2>
                            Mathematics
                        </h2>
                    </Subheader> */}
                    {mathData.map((tile) => (
                    <GridTile
                        // key={tile.img}
                        key={tile.key}
                        title={tile.title}
                        subtitle={tile.author}
                        // actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                    >
                        <img src={tile.img} />
                    </GridTile>
                  ))}
                </GridList>
            </div>
        );
    }
    econ() {
        return (
            <div style={styles.root}>
                <h2 style={styles.subHeader}>
                    Economics
                </h2>
                <GridList
                  cellHeight={240}
                  cols={4}
                  style={styles.gridList}
                >
                    {/* <Subheader>
                        <h2>
                            Economics
                        </h2>
                    </Subheader> */}
                    {econData.map((tile) => (
                    <GridTile
                        // key={tile.img}
                        key={tile.key}
                        title={tile.title}
                        subtitle={tile.author}
                        // actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                    >
                        <img src={tile.img} />
                    </GridTile>
                  ))}
                </GridList>
            </div>
        );
    }
    render() {
        if (!this.props.token) {
            return <Redirect to="/login"/>
        }
        return (
        <div>
            <div style={styles.center}>
                <img src="./visuals/CramberryMed.png"></img>
                {/* <h1>
                    CramBerry
                </h1> */}
            </div>
            {this.math()}
            {this.econ()}
            <div style={styles.center}>
                <span>
                    <RaisedButton primary={true} onClick={(e) => {this.onLogout(e)}}>&nbsp;&nbsp;&nbsp;Contribute&nbsp;&nbsp;&nbsp;</RaisedButton>
                    <RaisedButton onClick={(e) => {this.onLogout(e)}}>Logout</RaisedButton>
                </span>
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.reducer.token
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            dispatch(actions.logout());
        }
    }
}

Students = connect(mapStateToProps, mapDispatchToProps)(Students);

export default Students;

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        paddingBottom: '40px',
    },
    gridList: {
        width: 900,
        height: 600,
        overflowY: 'auto',
        fontFamily: 'helvetica',
        borderWidth: '1px solid grey',
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
    },
    subHeader: {
        color: 'grey',
    }
};

const mathData = [
    {
        img: 'https://images-na.ssl-images-amazon.com/images/I/41a28A84XhL._SX422_BO1,204,203,200_.jpg',
        title: 'Early Transcendentals',
        author: 'Stewart',
        key: 1,
    },
    {
        img: 'https://images-na.ssl-images-amazon.com/images/I/51bY4%2B%2BNbQL._SX258_BO1,204,203,200_.jpg',
        title: 'Early Transcendentals',
        author: 'Anton',
        key: 2,
    },
    {
        img: 'http://www1.udel.edu/udaily/2012/may/images/FrankMEA_200px%5b1%5d.jpg',
        title: 'Principles of Economics',
        author: 'Frank',
        key: 3,
    },
    {
        img: 'https://images-na.ssl-images-amazon.com/images/I/51M%2BQwL-KYL._SX436_BO1,204,203,200_.jpg',
        title: 'Probability',
        author: 'Pitman',
        key: 4,
    },
    {
        img: 'https://images-na.ssl-images-amazon.com/images/I/41a28A84XhL._SX422_BO1,204,203,200_.jpg',
        title: 'Early Transcendentals',
        author: 'Stewart',
        key: 5,
    },
    {
        img: 'https://images-na.ssl-images-amazon.com/images/I/51bY4%2B%2BNbQL._SX258_BO1,204,203,200_.jpg',
        title: 'Early Transcendentals',
        author: 'Anton',
        key: 6,
    },
    {
        img: 'http://www1.udel.edu/udaily/2012/may/images/FrankMEA_200px%5b1%5d.jpg',
        title: 'Principles of Economics',
        author: 'Frank',
        key: 7,
    },
    {
        img: 'https://images-na.ssl-images-amazon.com/images/I/51M%2BQwL-KYL._SX436_BO1,204,203,200_.jpg',
        title: 'Probability',
        author: 'Pitman',
        key: 8,
    },
    {
        img: 'https://images-na.ssl-images-amazon.com/images/I/41a28A84XhL._SX422_BO1,204,203,200_.jpg',
        title: 'Early Transcendentals',
        author: 'Stewart',
        key: 9,
    },
    {
        img: 'https://images-na.ssl-images-amazon.com/images/I/51bY4%2B%2BNbQL._SX258_BO1,204,203,200_.jpg',
        title: 'Early Transcendentals',
        author: 'Anton',
        key: 10,
    },
    {
        img: 'http://www1.udel.edu/udaily/2012/may/images/FrankMEA_200px%5b1%5d.jpg',
        title: 'Principles of Economics',
        author: 'Frank',
        key: 11,
    },
    {
        img: 'https://images-na.ssl-images-amazon.com/images/I/51M%2BQwL-KYL._SX436_BO1,204,203,200_.jpg',
        title: 'Probability',
        author: 'Pitman',
        key: 12,
    },
];
const econData = [
    {
        img: 'http://www1.udel.edu/udaily/2012/may/images/FrankMEA_200px%5b1%5d.jpg',
        title: 'Principles of Economics',
        author: 'Frank',
        key: 1,
    },
    {
        img: 'http://www1.udel.edu/udaily/2012/may/images/FrankMEA_200px%5b1%5d.jpg',
        title: 'Principles of Economics',
        author: 'Frank',
        key: 2,
    },
    {
        img: 'http://www1.udel.edu/udaily/2012/may/images/FrankMEA_200px%5b1%5d.jpg',
        title: 'Principles of Economics',
        author: 'Frank',
        key: 3,
    },
    {
        img: 'http://www1.udel.edu/udaily/2012/may/images/FrankMEA_200px%5b1%5d.jpg',
        title: 'Principles of Economics',
        author: 'Frank',
        key: 4,
    },
    {
        img: 'http://www1.udel.edu/udaily/2012/may/images/FrankMEA_200px%5b1%5d.jpg',
        title: 'Principles of Economics',
        author: 'Frank',
        key: 5,
    },
    {
        img: 'http://www1.udel.edu/udaily/2012/may/images/FrankMEA_200px%5b1%5d.jpg',
        title: 'Principles of Economics',
        author: 'Frank',
        key: 6,
    },
    {
        img: 'http://www1.udel.edu/udaily/2012/may/images/FrankMEA_200px%5b1%5d.jpg',
        title: 'Principles of Economics',
        author: 'Frank',
        key: 7,
    },
    {
        img: 'http://www1.udel.edu/udaily/2012/may/images/FrankMEA_200px%5b1%5d.jpg',
        title: 'Principles of Economics',
        author: 'Frank',
        key: 8,
    },
    {
        img: 'http://www1.udel.edu/udaily/2012/may/images/FrankMEA_200px%5b1%5d.jpg',
        title: 'Principles of Economics',
        author: 'Frank',
        key: 9,
    },
    {
        img: 'http://www1.udel.edu/udaily/2012/may/images/FrankMEA_200px%5b1%5d.jpg',
        title: 'Principles of Economics',
        author: 'Frank',
        key: 10,
    },
]
