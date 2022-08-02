import React from "react";
import FormButton from "./formButton";

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
        <FormButton paramId={paramId} />
      </form>
    </>
  );
};

export default ArticleForm;
