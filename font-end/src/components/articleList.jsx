import React, { useState, useEffect } from "react";
import axios from "axios";

function ArticleList() {
  const [articleList, setArticleList] = useState([
    {
      title: "art",
      description: "des",
      markup: "markup",
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:5000/articles/");
      setArticleList(data);
    };
    fetchData();
  }, []);

  const handleDelete = async (article) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/articles/${article._id}`
      );

      console.log(response);
    } catch (err) {
      throw new Error(`Error: ${err}`);
    }
  };

  return (
    <>
      <p>This is article list!</p>
      {articleList.map((article) => (
        <div key={article._id} className='article-wrapper'>
          <h4>{article.title}</h4>
          <p>{article.description}</p>
          <p>{article.markup}</p>
          <button className='btn btn-info'>Read More</button>
          <button className='btn btn-primary'>Edit</button>
          <button
            onClick={() => handleDelete(article)}
            className='btn btn-danger'
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
}

export default ArticleList;
