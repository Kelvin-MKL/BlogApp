const router = require("express").Router();
const auth = require("../middleware/auth");
let Article = require("../models/articlesModel");

// Prefix: /articles
// router.route("/").get((req, res) => {
//   Article.find()
//     .sort({ createdAt: "desc" })
//     .then((articles) => res.json(articles))
//     .catch((err) => res.status(400).json(`Error: ${err}`));
// });

router.get("/", (req, res) => {
  Article.find()
    .sort({ createdAt: "desc" })
    .then((articles) => res.json(articles))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// Create a new article
router.post("/create", (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const markdown = req.body.markdown;
  const username = "bin@bin";

  const newArticle = new Article({
    title,
    description,
    markdown,
    username,
  });

  newArticle
    .save()
    .then(() => res.json("Article created in the DB!"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// Edit an article
router.get("/:id", (req, res) => {
  Article.findById(req.params.id)
    .then((article) => res.json(article))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// Delete an article
router.delete("/:id", (req, res) => {
  Article.findByIdAndDelete(req.params.id)
    .then(() => res.json("Article deleted."))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// Update an article
router.post("/update/:id", (req, res) => {
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
