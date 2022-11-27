const express = require("express");
const router = express.Router(); 
const { ThemeUser } = require("../models");  
const { Theme } = require("../models"); 
const { Op } = require("sequelize");

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

router.post("/findGroup", async (req, res) => {
  const titleTheme = req.body.titleTheme; 
  const userId = req.currentUser.id; 
    
  const userTheme = await ThemeUser.findAll({
    where: {
      userId: userId
    },
  }); 
       
  var arrayThemeId = userTheme.map(a => a.themeId);

  const themesOfUser = await Theme.findAll({
    where: {
      id: arrayThemeId,
      title: titleTheme
    },
  });
  console.log('themesOfUser', themesOfUser); 
  
  // var teste = Theme.findAll({ where: { title: { [Op.like]:  titleTheme } } })
  // .then(teste => {
  //   res.send({teste});
  // }); 

  if (themesOfUser) {
    res.status(200).send({ themesOfUser });
  } else { 
    res.status(401).send({ error: "Group not found" });
  }
});

module.exports = router;