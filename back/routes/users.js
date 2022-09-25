const express = require('express');
const router = express.Router();
const { User } = require('../models');

router.get('/', async (req, res) =>{
    const users = await User.findAll();
    res.status(200).json(users);
});

router.post('/create', async (req, res) =>{
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const user = await user.findByPk(id);
    res.status(200).json(theme);
});

module.exports = router;