const express = require('express');
const app = express();
const PORT = (process.env.PORT || 8050);

app.all('/*', (req, res, next) => {
  if (req.headers.host.slice(0, 4) === 'www.') {
    var newHost = req.headers.host.slice(4);
    return res.redirect(301, req.protocol + '://' + newHost + req.originalUrl);
  } else {
    next();     
  }
});

app.get('/', (req, res) => res.send('Home'));
app.get('/contact', (req, res) => res.send('Contact'));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));