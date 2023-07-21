import { Formik } from "formik";

import React from "react";
import validateForm from "./validation";

const Regex = () => {
  const handleFormSubmit = (values, formik) => {
    console.log(values);
    formik.resetForm();
  };

  // const regexEmail = "/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/";
  // const handleValidate = (values) => {
  //   const errors = {};
  //   if (values.username === "") {
  //     errors.username = "Required";
  //   } else if (values.phone === "") {
  //     errors.phone = "Required";
  //   } else if (values.email === "") {
  //     errors.email = "Required";
  //   } else if (values.email !== "") {
  //     if (values.email === regexEmail) {
  //     } else {
  //       errors.email = "Invalid email address";
  //     }
  //   } else {
  //     alert("You form was successfully submited");
  //   }
  //   return errors;
  // };
  return (
    <>
      <Formik
        initialValues={{
          username: "",
          email: "",
          phone: "",
          message: "",
        }}
        onSubmit={handleFormSubmit}
        // validate={handleValidate}
        validateOnBlur={false}
        validationSchema={validateForm}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          errors,
          handleReset,
          values,
        }) => (
          <>
            <div>
              <label>Name</label>
              <input
                type="text"
                name="username"
                onChange={handleChange}
                value={values.username}
                onBlur={handleBlur}
              />
              {errors.username && <p>{errors.username}</p>}
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={values.email}
                onBlur={handleBlur}
              />
              {errors.email && <p>{errors.email}</p>}
            </div>
            <div>
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                onChange={handleChange}
                value={values.phone}
                onBlur={handleBlur}
              />
              {errors.phone && <p>{errors.phone}</p>}
            </div>
            <div>
              <label>Message</label>
              <textarea
                name="message"
                onChange={handleChange}
                value={values.message}
                onBlur={handleBlur}
              />
            </div>

            <button onClick={handleSubmit}>Submit</button>
          </>
        )}
      </Formik>
    </>
  );
};

export default Regex;
