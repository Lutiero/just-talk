const express = require('express');
const cors = require('cors');
const app = express();
const themes = require('../routes/themes');

app.use(express.json());
app.use(cors());

//Routes
app.use('/themes', themes);


app.listen(3000, () => {
    console.log('Server on');
})