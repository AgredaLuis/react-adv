import { useFormik, ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import "../styles/styles.css";

export default function FormikComponents() {
  return (
    <div>
      <h1>Formik Components</h1>

      <Formik
        initialValues={{ firstName: "", lastName: "", email: "" }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "maximo 15 caracteres")
            .required("este Campo es necesario"),
          lastName: Yup.string()
            .max(15, "maximo 15 caracteres")
            .required("este Campo es necesario"),
          email: Yup.string()
            .email("email invalido")
            .required("este Campo es necesario"),
          terms: Yup.boolean().oneOf([true], "Debe aceptar los terminos y condiciones"),
        })}
      >
        {(formik) => (
          <Form>
            <label htmlFor="first Name">First name</label>
            <Field type="text" name="firstName"  placeholder="First Name"/>
            <ErrorMessage name="firstName"  component={"span"}/>


            <label htmlFor="last Name">Last name</label>
            <Field type="text" name="lastName" />
            <ErrorMessage name="lastName" component={"span"} />


            <label htmlFor="email">Email Adress</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component={"span"}/>

            <label>
            <Field type="checkbox" name="terms" />
            Terms and conditions
            </label>
            <ErrorMessage name="terms" component="span"/>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
