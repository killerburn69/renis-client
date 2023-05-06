import * as yup from "yup";

export const ResetPasswordValidation = yup.object().shape({
  Otp: yup.string().required(),
  newPassword: yup.string().required(),
});
