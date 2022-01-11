import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyTextInput, MySelectInput, MyCheckboxInput } from '../components';
import '../styles/styles.css'

export const FormikAbstractation = () => {
    return (
        <div>
            <h1>Formik Abstractation</h1>

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
                            <MyTextInput label='First Name' name='firstName' />
                            
                            <MyTextInput label='Last Name' name='lastName' />
                            
                            <MyTextInput label='Email' name='email' />
                            
                            <MySelectInput label='Job Type' name='jobType'>
                                <option value="">Select an Option</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT Senior</option>
                                <option value="it-jr">IT Junior</option>
                            </MySelectInput>

                            <MyCheckboxInput name='terms' label='Terms and Conditions' />

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