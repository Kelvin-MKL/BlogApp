import React, { useState, useEffect } from "react";
import axios from "axios";

function ArticleList() {
  const [articleList, setArticleList] = useState([
    {
      _id: "daf1",
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
    const list = [...articleList];
    const newList = list.filter((item) => item._id !== article._id);
    try {
      setArticleList(newList);
      const response = await axios.delete(
        `http://localhost:5000/articles/${article._id}`
      );

      console.log(response);
    } catch (err) {
      setArticleList(list);
      throw new Error(`Error: ${err}`);
    }
  };

  const handleEdit = (article) => {
    console.log(article._id);
  };
  return (
    <>
      <p>This is article list!</p>
      {articleList.map((article) => (
        <div key={article._id} className='article-wrapper'>
          <h4>{article.title}</h4>
          <p>{new Date(article.createdAt).toLocaleDateString()}</p>
          <p>{article.description}</p>
          <p>{article.markdown}</p>
          <button className='btn btn-info'>Read More</button>
          <a
            href={`/edit/${article._id}`}
            onClick={() => handleEdit(article)}
            className='btn btn-primary'
          >
            Edit
          </a>
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
