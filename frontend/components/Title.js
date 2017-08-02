import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { browserHistory } from 'react-router';

const Title = () => {
    return (
        <div>
            <Link to="/login">Students</Link>
            <Link to="/writers">Writers</Link>
        </div>
    );
};

// Title.propTypes = {
//     name: PropTypes.string,
// };


export default Title;
