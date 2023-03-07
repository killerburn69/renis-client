import * as yup from 'yup'

export const UserSignInValidation = yup.object().shape({
    email:yup.string().email().required(),
    password:yup.string().min(6).required(),
    isKeep:yup.boolean()
})