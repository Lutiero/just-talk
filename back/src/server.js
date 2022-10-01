const express = require('express');
const cors = require('cors');
const app = express();
const themes = require('../routes/themes');
const users = require('../routes/users');
const topics = require('../routes/topics')

app.use(express.json());
app.use(cors());

//Routes
app.use('/themes', themes);

app.use('/users', users);

app.use('/topics', topics);


app.listen(3000, () => {
    console.log('Server on');
})