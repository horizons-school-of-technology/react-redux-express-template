import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Title from '../components/Title';
import Logo from '../components/Logo';
import { Header, Icon } from 'semantic-ui-react';


const HeadBar = ({ name, isModalOpen }) => {
  if(!isModalOpen) {
    return (
      <div className="titleBar2">
        <div className="titleString2">
          <Title name='DA MODAL!'/>
          {/* <Logo /> */}
        </div>
      </div>
    );
  }
      else {
        return (

          <div className="titleBar">
            <div className="titleString">
              <Title name={name}/>
              <Logo />
            </div>
          </div>
        );
      }
};


HeadBar.propTypes = {
    name: PropTypes.string,
    isModalOpen: PropTypes.bool
};

const mapStateToProps = (state) => {
    return {
        name: state.name,
        isModalOpen: state.isModalOpen
    };
};


export default connect(
    mapStateToProps,
)(HeadBar);
