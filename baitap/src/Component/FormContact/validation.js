import * as yup from "yup";

const validateForm = yup.object().shape({
  username: yup.string().required(),
  phone: yup.string().required(),
  email: yup.string().required().email(),
  name: yup.string().required(),
  cmnd: yup.number().required(),
  country: yup.string().required(),
  city: yup.string().required(),
  district: yup.string().required(),
  phuong: yup.string().required(),
  homenumber: yup.string().required(),
});
export default validateForm;
