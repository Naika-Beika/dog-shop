import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { signInFetch } from '../../api/user';
import { useNavigate } from 'react-router-dom';

export const SignIn = () =>{
   const navigate = useNavigate()
   const [error, setError] = useState(false)

   const initialValues = {
    email: '',
    password: ''
   }

   const onSubmit = async (values) => {
     const res = await signInFetch(values);
     const responce = await res.json();

     if(res.ok){
        localStorage.setItem('token_auth', responce.token)
        return navigate('/products')
     }
     return setError(responce.message)
  }

  const signInSchema = Yup.object().shape({
    password: Yup.string().required('Обязательно'),
    email: Yup.string().email('Некорректный email').required('Обязательно'),
  });

    return (
        <>
        <h1>Авторизация</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={signInSchema}
          onSubmit={onSubmit}
         >
          <Form>
           <div>
            <Field
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
             /> 
             <ErrorMessage className="error" name="email" component='p' />
            </div>

            <div>
              <Field name="password" placeholder="password*" type="password" />
              <ErrorMessage className="error" name="password" component='p' />
            </div>
            
            <button type="submit">Submit</button>

            {error && <p className='error'>{error}</p>}
          </Form>
        </Formik>
        </>
    )
}