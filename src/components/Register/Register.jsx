import React from 'react'
import axios from "axios"
import "./Register.scss"
import { ErrorMessage, Field, Form, Formik } from "formik"
import RegisterSchema from '../../Schemas/RegisterSchema';
import { useNavigate } from 'react-router';

export default function Register() {
    const navigate = useNavigate("");
    function RegisterAccount(data) {
        delete data.confirmPassword;
        axios.post("http://localhost:3004/users", data, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        navigate("/log-in");
    }
    return (

        <div className="row row-form">
            <div className="col-lg-5 col-md-6 form">
                <div className='title-sign'>
                    <h1>Sign UP Now!</h1>
                </div>
                <Formik
                    initialValues={{
                        email: "",
                        name: "",
                        confirmPassword: "",
                        password: "",
                    }}
                    validationSchema={RegisterSchema}
                    onSubmit={(values) => {
                        console.log(values);
                        RegisterAccount(values);
                    }}
                >
                    <Form className="user__form">
                        <div className="d-flex col-12 flex-column gap-2 pb-0 pt-3 ">
                            <label htmlFor="">Full Name:</label>
                            <Field
                                className="field-sign"
                                name="name"
                                type="text"
                                placeholder="Full Name"
                            />
                        </div>
                        <span className="text-danger err">
                            <ErrorMessage name="name" />
                        </span>
                        <div className="d-flex col-12 flex-column gap-2 pb-0 pt-3">
                            <label htmlFor="">Email:</label>
                            <Field
                                className="field-sign"
                                name="email"
                                type="email"
                                placeholder="Email"
                            />
                        </div>
                        <span className="text-danger err">
                            <ErrorMessage name="email" />
                        </span>
                        <div className="d-flex col-12 flex-column gap-2 pb-0 pt-3">
                            <label htmlFor="">Password</label>
                            <Field
                                className="field-sign"
                                name="password"
                                type="password"
                                placeholder="Password"
                            />
                        </div>
                        <span className="text-danger err">
                            <ErrorMessage name="password" />
                        </span>
                        <div className="d-flex col-12 flex-column gap-2 pb-0 pt-3">
                            <label htmlFor="">Confirm Password</label>
                            <Field
                                className="field-sign"
                                name="confirmPassword"
                                type="password"
                                placeholder="Confirm Password"
                            />
                        </div>
                        <span className="text-danger err">
                            <ErrorMessage name="confirmPassword" />
                        </span>
                        <div className="d-flex pt-4">
                            <button type='submit' className='sign-btn'> Sign Up</button>
                        </div>
                    </Form>
                </Formik>
            </div>{" "}
            <div className="col-lg-7 col-md-6 ">

            </div>
        </div>
    )
}
