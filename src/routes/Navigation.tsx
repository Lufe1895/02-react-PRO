import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom";
import { 
    RegisterFormikPage, 
    FormikAbstractation, 
    FormikBasicPage, 
    FormikComponents, 
    FormikYupPage, 
    RegisterPage, 
    DynamicForm,
} from "../03-forms/pages";

import logo from '../logo.svg';

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="ReactLogo" />

                    <ul>
                        <li>
                            <NavLink className={ ({ isActive }) => isActive ? 'nav-active' : '' } to="/register">Register Page</NavLink>
                        </li>

                        <li>
                            <NavLink className={ ({ isActive }) => isActive ? 'nav-active' : '' } to="/formik-basic">Formik - Basic</NavLink>
                        </li>

                        <li>
                            <NavLink className={ ({ isActive }) => isActive ? 'nav-active' : '' } to="/formik-yup">Formik - Yup</NavLink>
                        </li>

                        <li>
                            <NavLink className={ ({ isActive }) => isActive ? 'nav-active' : '' } to="/formik-components">Formik - Components</NavLink>
                        </li>
                        
                        <li>
                            <NavLink className={ ({ isActive }) => isActive ? 'nav-active' : '' } to="/formik-abstractation">Formik - Abstractation</NavLink>
                        </li>
                        
                        <li>
                            <NavLink className={ ({ isActive }) => isActive ? 'nav-active' : '' } to="/formik-register">Formik - Register</NavLink>
                        </li>
                        
                        <li>
                            <NavLink className={ ({ isActive }) => isActive ? 'nav-active' : '' } to="/dynamic-form">Dynamic Form</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="dynamic-form" element={ <DynamicForm /> } />

                    <Route path="formik-register" element={ <RegisterFormikPage /> } />
                    
                    <Route path="formik-abstractation" element={ <FormikAbstractation /> } />

                    <Route path="formik-components" element={ <FormikComponents /> } />

                    <Route path="formik-yup" element={ <FormikYupPage /> } />

                    <Route path="formik-basic" element={ <FormikBasicPage /> } />

                    <Route path="register" element={ <RegisterPage /> } />

                    <Route path="/*" element={ <Navigate to="register" replace /> } />
                </Routes>
            </div>
        </BrowserRouter>
    )
}