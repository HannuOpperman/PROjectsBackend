const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const fs = require('node:fs');

// cors settings I needed
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST']
}));

// old faithful
app.get('/', (req, res) => {
  res.send('Hello (to you in this beautiful) World!');
});

// get request from the webapp but work from browser/postman

app.get('/projects', cors(), async (req, res) => {
    fs.readFile('data.js', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        res.send(data);
    });
});

// Starting point
app.listen(port, () => {
  console.log(`The FBI are not listening on http://localhost:${port}, because this server is`);
});