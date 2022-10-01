const express = require('express');
const router = express.Router();
const { Sequelize, Op } = require("sequelize");
const { Theme, Topic, Reply } = require('../models');

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

router.get('/:themeId/topics/', async (req, res) => {
    const {themeId} = req.params;
    const topic = await Topic.findAll({where: {themeId: {[Op.eq]: themeId}},});
    res.status(200).json(topic)
});


module.exports = router;