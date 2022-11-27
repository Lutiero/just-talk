const express = require("express");
const router = express.Router(); 
const { ThemeUser } = require("../models");  
const { Theme } = require("../models"); 
const session = require("express-session"); 

router.get("/findUserGroup", async (req, res) => {
    const userId = req.currentUser.id; 
    
    const userTheme = await ThemeUser.findAll({
      where: {
        userId: userId
      },
    });
     
    var arrayThemeId = userTheme.map(a => a.themeId);
 
    const themesOfUser = await Theme.findAll({
        where: {
          id: arrayThemeId
        },
    });

    if (themesOfUser) {
      res.status(200).send({ themesOfUser });
    } else { 
      res.status(401).send({ error: "Groups of User not found" });
    }
});

router.get("/findGroup", async (req, res) => {
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