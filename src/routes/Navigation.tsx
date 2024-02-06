import { BrowserRouter, Navigate } from "react-router-dom";
import { Routes, Route, NavLink } from "react-router-dom";
import logo from "../assets/react.svg";
import RegisterPage from "../03-forms/pages/RegisterPage";
import FormikBasicPage from "../03-forms/pages/FormikBasicPage";
import FormikYupPage from "../03-forms/pages/FormikYupPage";
import FormikComponents from "../03-forms/pages/FormikComponents";
import FormikAbstractation from "../03-forms/pages/FormikAbstraction";
import RegisterFormikPage from "../03-forms/pages/RegisterFormikPage";
import DynamicForm from "../03-forms/pages/DynamicForm";



const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="" />
          <ul>
            <li>
              <NavLink to="/register" className={ ({isActive}) => isActive ? 'nav-active' : ''}>Register Page</NavLink>
            </li>
            <li>
              <NavLink to="/formik-basic" className={ ({isActive}) => isActive ? 'nav-active' : ''}>Formik-basic</NavLink>
            </li>
            <li>
              <NavLink to="/formik-yup" className={ ({isActive}) => isActive ? 'nav-active' : ''}>formik-yup</NavLink>
            </li>
            <li>
              <NavLink to="/formik-Components" className={ ({isActive}) => isActive ? 'nav-active' : ''}>formik-components</NavLink>
            </li>
            <li>
              <NavLink to="/formik-Abstraction" className={ ({isActive}) => isActive ? 'nav-active' : ''}>formik-abstraction</NavLink>
            </li>
            <li>
              <NavLink to="/formik-register" className={ ({isActive}) => isActive ? 'nav-active' : ''}>formik-Register-Page</NavLink>
            </li>
            <li>
              <NavLink to="/Dynamic-Form" className={ ({isActive}) => isActive ? 'nav-active' : ''}>Dynamic- Forms</NavLink>
            </li>
          </ul>
        </nav>


        <Routes>
           <Route path="register" element={<RegisterPage/>}></Route>
           <Route path="formik-basic" element={<FormikBasicPage/>}></Route>
           <Route path="/formik-yup" element={<FormikYupPage/>}></Route>
           <Route path="/formik-components" element={<FormikComponents/>}></Route>
           <Route path="/formik-abstraction" element={<FormikAbstractation/>}></Route>
           <Route path="/formik-register" element={<RegisterFormikPage/>}></Route>
           <Route path="/Dynamic-form" element={<DynamicForm/>}></Route>


           <Route path="/*" element={<Navigate to="/" replace/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Navigation;
