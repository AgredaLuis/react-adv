import { useFormik, ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import "../styles/styles.css";
import MyTextInput from "../components/MyTextInput";
import MySelectInput from "../components/MYSelect";
import MyCheckbox from "../components/MyCheckbox";

export default function FormikAbstractation() {
  return (
    <div>
      <h1>Formik Abstractations</h1>

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
            <MyTextInput label="First Name" name="firstName" placeholder="First Name" />

            <label htmlFor="last Name">Last name</label>
            <Field type="text" name="lastName" />
            <ErrorMessage name="lastName" component={"span"} />


            <label htmlFor="email">Email Adress</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component={"span"}/>

            <MySelectInput label="Select" name="jobType">
              <option value="">Pick something</option>
              <option value="developer">developer</option>
              <option value="designer">Designer</option>
              </MySelectInput>

              <MyCheckbox name="terms" label="Accept terms and conditions" />



            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
