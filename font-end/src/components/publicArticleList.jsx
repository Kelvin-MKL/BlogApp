import React, { useState, useEffect } from "react";
import axios from "axios";

function PublicArticleList() {
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

  return (
    <>
      <p>This is article list!</p>
      {articleList.map((article) => (
        <div key={article._id} className='article-wrapper'>
          <h4>{article.title}</h4>
          <p>{new Date(article.createdAt).toLocaleDateString()}</p>
          <p>{article.description}</p>
          <p>{article.markdown}</p>
          <p>Posted by: {article.nickname}</p>
          <button className='btn btn-info'>Read More</button>
        </div>
      ))}
    </>
  );
}

export default PublicArticleList;
