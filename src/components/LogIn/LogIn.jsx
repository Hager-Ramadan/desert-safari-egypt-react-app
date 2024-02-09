import React from 'react'
import { ErrorMessage, Field, Form, Formik } from "formik"
import LoginSchema from '../../Schemas/LoginSchema';
import { $Auth_Data } from '../../Store';
import axios from "axios"
import { useRecoilState } from "recoil"
import { Link } from 'react-router-dom';



export default function LogIn() {
    const [authData, setAuthData] = useRecoilState($Auth_Data);
    function LoginAccount(data) {
        axios(`http://localhost:3004/users?email=${data.email}&password=${data.password}`
        ).then((data) => {
            if (data.data.length > 0) {
                localStorage.setItem("loggedInUser", JSON.stringify(data.data[0]));
                setAuthData({
                    isAuth: true,
                    userId: data.data[0].id,
                });
            }
        });
    }
    return (
        <div>
            <div className='row row-form'>
                <div className="col-lg-5 col-md-6 form">
                    <div className='title-sign'>
                        <h1>Log In</h1>
                    </div>
                    <Formik
                        initialValues={{
                            email: "",
                            password: "",
                        }}
                        validationSchema={LoginSchema}
                        onSubmit={(values) => {
                            LoginAccount(values);
                        }}
                    >
                        <Form className="user__form d-flex flex-column">
                            <div className="d-flex col-12 flex-column gap-2  pb-0 pt-3">
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
                            <div className="d-flex col-12 flex-column gap-2 pb-0 pt-3 ">
                                <label htmlFor="">Password:</label>
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
                            <div className="d-flex justify-content-end pt-4">
                                <button
                                    type="submit"
                                    onClick={() => {
                                        <></>;
                                    }}
                                >
                                    Log In
                                </button>
                            </div>
                            <div className='register-btn'>
                                <p>
                                    Need an account? <Link to={"/sign-up"}>SIGN UP</Link>
                                </p>
                            </div>
                        </Form>
                    </Formik>
                </div>{" "}
                <div className='col-lg-7 col-md-6'></div>
            </div>
        </div>
    )
}
