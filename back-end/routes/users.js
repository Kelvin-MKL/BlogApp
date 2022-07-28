const router = require("express").Router();
let User = require("../models/usersModel");

// router.route("/").get((req, res) => {
//   User.find()
//     .then((users) => res.json(users))
//     .catch((err) => res.status(400).json(`Error: ${err}`));
// });

// Register
router.route("/register").post((req, res) => {
  const username = req.body.username;
  const nickname = req.body.nickname;
  const password = req.body.password;
  const newUser = new User({
    username,
    nickname,
    password,
  });

  newUser
    .save()
    .then(() => res.json("User created!"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
