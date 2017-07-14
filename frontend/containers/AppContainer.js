import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import Title from '../components/Title';
import TutorHomeComponent from '../components/TutorHomeComponent';
import StudentHomeComponent from '../components/StudentHomeComponent';



const AppContainer = (props) => {
    return (
        <div>
            <h1 className={'hometitle'}>Chat Rooms currently in Need</h1>
            <Route exact path="/tutor/home" component={TutorHomeComponent} />
            <Route exact path="/student/home" component={StudentHomeComponent} />
            <footer>
                <div>
                    <Link to="/tutor/home">/Tutor/Home</Link>
                </div>
                <div>
                    <Link to="/student/home">/Student/Home</Link>
                </div>
                <div>
                    <Link to="/">Home</Link>
                </div>
            </footer>

        </div>
    );
};

// AppContainer.propTypes = {
//     name: PropTypes.string,
// };
//
// const mapStateToProps = (state) => {
//     return {
//         name: state.name
//     };
// };
//
// const mapDispatchToProps = (/* dispatch */) => {
//     return {
//     };
// };

export default AppContainer;
