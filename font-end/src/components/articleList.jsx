import React, { useState, useEffect } from "react";

function ArticleList() {
  const [articleList, setArticleList] = useState([
    {
      title: "art1",
      description: "des1",
      markup: "markup1",
    },
    {
      title: "art2",
      description: "des2",
      markup: "markup3",
    },
  ]);

  useEffect(() => {});

  return (
    <>
      <p>This is article list!</p>
      {articleList.map((article) => (
        <div key={article.title} className='article-wrapper'>
          <h4>{article.title}</h4>
          <p>{article.description}</p>
          <p>{article.markup}</p>
          <button className='btn btn-info'>Read More</button>
          <button className='btn btn-primary'>Edit</button>
          <button className='btn btn-danger'>Delete</button>
        </div>
      ))}
    </>
  );
}

export default ArticleList;
