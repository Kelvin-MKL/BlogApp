const router = require("express").Router();
const auth = require("../middleware/auth");
let Article = require("../models/articlesModel");
let User = require("../models/usersModel");

// Prefix: /articles
router.get("/", (req, res) => {
  Article.find()
    .sort({ createdAt: "desc" })
    .then((articles) => res.json(articles))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// My articles
router.get("/user", auth, (req, res) => {
  Article.find()
    .sort({ createdAt: "desc" })
    .then((articles) =>
      res.json(
        articles.filter((article) => article.username == req.user.username)
      )
    )
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// Create a new article
router.post("/create", auth, (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const markdown = req.body.markdown;
  const username = req.user.username;
  const nickname = req.user.nickname;

  const newArticle = new Article({
    title,
    description,
    markdown,
    username,
    nickname,
  });

  newArticle
    .save()
    .then(() => res.json("Article created in the DB!"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// Edit an article
router.get("/:id", auth, (req, res) => {
  Article.findById(req.params.id)
    .then((article) => res.json(article))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// Delete an article
router.delete("/:id", auth, (req, res) => {
  Article.findByIdAndDelete(req.params.id)
    .then(() => res.json("Article deleted."))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// Update an article
router.post("/update/:id", auth, (req, res) => {
  Article.findById(req.params.id)
    .then((article) => {
      article.title = req.body.title;
      article.description = req.body.description;
      article.markdown = req.body.markdown;

      article
        .save()
        .then(() => res.json("Article updated!"))
        .catch((err) => res.status(400).json(`Error: ${err}`));
    })
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
