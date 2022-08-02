const FormButton = ({ paramId }) => {
  return (
    <>
      <button type='submit' className='btn btn-success'>
        {paramId === "new" ? "Create" : "Update"}
      </button>
    </>
  );
};

export default FormButton;
