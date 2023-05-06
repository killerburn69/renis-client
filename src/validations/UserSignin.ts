import * as yup from "yup";

export const UserSignInValidation = yup.object().shape({
  Email: yup.string().email().required(),
  Password: yup
    .string()
    .required()
    .min(6, "Password at least 6 character"),
});
