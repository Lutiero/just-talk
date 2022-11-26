const express = require("express");
const router = express.Router(); 
const { UserTheme } = require("../models");  
const { Theme } = require("../models");  


router.post("/findUserGroup", async (req, res) => {
    const userId = req.body.userId;
  
    const userTheme = await UserTheme.find({
      where: {
        userId: userId
      },
    });

    const themesOfUser = await Theme.findAll({
        where: {
          id: userTheme.themeId
        },
    });

    if (themesOfUser) {
      res.status(200).send({ themesOfUser });
    } else { 
      res.status(401).send({ error: "Groups of User not found" });
    }
});

router.post("/findGroup", async (req, res) => {
  const titleTheme = req.body.titleTheme; 

  const theme = await Theme.findOne({
    where: {
      title: titleTheme
    },
  });

  if (theme) {
    res.status(200).send({ theme });
  } else { 
    res.status(401).send({ error: "Group not found" });
  }
});



module.exports = router;