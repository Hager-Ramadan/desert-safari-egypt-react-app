import * as yup from "yup";

const RegisterSchema = yup.object().shape({
    name: yup
        .string()
        .required("Name is required")
        .min(3, "Name should be at least 3 characters"),
    email: yup
        .string()
        .required("Email is required")
        .email("Email should be a valid email address"),
    password: yup
        .string()
        .required("Password is required")
        .min(6, "Password should ce at least 6 characters")
        .max(30, "Password should ce at most 30 characters")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character'
        ),
    confirmPassword: yup
        .string()
        .required("Confirm password is  required")
        .oneOf([yup.ref("password"), null], "Passwords do not match"),
});

export default RegisterSchema;