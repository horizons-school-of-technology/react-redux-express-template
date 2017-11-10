import createHistory from 'history/createBrowserHistory';
export const history = createHistory();

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./configureStore.prod');
} else {
    module.exports = require('./configureStore.dev');
}
