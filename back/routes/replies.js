const express = require('express');
const router = express.Router();
const { Sequelize, Op } = require("sequelize");
const { Topic, Reply } = require('../models');


router.post('/:topicId', async (req, res) => {
    const { topicId } = req.params;
    const content = req.body.content;
    const newReply = Reply.create({
        content: content,
        userId: 1,
        topicId: topicId
    });


    const topic = await Topic.findOne({ where: { id: topicId } });
    const newRepliesAmount = topic.repliesAmount + 1;
    await Topic.update({ repliesAmount: newRepliesAmount }, {
        where: {
          id: topicId
        }
      });
    res.status(201).json(newReply);
});


module.exports = router;