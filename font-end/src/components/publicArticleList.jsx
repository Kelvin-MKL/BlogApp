import React, { useState, useEffect } from "react";
import axios from "axios";

function PublicArticleList() {
  const [articleList, setArticleList] = useState([
    {
      _id: "daf1",
      title: "art",
      description: "des",
      markup: "markup",
      isExpanded: false,
    },
  ]);

  const handleOnClick = (article) => {
    const list = [...articleList];
    const index = list.indexOf(article);
    const newArt = list[index];
    newArt.isExpanded = !newArt.isExpanded;
    setArticleList(list);

    // article.isExpanded = true;
  };

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
          <div
            className={
              article.isExpanded
                ? "article-wrapper-left expand"
                : "article-wrapper-left normal"
            }
          >
            <h4>{article.title}</h4>
            <p id='date'>{new Date(article.createdAt).toLocaleDateString()}</p>
            <p>{article.description}</p>
            <p>{article.markdown}</p>
            <p id='author'>{article.nickname}</p>
          </div>
          <div
            onClick={() => handleOnClick(article)}
            type='button'
            className='article-wrapper-right'
          >
            {article.isExpanded ? "Read Less" : "Read More"}
          </div>
        </div>
      ))}
    </>
  );
}

export default PublicArticleList;
