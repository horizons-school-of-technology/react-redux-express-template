const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const api = require('./backend/routes');
var auth = require('./backend/routes/auth');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/public/index.html'); // For React/Redux
});

app.use('/api', api);
app.use('/', auth(passport));

app.listen(PORT, error => {
    error
    ? console.error(error)
    : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
});
