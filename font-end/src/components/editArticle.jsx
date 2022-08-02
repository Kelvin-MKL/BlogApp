import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ArticleForm from "./articleForm";
import authService from "../services/authService";

function EditArticle() {
  const { paramId } = useParams();
  const [article, setArticle] = useState({
    title: "",
    description: "",
    markdown: "",
  });

  const resetState = () => {
    const blank = { title: "", description: "", markdown: "" };
    setArticle(blank);
  };

  const handleOnChange = (e) => {
    const temp = { ...article };
    temp[e.target.name] = e.target.value;
    setArticle(temp);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const currentArticle = {
      title: article.title,
      description: article.description,
      markdown: article.markdown,
    };

    if (paramId === "new")
      try {
        const response = await axios.post(
          "http://localhost:5000/articles/create",
          currentArticle,
          authService.getTokenHeader()
        );
        if (response.data.Error == null) window.location = "/";
        console.log("A new artricle is created!");
      } catch (err) {
        throw new Error(`Error: ${err}`);
      }
    else {
      try {
        const response = await axios.post(
          `http://localhost:5000/articles/update/${paramId}`,
          currentArticle,
          authService.getTokenHeader()
        );
        if (response.data.Error == null) window.location = "/";
        console.log("Artricle is updated!");
      } catch (err) {
        throw new Error(`Error: ${err}`);
      }
    }
  };

  useEffect(() => {
    if (paramId === "new") {
      resetState();
      return;
    }

    const fetchArticle = async () => {
      const { data } = await axios.get(
        `http://localhost:5000/articles/${paramId}`,
        authService.getTokenHeader()
      );
      setArticle(data);
      console.log("fetching data");
    };
    fetchArticle();
    // eslint-disable-next-line
  }, [paramId === "new"]);
  return (
    <>
      <ArticleForm
        paramId={paramId}
        content={article}
        onSubmit={handleSubmit}
        onChange={handleOnChange}
      ></ArticleForm>
    </>
  );
}

export default EditArticle;
