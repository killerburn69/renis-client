import * as yup from "yup";

export const ForgetPasswordValidation = yup.object().shape({
  email: yup.string().email().required(),
});
