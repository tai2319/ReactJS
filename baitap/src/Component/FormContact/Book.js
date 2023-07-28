import { Formik } from "formik";

const AdminBook = () => {
  const handleSubmitform = (values) => {
    console.log(values);
  };
  return (
    <Formik
      initialValues={{
        title: "",
        soluong: "",
      }}
      onSubmit={handleSubmitform}
    >
      {({ values, handleChange, handleSubmit, onSubmit }) => (
        <>
          <div>
            <label>Tieu de</label>
            <input
              type="text"
              name="title"
              onChange={handleChange}
              value={values.title}
            />
          </div>
          <div>
            <label>So luong</label>
            <input
              type="text"
              name="soluong"
              onChange={handleChange}
              value={values.soluong}
            />
          </div>
          <button onClick={handleSubmit}>Submit</button>
          <table>
            <thead>
              <tr>
                <td>Tieu de</td>
                <td>so luong </td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              <tr></tr>
            </tbody>
          </table>
        </>
      )}
    </Formik>
  );
};
export default AdminBook;
