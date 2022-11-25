const express = require("express");
const router = express.Router(); 
const { Theme } = require("../models");  

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