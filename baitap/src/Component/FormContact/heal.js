import { Formik } from "formik";
import React from "react";
import validateForm from "./validation";

const Healform = () => {
  const handleFormSubmit = (values, formik) => {
    console.log(values);
    formik.resetForm();
  };
  return (
    <Formik
      initialValues={{
        name: "",
        cmnd: "",
        gender: "male",
        country: "",
        company: "",
        part: "",
        heal: "",
        city: "",
        district: "",
        phuong: "",
        homenumber: "",
        phone: "",
        email: "",
      }}
      onSubmit={handleFormSubmit}
      validationSchema={validateForm}
      validateOnBlur={false}
    >
      {({ values, handleChange, handleSubmit, errors }) => (
        <>
          <h3>Tờ Khai Y Tế</h3>
          <div>
            <label>Họ Tên</label>
            <input
              type="text"
              name="name"
              values={values.name}
              onChange={handleChange}
            />
            {errors.name && <p>{errors.name}</p>}
          </div>
          <div>
            <label>Số Hộ Chiếu/CMND</label>
            <input
              type="text"
              name="cmnd"
              values={values.cmnd}
              onChange={handleChange}
            />
            {errors.cmnd && <p>{errors.cmnd}</p>}
          </div>
          <div>
            <label>Giới Tính</label>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={handleChange}
              defaultChecked={values.gender === "male"}
            />
            Nam
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={handleChange}
              defaultChecked={values.gender === "Female"}
            />
            Nữ
          </div>
          <div>
            <label>Quốc tịch</label>
            <input
              type="text"
              name="country"
              values={values.country}
              onChange={handleChange}
            />
            {errors.country && <p>{errors.country}</p>}
          </div>
          <div>
            <label>Công ty làm việc</label>
            <input
              type="text"
              name="company"
              values={values.company}
              onChange={handleChange}
            />
            {errors.company && <p>{errors.company}</p>}
          </div>
          <div>
            <label>Bộ Phận làm việc</label>
            <input
              type="text"
              name="part"
              values={values.part}
              onChange={handleChange}
            />
          </div>
          <div>
            <label> Có thể bảo hiêm y tế</label>{" "}
            <input
              type="checkbox"
              name="heal"
              values={values.heal}
              onChange={handleChange}
            />
          </div>
          <h3>Địa chỉ liên lạc tại Việt Nam</h3>
          <div>
            <label>Tỉnh thành</label>
            <input
              type="text"
              name="city"
              values={values.city}
              onChange={handleChange}
            />
            {errors.city && <p>{errors.city}</p>}
          </div>
          <div>
            <label>Quận Huyện</label>
            <input
              type="text"
              name="district"
              values={values.district}
              onChange={handleChange}
            />
            {errors.district && <p>{errors.district}</p>}
          </div>
          <div>
            <label>Phường Xã</label>
            <input
              type="text"
              name="phuong"
              values={values.phuong}
              onChange={handleChange}
            />
            {errors.phuong && <p>{errors.phuong}</p>}
          </div>
          <div>
            <label>Số nhà</label>
            <input
              type="text"
              name="homenumber"
              values={values.homenumber}
              onChange={handleChange}
            />
            {errors.homenumber && <p>{errors.homenumber}</p>}
          </div>
          <div>
            <label>Số điện thoại</label>
            <input
              type="text"
              name="phone"
              values={values.phone}
              onChange={handleChange}
            />
            {errors.phone && <p>{errors.phone}</p>}
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              values={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div>
            <button onClick={handleSubmit}> Submit</button>
          </div>
        </>
      )}
    </Formik>
  );
};

export default Healform;
