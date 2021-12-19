
import Input from 'components/shared/Input'
import ButtonLoading from 'components/shared/ButtonLoading'
import { Link } from 'react-router-dom'
import useFormData from 'hooks/useFormData'
import { LOGIN } from 'graphql/auth/mutations'
import { useAuth } from 'context/AuthContext'
import { useMutation } from '@apollo/client'
import { useEffect } from 'react'

const Login = () => {
    const { setToken } = useAuth();
    const { form, formData, updateFormData } = useFormData();
    const [login, { data: dataMutation, loading: mutationLoading }] = useMutation(LOGIN);

    useEffect(() => {
        if (dataMutation) {
          if (dataMutation.login.token) {
            setToken(dataMutation.login.token);
          }
        }
      }, [dataMutation]);

    
  const submitForm = (e) => {
    e.preventDefault();

    login({
      variables: formData,
    });
  };

    return (
        <div className='flex flex-col items-center justify-center w-full h-full p-10'>
        <h1 className='text-xl font-bold text-gray-900'>Iniciar sesión</h1>
        <form
          className='flex flex-col'
          onSubmit={submitForm}
          onChange={updateFormData}
          ref={form}
        >
          <Input name='correo' type='email' label='Correo' required />
          <Input name='password' type='password' label='Contraseña' required />
          <ButtonLoading
            disabled={Object.keys(formData).length === 0}
            loading={mutationLoading}
            text='Iniciar Sesión'
          />
        </form>
        <span>¿No tienes una cuenta?</span>
        <Link to='/auth/register'>
          <span className='text-blue-700'>Regístrate</span>
        </Link>
      </div>
    )
}

export default Login
