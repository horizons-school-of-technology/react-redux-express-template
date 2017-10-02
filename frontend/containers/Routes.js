import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import MainPageContainer from './MainPageContainer';
import SignUpPageContainer from './SignUpPageContainer';
import LoginPageContainer from './LoginPageContainer';

export default class Routes extends Component {
   render() {
      return(
       <div>
         <Switch>
         <Route path="/" exact={true} component={SignUpPageContainer}/>
           //<Route path="/" exact={true} component={MainPageContainer}/>
           //<Route path="/signup" exact={true} component={SignUpPageContainer}/>
           <Route path="/loginn" exact={true} component={LoginPageContainer}/>
         </Switch>
       </div>
     )
   }
}
