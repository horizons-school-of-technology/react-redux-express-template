import React from 'react';
import {Provider} from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppContainer from './AppContainer';
import NewPost from '../components/NewPost'
import PostPage from '../components/PostPage'

export default function Root({ store, history }) {
  // localStorage.setItem('webAddress', 'http://10.2.106.68:3000');
  localStorage.setItem('webAddress', 'http://localhost:3000');
  return (
    <Provider store={store}>
      <MuiThemeProvider>
        <HashRouter>
          <Switch>
            <Route exact path='/' component={AppContainer} />
            <Route exact path='/post/new' component={NewPost} />
            <Route exact path='/post/:postId' render={(props) => (
              <PostPage postId={props.match.params.postId} />
            )} />
          </Switch>
        </HashRouter>
      </MuiThemeProvider>
    </Provider>
  );
}
