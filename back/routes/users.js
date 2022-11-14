const express = require('express');
const router = express.Router();
const { User } = require('../models');
const session = require('express-session');
const jwt = require('jsonwebtoken');
const md5 = require('md5');
const multer  = require('multer');

const upload = multer({ dest: 'uploads' });



router.get('/', async (req, res) =>{
    const users = await User.findAll();
    res.status(200).json(users);
});

router.post('/create', upload.single('avatar') , async (req, res) =>{
    const {name, email, password} = req.body;
    const encriptedPassword = md5(password); 
    const urlAvatar = `http://localhost:3000/${req.file.path}`;

    const newUser = await User.create({
        name: name,
        email: email,
        imageProfile: urlAvatar,
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

    const user = await User.findOne({
        where: {
            email: email,
            password: encriptedPassword
        }
      });

      if(user) {
        const token = jwt.sign({
            email: email
        }, 'tads2022MasterClass', { expiresIn: '1d' });
        res.send({token: token});
      } else {
        res.status(401).send();
      }
      

    
    
});


module.exports = router;