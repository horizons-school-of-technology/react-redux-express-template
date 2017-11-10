import React from 'react';
import Title from '../components/Title';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = ({ name }) => {
  return (
    <div className="row">
      <Title name={name} />
      <Link to="/login">Login or Register</Link>
    </div>
  );
};

Header.propTypes = {
  name: PropTypes.string,
};

export default Header;
