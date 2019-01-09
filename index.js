const express = require('express')
const app = express()
const PORT = (process.env.PORT || 8050);

app.get('/', (req, res) => res.send('Home'))
app.get('/contact', (req, res) => res.send('Contact'))

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))