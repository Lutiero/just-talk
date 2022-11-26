const express = require("express");
const router = express.Router();
const { User } = require("../models");
const { Theme } = require("../models");
const { ThemeUser } = require("../models");
const session = require("express-session");
const jwt = require("jsonwebtoken");
const md5 = require("md5");
const multer = require("multer");

const upload = multer({ dest: "uploads" });

router.get("/getusertofront", async (req, res) => {

  const token = req.headers.authorization.split(' ')[1];
  const emailDecoded = jwt.verify(token, "tads2022MasterClass");
  const user = await User.findOne({
    where: {
      email: emailDecoded.email,
    },
  });

  res.status(200).json({
    id: user.id,
    name: user.name,
    email: user.email,
    imageProfile: user.imageProfile,
    isDoctor: user.isDoctor,
  });
});

router.post("/create", upload.single("avatar"), async (req, res) => {
  const { name, email, password } = req.body;
  const encriptedPassword = md5(password);
  console.log('req.file', req.file);

  let urlAvatar = `http://localhost:3000/uploads/defaultAvatar/default_avatar`;

  if(req.file.size > 0) {
    urlAvatar = `http://localhost:3000/${req.file.path}`
  }

  if (name.length === 0) {
    res.status(411).send({ error: "Os campos não podem ser vazios" });
    return;
  }

  if (email.length === 0) {
    res.status(411).send({ error: "Os campos não podem ser vazios" });
    return;
  }

  if (password.length === 0) {
    res.status(411).send({ error: "Os campos não podem ser vazios" });
    return;
  }

  const newUser = await User.create({
    name: name,
    email: email,
    imageProfile: urlAvatar,
    password: encriptedPassword,
    isDoctor: false,
  });
  const token = jwt.sign(
    {
      email: email,
    },
    "tads2022MasterClass",
    { expiresIn: "1d" }
  );

  res.send({ token: token });
});

router.get("/addUserThemes", async (req, res) => {
  const userId = req.body.userId;
  const themeId = req.body.themeId; 
  
  const verifyExistTheme = await Theme.findOne({
    where: {
      id : themeId
    },
  });
 
  if (verifyExistTheme === null) {
    res.status(401).send({ error: "Tema inválido" });
    return;
  }
  
  var subscriberCount = verifyExistTheme.subscribersAmount;
  await Theme.update({
    subscribersAmount: subscriberCount + 1,
  }, 
  { 
    where: { id: themeId }, 
  });

  const user = await ThemeUser.create({
    themeId: themeId,
    userId: userId,
  });

  res.send("Usuário adicionado ao grupo");
});

router.post("/signin", async (req, res) => {
  const email = req.body.email;
  const encriptedPassword = md5(req.body.password);

  const user = await User.findOne({
    where: {
      email: email,
      password: encriptedPassword,
    },
  });

  if (user) {
    const token = jwt.sign(
      {
        email: email,
      },
      "tads2022MasterClass",
      { expiresIn: "1d" }
    );
    console.log("achou");
    console.log("token", token);
    res.status(200).send({ token: token });
  } else {
    console.log("não achou");
    res.status(401).send({ error: "Credenciais inválidas" });
  }
});

module.exports = router;