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

  if (req.file.size > 0) {
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

router.post("/addUserThemes/:themeId", async (req, res) => {

  const themeId = req.params.themeId;

  const verifyExistTheme = await Theme.findOne({
    where: {
      id: themeId
    },
  });

  const verifyUserInTheTheme = await ThemeUser.findOne({
    where: {
      themeId: themeId,
      userId: req.currentUser.id
    }
  });

  if(verifyUserInTheTheme) {
    res.status(200).send({success: true})
  }

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
    userId: req.currentUser.id,
  });

  res.status(201).send({ message: "ok" });
});

router.get("/getUserTheme/:themeId", async (req, res) => {
  const userId = req.currentUser.id;
  const themeId = req.params.themeId;

  const userTheme = await ThemeUser.findOne({
    where: {
      themeId: themeId,
      userId: userId
    }
  });

  if(userTheme) {
    res.status(200).send({message: 'ok'})
  } else {
    res.status(404).send({error: 'não encontrado relação de thema e usuário'})
  }

})

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

router.put("/update", upload.single("avatar"), async (req, res) => {
  const { name, email, password, newpassword } = req.body;
  const encriptedPassword = md5(password);
  
  const user = await User.findOne({
    where: {
      email: email,
      password: encriptedPassword,
    },
  });

  if (user) {
    const encriptedNewPassword = md5(newpassword);

    let urlAvatar = '';
    if (req.file.size > 0) {
      urlAvatar = `http://localhost:3000/${req.file.path}`
    } else {
      urlAvatar = user.urlAvatar;
    }

    await user.update({
      name: name,
      email: email,
      password: encriptedNewPassword,
      imageProfile: urlAvatar
    });
    await user.save();
    res.status(201).send(user);
  } else {
    res.status(404).send({ error: 'Password atual inválido' });
  }

});

module.exports = router;