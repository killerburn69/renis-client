import * as yup from "yup";

export const UserSignUpValidation = yup.object().shape({
  Email: yup.string().email().required(),
  Password: yup.string().required().min(6, "Password at least 6 character"),
  Confirm_Password: yup
    .string()
    .required()
    .oneOf([yup.ref("Password"), null], "Your passwords do not match."),
});
