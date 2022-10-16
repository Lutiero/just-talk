const express = require('express');
const cors = require('cors');
const app = express();
const themes = require('../routes/themes');
const users = require('../routes/users');
const topics = require('../routes/topics');
const session = require("express-session");

app.use(express.json());
app.use(cors());

//Session
app.use(session({
    secret: '2-TAP-RAD-UCDB',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true, maxAge:  600000 }
}));

//Routes
app.use('/themes', themes);

app.use('/users', users);

app.use('/topics', topics);


app.listen(3000, () => {
    console.log('Server on');
})