const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const auth = require('./backend/auth');
const api = require('./backend/routes');
const cookieSession = require('cookie-session');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieSession({
  keys: [process.env.SECRET || 'super duper secret string']
}));

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/public/index.html'); // For React/Redux
});

app.use('/api/user', auth);
app.use('/api', api);

app.listen(PORT, error => {
  error
  ? console.error(error)
  : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
});
