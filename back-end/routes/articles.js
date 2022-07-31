const router = require("express").Router();
let Article = require("../models/articlesModel");

// Prefix: /articles
// router.route("/").get((req, res) => {
//   Article.find()
//     .sort({ createdAt: "desc" })
//     .then((articles) => res.json(articles))
//     .catch((err) => res.status(400).json(`Error: ${err}`));
// });

router.route("/").get((req, res) => {
  Article.find()
    .sort({ createdAt: "desc" })
    .then((articles) => res.json(articles))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// Create a new article
router.route("/create").post((req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const markdown = req.body.markdown;
  const postBy = req.body.postBy;

  const newArticle = new Article({
    title,
    description,
    markdown,
    postBy,
  });

  newArticle
    .save()
    .then(() => res.json("Article created in the DB!"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// Edit an article
router.route("/:id").get((req, res) => {
  Article.findById(req.params.id)
    .then((article) => res.json(article))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// Delete an article
router.route("/:id").delete((req, res) => {
  Article.findByIdAndDelete(req.params.id)
    .then(() => res.json("Article deleted."))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// Update an article
router.route("/update/:id").post((req, res) => {
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
