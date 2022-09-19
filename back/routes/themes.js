const express = require('express');
const router = express.Router();
const { Theme } = require('../models');

router.get('/', async (req, res) =>{
    const themes = await Theme.findAll();
    res.status(200).json(themes);
});

router.post('/create', async (req, res) =>{
    const newTheme = await Theme.create(req.body);
    res.status(201).json(newTheme);
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const theme = await Theme.findByPk(id);
    res.status(200).json(theme);
});

module.exports = router;