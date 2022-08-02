const FormButton = ({ paramId }) => {
  return (
    <>
      <button type='submit' className='btn btn-success'>
        {paramId === "new" ? "Create" : "Update"}
      </button>
      <a href='/' className='btn btn-secondary'>
        Cancel
      </a>
    </>
  );
};

export default FormButton;
