const express = require('express');
const { connectDb } = require('./database/index');

const app = express();

connectDb();

app.get('/users', (req, res) => {
    database.query('SELECT * FROM user_info');
})

app.listen(8000, () => console.log('THE SERVER IS RUNNING'));