const express = require('express');
const router = express.Router();
const { User } = require('../models');
const session = require('express-session');

router.get('/', async (req, res) =>{
    const users = await User.findAll();
    res.status(200).json(users);
});

router.post('/create', async (req, res) =>{
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
}); 

router.post('/signin', async (req, res) => {   
    console.log(req.body.email);
    const email = req.body.email; 
    const password = req.body.password;   

    const users = await User.findAll({
        where: {
            email: email,
            password: password
        }
      });     

    if (users !== null) {
        req.session.login = email;
    }

    console.log(req.session)

    //findByPk(id); //SELECT * FROM USER WHERE name = namer && password = password 
    res.status(200).json(req.session.login);
});


module.exports = router;