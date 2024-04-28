// import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./ContactForm.scss"
import axios from "axios"
import "../Register/Register.scss"
import { ErrorMessage, Field, Form, Formik } from "formik"
import ContactSchema from '../../Schemas/ContactSchema';


function ContactForm() {
    function ContactForm(data) {
        axios.post("http://localhost:3004/contact", data, {
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
    return (
        <div>
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                }}

                validationSchema={ContactSchema}
                onSubmit={(values, { resetForm }) => {
                    console.log(values);
                    ContactForm(values);
                    resetForm()

                }}
            >
                <Form>
                    <div className="mt-3" controlId="exampleForm.ControlInput1">
                        <Field
                            name="name"
                            type="text"
                            placeholder="Name"

                        />
                    </div>
                    <span className="text-danger err">
                        <ErrorMessage name="name" />
                    </span>
                    <div className="mt-3" controlId="exampleForm.ControlInput1">
                        <Field
                            name="email"
                            type="email"
                            placeholder="Email Address"
                        />
                    </div>
                    <span className="text-danger err">
                        <ErrorMessage name="email" />
                    </span>
                    <div className="mt-3" controlId="exampleForm.ControlInput1">
                        <Field
                            name="subject"
                            type="text"
                            placeholder="Subject" />
                    </div>
                    <span className="text-danger err">
                        <ErrorMessage name="subject" />
                    </span>
                    <select className="mt-3" aria-label="Default select example">
                        <option>What are you interested in?</option>
                        <option value="1">Desert Safari Tour</option>
                        <option value="2">Omar Desert Camp</option>
                    </select>
                    <div className="mt-3" controlId="exampleForm.ControlTextarea1">
                        <Field
                            name="message"
                            type="textarea"
                            as="textarea" rows={9}
                            placeholder="Message" />
                    </div>
                    <span className="text-danger err">
                        <ErrorMessage name="message" />
                    </span>
                    <div className='mt-3'>
                        <button type='submit' >SUBMIT FORM</button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}

export default ContactForm;