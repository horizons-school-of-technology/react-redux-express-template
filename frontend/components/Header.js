import React from 'react';
import { connect } from 'react-redux';
import Title from '../components/Title';
import PropTypes from 'prop-types';

const Header = ({name}) => {
    return (
        <div className="header">
          <div className="thumbnail"><img src="http://i.imgur.com/JOrrF.png" alt="/reddit.png"/></div>
          <Title name={name}/>
        </div>
    );
};

Header.propTypes = {
    name: PropTypes.string,
};

const mapStateToProps = (state) => {
    return {
        name: state.name
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
