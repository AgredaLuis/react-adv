import { useField } from "formik"


interface Props {
  label: string,
  name: string,
  placeholder?: string,
  [x: string]: any;
}

export const MySelectInput = ( {label, ...props} : Props) => {

  const [field, meta] = useField(props)
  return (

    <>
    <label htmlFor={props.name || props.id }>{field.name}</label>
    <select {...field} {...props} />
    {meta.touched && meta.error && <div>{meta.error}</div>}
    </>
  )
}

export default MySelectInput