import * as yup from "yup";

const LoginSchema = yup.object().shape({
    email: yup
        .string()
        .required("Email is required")
        .email("Email should be a valid wmail address"),

    password: yup
        .string()
        .required("Password is required")

});

export default LoginSchema;