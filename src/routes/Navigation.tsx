import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom";
import { FormikAbstractation, FormikBasicPage, FormikComponents, FormikYupPage, RegisterPage } from "../03-forms/pages";

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
                    </ul>
                </nav>

                <Routes>
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