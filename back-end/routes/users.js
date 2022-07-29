const router = require("express").Router();
let User = require("../models/usersModel");
const bcrypt = require("bcrypt");
const { Router } = require("express");

// router.route("/").get((req, res) => {
//   User.find()
//     .then((users) => res.json(users))
//     .catch((err) => res.status(400).json(`Error: ${err}`));
// });

// Register
router.route("/register").post((req, res) => {
  const { username, nickname, password } = req.body;
  bcrypt.hash(password, 10).then((hashed) => {
    const newUser = new User({
      username: username,
      nickname: nickname,
      password: hashed,
    });

    newUser
      .save()
      .then(() => res.json("User created!"))
      .catch((err) => res.status(400).json(`Error: ${err}`));
  });
});

router.route("/login").post(async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username: username });
  if (!user) {
    return res.status(400).json({ error: "Invalid username" });
  }
  const dbPassword = user.password;
  bcrypt.compare(password, dbPassword).then((match) => {
    if (!match) {
      res.status(400).json({ error: "Wrong password" });
    } else {
      res.json("You are now logged in!");
    }
  });
});

module.exports = router;
