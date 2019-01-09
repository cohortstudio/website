const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Home'))
app.get('/contact', (req, res) => res.send('Contact'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))