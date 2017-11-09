import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Feed = () => {
    return (
        <div className="feed">
          <ul>
            <li>Temp Post</li>
          </ul>
        </div>
    );
};

Feed.propTypes = {
};

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Feed);
