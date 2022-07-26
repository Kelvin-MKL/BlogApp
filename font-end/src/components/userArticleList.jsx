import React, { useState, useEffect } from "react";
import axios from "axios";
import authService from "../services/authService";

function UserArticleList() {
  const [isLoading, setIsLoading] = useState(true);
  const [userArticleList, setUserArticleList] = useState([
    {
      _id: "daf1",
      title: "art",
      description: "des",
      markup: "markup",
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "http://localhost:5000/articles/user",
        authService.getTokenHeader()
      );
      setUserArticleList(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const handleDelete = async (article) => {
    const list = [...userArticleList];
    const newList = list.filter((item) => item._id !== article._id);
    try {
      setUserArticleList(newList);
      const response = await axios.delete(
        `http://localhost:5000/articles/${article._id}`,
        authService.getTokenHeader()
      );

      console.log(response);
    } catch (err) {
      setUserArticleList(list);
      throw new Error(`Error: ${err}`);
    }
  };

  const handleEdit = (article) => {
    console.log(article._id);
  };
  return (
    <>
      {isLoading ? (
        "The page is loading"
      ) : (
        <>
          <p style={{ fontWeight: "bolder" }}>This is my article list!</p>
          {userArticleList.map((article) => (
            <div key={article._id} className='article-wrapper-left expand'>
              <h4>{article.title}</h4>
              <p>{new Date(article.createdAt).toLocaleDateString()}</p>
              <p>{article.description}</p>
              <p>{article.markdown}</p>

              <a
                type='button'
                href={`/edit/${article._id}`}
                onClick={() => handleEdit(article)}
                className='btn-custom'
              >
                Edit
              </a>
              <button
                onClick={() => handleDelete(article)}
                className='btn-custom'
              >
                Delete
              </button>
            </div>
          ))}
        </>
      )}
    </>
  );
}

export default UserArticleList;
