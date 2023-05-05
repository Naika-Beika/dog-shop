import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { signUpFetch } from '../../api/user';
import { useNavigate } from 'react-router-dom';
 
 
export const SignUp = () => {
    const navigate = useNavigate()
    const [error, setError] = useState(false)
   
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

    const onSubmit = async (values) => {
        const res = await signUpFetch(values);
        const responce = await res.json();
   
        if(res.ok){
           localStorage.setItem('token_auth', responce.token)
           return navigate('/products')
        }
        return setError(responce.message)
     }


    return (
        <>
        <h1>Регистрация</h1>
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
          <Form>
            <div>
           <Field id ="firstName" name="firstName" placeholder="Имя"/>
           <ErrorMessage className="error" name="firstName" component='p' />
           </div>
           
           <div>
           <Field id ="lastName" name="lastName" placeholder="Фамилия"/>
           <ErrorMessage className="error" name="lastName" component='p' />
           </div>
           
           <div>
           <Field name="email" type="email" placeholder="jane@acme.com"/>
           <ErrorMessage className="error" name="email" component='p' />
           </div>

           <div>
           <Field name="password" type="password" placeholder="password*"/>
           <ErrorMessage className="error" name="password" component='p' />
           </div>
           <button type="submit">Submit</button>
           {error && <p className='error'>{error}</p>}
         </Form>
     </Formik>
     </>
    )
}