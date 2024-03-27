import React from 'react'
import {Formik,Form,Field } from 'formik'
import { userSchema } from './Schema'
 
const Forms = () => {
    const initialValues={name:"",password:"",cpassword:""}
    function handleSubmit(values,actions){
        console.log(values,actions);
        actions.resForm()
    }


  return (
    <div className='Forms'>
        
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={userSchema}>

            {({error,touched})=>
            (
                <Form className='form_container'>
                <label htmlFor='name'>Name</label>
                <Field type="text" name="name"></Field>
                <div className='error_container'>
                    {
                        error && touched && (
                            <p>{error.name}</p>
                        )}
                </div>
                <br /><br />
                <label htmlFor='email'>Email</label>
                <Field type="email" name="email"></Field>
                <div className='error_container'>
                    {
                        error && touched && (
                            <p>{error.email}</p>
                        )}
                </div>
                <br /><br />
                <label htmlFor='password'>Password</label>
                <Field type="password" name="password"></Field>
                <div className='error_container'>
                    {
                        error && touched && (
                            <p>{error.password}</p>
                        )}
                </div>
                 <br /><br />
                 <label htmlFor='cpassword'>CPassword</label>
                <Field type="password" name="cpassword"></Field><br />
                <div className='error_container'>
                    {
                        error && touched && (
                            <p>{error.cpassword}</p>
                        )}
                </div>
                <button type="submit">Submit</button>
            </Form>
            )}
            
        </Formik>
    </div>
  )
}

export default Forms