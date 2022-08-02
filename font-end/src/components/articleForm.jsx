import React from "react";
import FormButton from "./formButton";

const ArticleForm = ({ paramId, content, onSubmit, onChange }) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <div className='form-container'>
          <h4>Sharing is caring! </h4>
          <label htmlFor='title' className='label title'>
            Title
          </label>
          <br></br>
          <input
            required
            type='text'
            id='title'
            className='title'
            name='title'
            onChange={onChange}
            value={content.title}
          ></input>
          <br />
          <label htmlFor='description' className='label description'>
            Description
          </label>
          <br />
          <textarea
            required
            type='text'
            id='description'
            name='description'
            onChange={onChange}
            value={content.description}
          ></textarea>
          <br />
          <label htmlFor='markdown' className='label markdown'>
            Markdown
          </label>
          <br />
          <textarea
            required
            type='text'
            id='markdown'
            name='markdown'
            onChange={onChange}
            value={content.markdown}
          ></textarea>
          <FormButton paramId={paramId} />
        </div>
      </form>
    </>
  );
};

export default ArticleForm;
