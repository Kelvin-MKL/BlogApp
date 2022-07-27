import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function EditArticle() {
  const { id } = useParams();
  const [article, setArticle] = useState({
    title: "",
    description: "",
    markdown: "",
  });

  useEffect(() => {
    const fetchArticle = async () => {
      const { data } = await axios.get(`http://localhost:5000/articles/${id}`);
      setArticle(data);
    };
    fetchArticle();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <p>This the edit article! </p>
      <input value={article.title}></input>
      <br />

      <input value={article.description}></input>
      <br />
      <input value={article.markdown}></input>
    </>
  );
}

export default EditArticle;
