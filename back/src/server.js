const express = require('express');
const cors = require('cors');
const app = express();
const themes = require('../routes/themes');
const users = require('../routes/users');
const topics = require('../routes/topics');
const session = require("express-session");
const replies = require('../routes/replies');
const authMiddleware = require('../routes/authMiddleware');

app.use(express.json());
app.use(cors());
app.use(express.static('.'));
app.use(authMiddleware);

//Routes
app.use('/themes', themes); 
app.use('/users', users); 
app.use('/topics', topics); 
app.use('/replies', replies);


app.listen(3000, () => {
    console.log('Server on');
})