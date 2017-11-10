import PropTypes from 'prop-types';
import React from 'react';
import {Provider} from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppContainer from './AppContainer';
import NewPost from '../components/NewPost'
import PostPage from '../components/PostPage'
import DevTools from './DevTools';

export default function Root({ store, history }) {
  localStorage.setItem('webAddress', 'http://10.2.106.68:3000');
  // localStorage.setItem('webAddress', 'http://localhost:3000');
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <HashRouter>
            <Switch>
              <Route exact path='/' render={()=><AppContainer history={history}/>}/>
              <Route exact path='/post/new' render={()=><NewPost history={history}/>}/>
              <Route exact path='/post/:postId' render={(props) => {
                return <PostPage postId={props.match.params.postId} />
              }} />
            </Switch>
          </HashRouter>
        </MuiThemeProvider>
      </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
};
