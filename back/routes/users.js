const express = require('express');
const router = express.Router();
const { User } = require('../models');
const session = require('express-session');
const jwt = require('jsonwebtoken');
const md5 = require('md5');
const multer  = require('multer');

const upload = multer({ dest: 'uploads' });


router.use(async (req, res, next) => {
    const token = req.headers.sessionid;
    if(token) {
        const payload = jwt.verify(token, 'secret');
        const user = await User.findOne({email: payload.email});
        if(user) {
            req.current_user = user;
        }
    }
    next();
})


router.get('/', async (req, res) =>{
    const users = await User.findAll();
    res.status(200).json(users);
});

router.post('/create', upload.single('avatar') , async (req, res) =>{
    const {name, email, password} = req.body;
    const avatar = req.file;
    console.log("avatar: ", avatar);
    console.log("req.file: ", req.file);
    const encriptedPassword = md5(password); 

    const newUser = await User.create({
        name: name,
        email: email,
        imageProfile: '',
        password: encriptedPassword,
        isDoctor: false
    });
    const token = jwt.sign({
        email: email
    }, 'tads2022MasterClass', { expiresIn: '1d' });

    res.send({token: token});

}); 

router.post('/signin', async (req, res) => {   
    const email = req.body.email; 
    const encriptedPassword = md5(req.body.password); 

    const users = await User.findAll({
        where: {
            email: email,
            password: encriptedPassword
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