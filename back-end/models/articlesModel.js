const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const articleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
    },
    description: {
      type: String,
      required: true,
    },
    markdown: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      trim: true,
    },
    nickname: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
