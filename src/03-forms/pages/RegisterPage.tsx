import { ChangeEvent, FormEvent, useState } from 'react';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

export const RegisterPage = () => {
    const { formData, handleChange, resetForm, isValidEmail } = useForm({
        name: '',
        email: '',
        password: '',
        password2: '',
    });

    const { name, email, password, password2, } = formData;

    const onSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <div>
            <h1>Register Page</h1>

            <form noValidate onSubmit={ onSubmit }>
                <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={ name }
                    onChange={ handleChange }
                    className={ `${ name.trim().length <= 0 && 'has-error' }` }
                />
                {
                    name.trim().length <= 0 && <span>El nombre es necesario</span>
                }

                <input 
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={ email }
                    onChange={ handleChange }
                    className={ `${ !isValidEmail(email) && 'has-error' }` }
                />
                {
                    !isValidEmail(email) && <span>El email es inválido</span>
                }

                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={ password }
                    onChange={ handleChange }
                />
                {
                    password.trim().length <= 0 && <span>La contraseña es necesaria</span>
                }
                {
                    password.trim().length < 6 && password.trim().length > 0 && <span>La contraseña debe tener 6 caracteres</span>
                }

                <input 
                    type="password"
                    placeholder="Repeat Password"
                    name="password2"
                    value={ password2 }
                    onChange={ handleChange }
                />
                {
                    password2.trim().length <= 0 && <span>La contraseña es necesaria</span>
                }
                {
                    password2 !== password && <span>Las contraseñas no coinciden</span>
                }

                <button
                    type='submit'
                >
                    Create
                </button>
                
                <button
                    type='button'
                    onClick={ resetForm }
                >
                    Reset
                </button>
            </form>
        </div>
    )
}