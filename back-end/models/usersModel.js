const mongoose = require("mongoose");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 5,
    },

    nickname: {
      type: String,
      required: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.generateAuthToken = function () {
  const jwtPrivateKey = process.env.jwtPrivateKey;
  const accessToken = jwt.sign(
    {
      _id: this._id,
      username: this.username,
      nickname: this.nickname,
    },
    jwtPrivateKey
  );

  return accessToken;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
