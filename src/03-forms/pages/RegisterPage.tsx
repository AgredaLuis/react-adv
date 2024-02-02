import { useForm } from '../hooks/useForm';
import '../styles/styles.css';



export const RegisterPage = () => {

  const { formData , onChange , name , email , password , repeatPassword , resetForm , isValidEmail } = useForm({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <div>
      <h1>Register Page</h1>

      <form noValidate onSubmit={onSubmit}>
        <input type="text" placeholder="Name" name='name' value={name} onChange={onChange}/>
        {name.trim().length <= 0 && <span>este Campo es necesario</span>}
        <input type="email" placeholder="Email" name='email' value={email} onChange={onChange} />
        { !isValidEmail(email) && <span>email invalido</span> }
        <input type="password" placeholder="Password" name='password' value={password} onChange={onChange} />
        {password.trim().length <= 0 && <span>este Campo es necesario</span>}
        {password.trim().length < 6 && <span>minimo 6 caracteres</span>}
        <input type="password" placeholder="Repeat Password" name='repeatPassword' value={repeatPassword} onChange={onChange}/>
        {password.trim().length <= 0 && <span>este Campo es necesario</span>}
        {password !== repeatPassword && <span>las contraseñas no coinciden</span>}
        <button type="submit" onClick={resetForm}>Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
