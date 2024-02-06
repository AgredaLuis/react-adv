import { Formik , Form} from "formik";

import * as Yup from "yup";

import "../styles/styles.css";
import MyTextInput from "../components/MyTextInput";

export const RegisterFormikPage = () => {
  
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        repeatPassword: "",
      }}
      onSubmit={(values) => console.log()}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(2, "minimo 3 caracteres")
          .max(15, "maximo 15 caracteres")
          .required("este Campo es necesario"),
        email: Yup.string()
          .email("email invalido")
          .required("este Campo es necesario"),
        password: Yup.string()
          .min(6, "minimo 6 caracteres")
          .required("este Campo es necesario"),
        repeatPassword: Yup.string()
          .oneOf([Yup.ref("password")], "las contraseñas no coinciden")
          .required("este Campo es necesario"),
      })}
    >
      {
        ({handleReset}) => (
          <Form>
            <MyTextInput label="name" name="name" />
            <MyTextInput label="email" name="email"  placeholder="email"/>
            <MyTextInput label="password" name="password" />
            <MyTextInput label="repeatPassword" name="repeatPassword" />

            <button type="submit">Register</button>
            <button onClick={handleReset}>Reset</button>
          </Form>

        )
      }


      </Formik>
  );
};

export default RegisterFormikPage;
