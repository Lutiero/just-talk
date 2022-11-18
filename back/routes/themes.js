const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");
const { Theme, Topic, Reply, User } = require("../models");
const { Sequelize } = require("sequelize");

router.get("/", async (req, res) => {
  const themes = await Theme.findAll();
  res.status(200).json(themes);
});

router.post("/create", async (req, res) => {
  const newTheme = await Theme.create(req.body);
  res.status(201).json(newTheme);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  // console.log(id);
  const theme = await Theme.findByPk(id);
  res.status(200).json(theme);
});

//TOPICS
router.get("/:themeId/topics/", async (req, res) => {
  const { themeId } = req.params;

  const topics = await Topic.findAll({
    where: {
      themeId: { [Op.eq]: themeId, }
    },
    include: User
  });

  console.log("topics", topics);

  res.status(200).json(topics);
});

router.get("/:themeId/topic", async (req, res) => {
  const { themeId } = req.params;
  const topic = await Topic.findByPk(themeId);
  const user = await User.findByPk(topic.userId);
  const topicData = {
    id: topic.id,
    content: topic.content,
    repliesAmount: 0,
    themeId: topic.themeId,
    userId: user.id,
    topicOwnerName: user.name,
    topicOwnerImageProfile: user.imageProfile,
    topicOwnerIsADoctor: user.isDoctor,
    createdAt: topic.createdAt,
    updatedAt: topic.updatedAt,
  };

  res.status(200).json(topicData);
});

router.post("/:themeId/topics", async (req, res) => {
  const { themeId } = req.params;

  const newTopic = Topic.create({
    content: req.body.content,
    userId: req.currentUser.id,
    themeId: themeId,
  });

  res.status(201).json(newTopic);
});

// REPLIES
router.get("/:topicId/replies", async (req, res) => {
  const { topicId } = req.params;
  const replies = await Reply.findAll({
    where: { topicId: { [Op.eq]: topicId } },
  });
  res.status(200).json(replies);
});

router.post("/:topicId/replies", async (req, res) => {
  const { topicId } = req.params;
  const newReply = Reply.create({
    content: req.body.content,
    userId: req.currentUser,
    topicId: topicId,
  });

  const topic = await Topic.findOne({ where: { id: topicId } });
  const newRepliesAmount = topic.repliesAmount + 1;
  await Topic.update(
    { repliesAmount: newRepliesAmount },
    {
      where: {
        id: topicId,
      },
    }
  );
  res.status(201).json(newReply);
});

module.exports = router;
