import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ArticleForm from "./articleForm";

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

  const handleChangeTitle = (e) => {
    const temp = { ...article };
    temp.title = e.target.value;
    setArticle(temp);
  };

  const handleChangeDescription = (e) => {
    const temp = { ...article };
    temp.description = e.target.value;
    setArticle(temp);
  };

  const handleChangeMarkdown = (e) => {
    const temp = { ...article };
    temp.markdown = e.target.value;
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
          currentArticle
        );
        if (response.data.Error == null) window.location = "/";
        console.log("A new artricle is created!");
        console.log(response);
      } catch (err) {
        throw new Error(`Error: ${err}`);
      }
    else {
      try {
        const response = await axios.post(
          `http://localhost:5000/articles/update/${paramId}`,
          currentArticle
        );
        if (response.data.Error == null) window.location = "/";
        console.log("Artricle is updated!");
        console.log(response);
      } catch (err) {
        throw new Error(`Error: ${err}`);
      }
    }
  };

  useEffect(() => {
    console.log(paramId);
    if (paramId === "new") {
      resetState();
      return;
    }

    const fetchArticle = async () => {
      const { data } = await axios.get(
        `http://localhost:5000/articles/${paramId}`
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
        onChangeTitle={handleChangeTitle}
        onChangeDescription={handleChangeDescription}
        onChangeMarkdown={handleChangeMarkdown}
      ></ArticleForm>
    </>
  );
}

export default EditArticle;
