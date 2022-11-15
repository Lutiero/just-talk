const express = require('express');
const cors = require('cors');
const app = express();
const themes = require('../routes/themes');
const users = require('../routes/users');
const authMiddleware = require('../routes/authMiddleware');

app.use(express.json());
app.use(cors());
app.use(express.static('.'));
// app.use(authMiddleware);

app.use('/themes', themes); 
app.use('/users', users); 

app.listen(3000, () => {
    console.log('Server on............');
})