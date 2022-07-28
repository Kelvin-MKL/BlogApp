import React from "react";

const ArticleForm = ({
  paramId,
  content,
  onSubmit,
  onChangeTitle,
  onChangeDescription,
  onChangeMarkdown,
}) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <p>Sharing is caring! </p>
        <label htmlFor='title'>Title</label>
        <br></br>
        <input
          required
          type='text'
          id='title'
          className='title'
          onChange={onChangeTitle}
          value={content.title}
        ></input>
        <br />

        <label htmlFor='description'>Description</label>
        <br />
        <textarea
          required
          type='text'
          id='description'
          onChange={onChangeDescription}
          value={content.description}
        ></textarea>
        <br />
        <label htmlFor='markdown'>Markdown</label>
        <br />
        <textarea
          required
          type='text'
          id='markdown'
          onChange={onChangeMarkdown}
          value={content.markdown}
        ></textarea>
        <button type='submit' className='btn btn-success'>
          {paramId === "new" ? "Create" : "Update"}
        </button>
        <a href='/' className='btn btn-secondary'>
          Cancel
        </a>
      </form>
    </>
  );
};

export default ArticleForm;
