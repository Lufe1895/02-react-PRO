import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import '../styles/styles.css';
import { MyTextInput } from '../components/MyTextInput';

export const RegisterFormikPage = () => {
    return (
        <div>
            <h1>Register Formik Page</h1>

            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    password2: '',
                }}
                onSubmit={(values) => console.log(values) }
                validationSchema={
                    Yup.object({
                        name: Yup.string()
                                .min(2, 'Name should be at least 2 characters long')
                                .max(15, 'Name should not be longer than 15 characters')
                                .required(),
                        email: Yup.string()
                                .email('Email is invalid')
                                .required(),
                        password: Yup.string()
                                .min(6, 'Password should be at least 6 characters')
                                .required(),
                        password2: Yup.string()
                                .oneOf([Yup.ref('password')], 'Passwords do not match')
                                .required(),

                    })
                }
            >
                {
                    ({ handleReset }) => (
                        <Form>
                            <MyTextInput label='Name' name='name' placeholder='Name' />
                            
                            <MyTextInput label='Email' name='email' placeholder='email@example.com' />
                            
                            <MyTextInput label='Password' type='password' name='password' placeholder='Password' />
                            
                            <MyTextInput label='confirm Password' type='password' name='password2' placeholder='Confirm Password' />

                            <button
                                type='submit'
                            >
                                Create
                            </button>

                            <button
                                type='button'
                                onClick={ handleReset }
                            >
                                Reset
                            </button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}