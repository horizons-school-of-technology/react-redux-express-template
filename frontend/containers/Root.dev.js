import PropTypes from 'prop-types';
import React from 'react';
import {Provider} from 'react-redux';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import AppContainer from './AppContainer.js';
import DevTools from './DevTools';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

export default function Root() {
  return (
    <div>
      <Router history={history}>
        <Route path="/" component={AppContainer}/>
        {/* <Route exact path="/" render={() => (<HomeComponent amanda={amanda}/> )} />
        <Route exact path="/student/home" render={() => (<StudentHomeComponent socket={socket}/> )} />
        <Route exact path="/tutor/register" render={() => (<TutorRegisterComponent socket={socket}/> )} />
        <Route exact path="/tutor/home" render={() => (<TutorHomeComponent socket={socket}/> )} /> */}
      </Router>
    </div>
  );
}

Root.propTypes = {
};
