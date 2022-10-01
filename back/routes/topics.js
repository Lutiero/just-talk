const express = require('express');
const router = express.Router();
const { Sequelize, Op } = require("sequelize");
const { Topic, Reply } = require('../models');

router.get('/:id', async (req, res) =>{
    const { id } = req.params;
    const topic = await Topic.findByPk(id);
    res.status(200).json(topic);
});


module.exports = router;
