const express = require('express');
const path = require('path');
const appRootPath = require('app-root-path');

const app = express();

const PORT = (process.env.PORT || 8050);
const APP_ROOT_PATH = appRootPath.toString();

app.set('view engine', 'pug');

app.use('/assets', express.static(path.join(APP_ROOT_PATH, 'assets')));

app.all('/*', (req, res, next) => {
  if (req.headers.host.slice(0, 4) === 'www.') {
    var newHost = req.headers.host.slice(4);
    return res.redirect(301, req.protocol + '://' + newHost + req.originalUrl);
  } else {
    next();     
  }
});

app.get('/', (req, res) => res.render('home'));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));