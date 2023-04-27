import * as yup from "yup";

export const UserActiveAccount = yup.object().shape({
  Email: yup.string().email().required(),
  Otp: yup.string().required().min(6, "OTP at least 6 number"),
});
