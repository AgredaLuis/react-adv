import { ErrorMessage, useField } from "formik"


interface MyTextInputProps {
  label: string,
  name: string,
  type?: 'text' | 'password' | 'email' | 'number',
  placeholder?: string,
  [x: string]: any;
}

export const MyTextInput = ( {label, ...props} : MyTextInputProps) => {

  const [field] = useField(props)
  return (

    <>
    <label htmlFor={props.name || props.id }>{field.name}</label>
    <input className="text-input" {...field} {...props} />
    <ErrorMessage name={props.name} component={"span"} />
    {/* {meta.touched && meta.error && <div>{meta.error}</div>} */}
    </>
  )
}

export default MyTextInput