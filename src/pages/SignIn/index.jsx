import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { signInFetch } from '../../api/user';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { setUpUser } from '../../redux/slices/userSlice';
import { useDispatch } from 'react-redux';
import { useNoAuth } from '../../hooks/useNoAuth';

export const SignIn = () =>{
   const navigate = useNavigate()
   const dispatch = useDispatch()
   useNoAuth()
   
   const initialValues = {
    email: '',
    password: ''
   }

   const { mutateAsync, isError, isLoading } = useMutation({
     mutationFn: async (values) =>{
       const res = await signInFetch(values);
       if (res.ok) {
         const responce = await res.json();
         return responce
        }

      return false
     } 
   })

   const onSubmit = async (values) => {
     const responce = await mutateAsync(values)
     if (!responce) return <p>Произошла ошибка:{isError}</p>

     dispatch(setUpUser({ ...responce.data, token: responce.token }))

     return navigate ('/products')
     }
     
     if (isLoading) return <p>Идет загрузка</p>
  

  const signInSchema = Yup.object().shape({
    password: Yup.string().required('Обязательно'),
    email: Yup.string().email('Некорректный email').required('Обязательно'),
  });

    return (
        <>
        <h1 className='m-4'>Авторизация</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={signInSchema}
          onSubmit={onSubmit}
         >
          <Form className='m-4 mb-5'>
           <div className='p-2'>
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
            
            <button className='m-3 btn btn-primary' type="submit">Submit</button>

            {isError && <p className='error'>{isError}</p>}
          </Form>
        </Formik>
        </>
    )
}