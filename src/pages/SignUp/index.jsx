import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { signUpFetch } from '../../api/user';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
 
 
export const SignUp = () => {
    const navigate = useNavigate()
    
    const SignupSchema = Yup.object().shape({
      firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
      lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
    });

    const { mutateAsync, isError, isLoading } = useMutation({
      mutationFn: async (values) =>{
        const res = await signUpFetch(values);
        if (res.ok){
          const responce = await res.json();
          return responce
        }

        return false
      }
    })

    const onSubmit = async (values) => {
        const responce = await mutateAsync(values)
        if (!responce) return <p>Произошла ошибка:{isError}</p>

        localStorage.setItem('token_auth', responce.token)
        return navigate('/products')
        }
        
        if (isLoading) return <p>Идет загрузка</p>

    return (
        <>
        <h1 className='mt-5'>Регистрация</h1>
        <Formik
           initialValues={{
             firstName: '',
             lastName: '',
             email: '',
             password: ''
           }}
           validationSchema={SignupSchema}
           onSubmit={onSubmit}
        >
          <Form className='m-4 mb-5'>
            <div className='m-2'>
           <Field id ="firstName" name="firstName" placeholder="Имя"/>
           <ErrorMessage className="error" name="firstName" component='p' />
           </div>
           
           <div className='m-2'>
           <Field id ="lastName" name="lastName" placeholder="Фамилия"/>
           <ErrorMessage className="error" name="lastName" component='p' />
           </div>
           
           <div className='m-2'>
           <Field name="email" type="email" placeholder="jane@acme.com"/>
           <ErrorMessage className="error" name="email" component='p' />
           </div>

           <div className='m-2'>
           <Field name="password" type="password" placeholder="password*"/>
           <ErrorMessage className="error" name="password" component='p' />
           </div>
           <button className='m-2 btn btn-primary' type="submit">Submit</button>
           {isError && <p className='error'>{isError}</p>}
         </Form>
     </Formik>
     </>
    )
}