import { useFormik, Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css'

export const FormikComponents = () => {
    return (
        <div>
            <h1>Formik Components</h1>

            <Formik
                initialValues={{
                    firstName: 'Luis',
                    lastName: 'Fernando',
                    email: 'luislecompt@gmail.com',
                    terms: false,
                    jobType: '',
                }}
                onSubmit={ (values) => console.log(values) }
                validationSchema={ Yup.object({
                    firstName: Yup.string()
                                .max(15, 'Should contain 15 characters or less')
                                .required('Required'),
                    lastName: Yup.string()
                                .max(15, 'Should contain 15 characters or less')
                                .required('Required'),
                    email: Yup.string()
                                .email('Should be a valid email')
                                .required('Required'),
                    terms: Yup.boolean()
                                .oneOf([true], 'You should accept terms and conditions'),
                    jobType: Yup.string()
                                .notOneOf([''], 'Select and option')
                                .required('Required')

                })}
            >
                {
                    formik => (
                        <Form>
                            <label htmlFor='firstName'>First Name</label>
                            <Field name='firstName' type='text' />
                            <ErrorMessage name='firstName' component='span' />

                            <label htmlFor='lastName'>Last Name</label>
                            <Field name='lastName' type='text' />
                            <ErrorMessage name='lastName' component='span' />

                            <label htmlFor='email'>Email</label>
                            <Field name='email' type='text' />
                            <ErrorMessage name='email' component='span' />
                            
                            <label htmlFor='jobType'>Email</label>
                            <Field name='jobType' as='select'>
                                <option value="">Select an Option</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT Senior</option>
                                <option value="it-jr">IT Junior</option>
                            </Field>
                            <ErrorMessage name='jobType' component='span' />

                            <label>
                                <Field name='terms' type='checkbox' />
                                Terms and Conditions
                            </label>
                            <ErrorMessage name='terms' component='span' />

                            <button type='submit'>
                                Submit
                            </button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}