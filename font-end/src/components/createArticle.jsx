import React, { useState, useRef } from "react";

function CreateArticle() {
  const [newArticle, setNewArticle] = useState({
    title: "123",
    description: "456",
    markdown: "",
  });

  const handleChangeTitle = (e) => {
    const { value } = e.target;
    setNewArticle({ title: value });
    console.log(newArticle);
  };

  const handleChangeDescription = (e) => {
    const { value } = e.target;
    setNewArticle({ description: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
          onChange={handleChangeTitle}
          id='title'
          className='title'
        ></input>
        <br />
        <label htmlFor='description'>Description</label>
        <br></br>
        <textarea
          required
          type='text'
          onChange={handleChangeDescription}
          id='description'
        ></textarea>
        <br />
        <label htmlFor='markdown'>Markdown</label>
        <br />
        <textarea required type='text' id='markdown' />
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
