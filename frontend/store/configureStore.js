if (process.env.NODE_ENV === 'production') {
    console.log('production');
    module.exports = require('./configureStore.prod');
} else {
    module.exports = require('./configureStore.dev');
}
