import React, {Component} from 'react'
import { connect } from 'react-redux';
import Body from  "./components/Body";
import Footer from "./components/Footer"

class MainPageContainer extends Component {
  render() {
    return(

      <div>
        <Body />
        <Footer />
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return{
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPageContainer);
