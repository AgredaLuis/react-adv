import { FormikErrors, FormikValues, useFormik } from "formik";

import "../styles/styles.css";

export default function FormikBasicPage() {


  const validate = ({firstName, lastName, email}: FormValues) => {
    const errors: FormikErrors<FormValues> = {};

    if(!firstName){
      errors.firstName = "este Campo es necesario";
    }else if(firstName.length < 15){
      errors.firstName = "minimo 15 caracteres";
    }

    if(!lastName){
      errors.lastName = "este Campo es necesario";
    }else if(lastName.length < 15){
      errors.lastName = "minimo 15 caracteres";
    }

    if(!email){
      errors.email = "este Campo es necesario";
    }else if(!email.includes("@")){
      errors.email = "email invalido";
    }
    return errors

  }
  const {values, handleChange, handleSubmit, errors, touched, handleBlur} = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validate
  });
  return (
    <div>
      <h1>Formik Basic Tutorial</h1>

      <form  onSubmit={handleSubmit} noValidate>
        <label htmlFor="first Name">First name</label>
        <input type="text" name="firstName" onChange={handleChange} value={values.firstName} onBlur={handleBlur} />
        {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}
        <label htmlFor="last Name">Last name</label>
        <input type="text" name="lastName" onChange={handleChange} value={values.lastName} />
        {touched.lastName && errors.firstName && <span>{errors.lastName}</span>}
        <label htmlFor="email">Email Adress</label>
        <input type="email" name="email" onChange={handleChange} value={values.email} />
        <span>email es necesario</span>
        <span>email invalido</span>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
