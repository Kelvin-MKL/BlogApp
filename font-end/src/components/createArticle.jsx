import React, { useRef } from "react";
import axios from "axios";

function CreateArticle() {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const markdownRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const article = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      markdown: markdownRef.current.value,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/articles/create",
        article
      );
      if (response.data.Error == null) window.location = "/";
      console.log(response);
    } catch (err) {
      throw new Error(`Error: ${err}`);
    }

    console.log("A new artricle is created!");
  };

  return (
    <>
      <form action='/create' method='POST' onSubmit={handleSubmit}>
        <h2>New article!</h2>
        <label htmlFor='title'>Title</label>
        <br></br>
        <input
          required
          type='text'
          ref={titleRef}
          id='title'
          className='title'
        ></input>
        <br />
        <label htmlFor='description'>Description</label>
        <br></br>
        <textarea
          ref={descriptionRef}
          required
          type='text'
          id='description'
        ></textarea>
        <br />
        <label htmlFor='markdown'>Markdown</label>
        <br />
        <textarea ref={markdownRef} required type='text' id='markdown' />
        <br />
        <br />
        <button type='submit' className='btn btn-success'>
          Create
        </button>
        <a href='/' className='btn btn-secondary'>
          Cancel
        </a>
      </form>
    </>
  );
}

export default CreateArticle;
