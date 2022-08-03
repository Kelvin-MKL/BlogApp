const FormButton = ({ paramId }) => {
  return (
    <>
      <button type='submit' className='btn-custom'>
        {paramId === "new" ? "Create" : "Update"}
      </button>
    </>
  );
};

export default FormButton;
