const express = require('express');
const router = express.Router();
const { User } = require('../models');
const session = require('express-session');
const jwt = require('jsonwebtoken');
const md5 = require('md5');
const multer  = require('multer');

const upload = multer({ dest: 'uploads' });



router.get('/:token/token', async (req, res) =>{
    const token = req.params.token;

    console.log('token do back', token);

    const verify = jwt.verify(token, 'tads2022MasterClass', function(err, decoded) {
        console.log(decoded.foo) 
      });

    res.status(200).json(verify);
});


router.post('/create', upload.single('avatar') , async (req, res) =>{
    const {name, email, password} = req.body;
    const encriptedPassword = md5(password); 
    const urlAvatar = `http://localhost:3000/${req.file.path}`;

    if(name.length === 0) {
        res.status(411).send({error: 'Os campos não podem ser vazios'});
        return
    }

    if(email.length === 0) {
        res.status(411).send({error: 'Os campos não podem ser vazios'});
        return
    }

    if(password.length === 0) {
        res.status(411).send({error: 'Os campos não podem ser vazios'});
        return
    }

   

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
        console.log('achou');
        res.status(200).send({token: token});
      } else {
        console.log('não achou');
        res.status(401).send({error: 'Credenciais inválidas'});
      }
      

    
    
});


module.exports = router;