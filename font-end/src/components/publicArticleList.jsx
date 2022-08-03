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
      <p style={{ fontWeight: "bolder" }}>Public articles!</p>
      {articleList.map((article) => (
        <div key={article._id} className='df'>
          <div className='article-wrapper-left'>
            <h4>{article.title}</h4>
            <p>{new Date(article.createdAt).toLocaleDateString()}</p>
            <p>{article.description}</p>
            <p>{article.markdown}</p>
            <p style={{ fontWeight: "lighter", fontSize: "smaller" }}>
              {`Author: ${article.nickname}`}
            </p>
            <button className='btn-custom'>Read More</button>
          </div>
          <div type='button' className='article-wrapper-right'>
            Read More
          </div>
        </div>
      ))}
    </>
  );
}

export default PublicArticleList;
