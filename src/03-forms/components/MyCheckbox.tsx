import { useField } from "formik";

interface Props {
  label: string;
  name: string;
  [x: string]: any;
}

export const MyCheckbox = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label>
        {field.name}
        <input type="checkbox" {...field} {...props} />
      </label>
      {meta.touched && meta.error && <div>{meta.error}</div>}
    </>
  );
};

export default MyCheckbox;
