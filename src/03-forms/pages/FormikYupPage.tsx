import { useFormik } from "formik";
import * as Yup from "yup";

import "../styles/styles.css";

export default function FormikYupPage() {
  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "maximo 15 caracteres")
        .required("este Campo es necesario"),
      lastName: Yup.string()
        .max(15, "maximo 15 caracteres")
        .required("este Campo es necesario"),
      email: Yup.string()
        .email("email invalido")
        .required("este Campo es necesario"),
    }),
  });
  return (
    <div>
      <h1>Formik Yup Tutorial</h1>

      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="first Name">First name</label>
        <input type="text" {...getFieldProps("firstName")} />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}
        <label htmlFor="last Name">Last name</label>
        <input type="text" {...getFieldProps("lastName")} />
        {touched.lastName && errors.firstName && <span>{errors.lastName}</span>}
        <label htmlFor="email">Email Adress</label>
        <input type="email" {...getFieldProps("email")} />
        <span>email es necesario</span>
        <span>email invalido</span>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
