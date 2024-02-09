import * as yup from "yup";

const ContactSchema = yup.object().shape({
    name: yup
        .string()
        .required("Name is required"),
    email: yup
        .string()
        .required("Email is required")
        .email("Email should be a valid email address"),
    subject: yup
        .string()
        .required("Subject is required"),
    message: yup
        .string()
        .required("Message is required"),

});

export default ContactSchema;