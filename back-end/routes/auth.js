const router = require("express").Router();
let User = require("../models/usersModel");
const bcrypt = require("bcrypt");

// Login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username: username });
  if (!user) return res.status(400).json({ error: "Invalid username" });
  const dbPassword = user.password;
  const validPassword = await bcrypt.compare(password, dbPassword);
  if (!validPassword) return res.status(400).json({ error: "Wrong password" });

  const token = user.generateAuthToken();
  res.json({ token: token, nickname: user.nickname });
});

module.exports = router;
