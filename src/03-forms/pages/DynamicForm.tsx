import { Form, Formik } from "formik";
import { MySelectInput, MyTextInput } from "../components";
import formJson from "../data/custom-form.json";
import * as Yup from 'yup';

const initialValues:{ [x:string]: any } = {};
const requiredFields: { [x:string]: any} = {};

for (const input of formJson) {
    initialValues[input.name] = input.value;

    if (!input.validations) continue;

    let schema = Yup.string();

    for (const rule of input.validations) {
        if (rule.type === 'required') {
            schema = schema.required('This field is required');
        }
        if (rule.type === 'minLength') {
            schema = schema.min((rule as any).value || 1, `Should contain at least ${ rule.value } characters`);
        }
        if (rule.type === 'email') {
            schema = schema.email('Email is invalid');
        }
    }

    requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {
    return (
        <div>
            <h1>Dynamic Form</h1>

            <Formik
                initialValues={ initialValues }
                validationSchema={ validationSchema }
                onSubmit={ (values) => console.log(values) }
            >
                {
                    (formik) => (
                        <Form noValidate>
                            {
                                formJson.map( ({ type, name, label, placeholder, options }) => {
                                    if (type === 'text'
                                        || type === 'password'
                                        || type === 'email') {

                                        return <MyTextInput 
                                            key={ name }
                                            label={ label }
                                            type={ type as any }
                                            name={ name }
                                            placeholder={ placeholder }
                                        />
                                    } else if (type === 'select') {
                                        return <MySelectInput
                                            key={ name }
                                            label={ label }
                                            name={ label }
                                        >
                                            <option>Select an option</option>
                                            {
                                                options?.map(({ id, label }) => <option 
                                                    key={ id } 
                                                    value={ id }>
                                                        { label }
                                                    </option>)
                                            }
                                        </MySelectInput>
                                    }

                                    return <span>
                                        Type: { type } not supported
                                    </span>
                                })
                            }

                            <button
                                type="submit"
                            >
                                Submit
                            </button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}