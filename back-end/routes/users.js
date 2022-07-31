const router = require("express").Router();
let User = require("../models/usersModel");
const bcrypt = require("bcrypt");

// Register
router.post("/register", (req, res) => {
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

module.exports = router;
