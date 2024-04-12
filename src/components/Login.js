import React, { useState } from 'react';
import {useFormik} from 'formik'
import { signUpSchema } from '../schemas';
import '../App.css';
import { useNavigate } from "react-router-dom";

const initialValues={
  email:"",
  password:"",
};


function Login(){
  let history=useNavigate();
  const {values,errors,touched,handleBlur,handleChange,handleSubmit}= useFormik({
    initialValues,
    validationSchema:signUpSchema,
    onSubmit : (values,action) => {
      console.log(
        values
      );
      action.resetForm();
      history('/home');
    },
  });


  
  return (
   <div className='container bg-success login'>
    <form onSubmit={handleSubmit}>
    
      <div className='input-block'>
        <label htmlFor='email' className='input-lable'>Email</label>
        <input type='email' autoComplete='off' name='email' id='email'placeholder='email' 
        value={values.email}
        onChange={handleChange}
         onBlur={handleBlur}/>
          {errors.email && touched.email ?(<p className='form-error'>{errors.email}</p>
         ): null}
      </div>
      <div className='input-block'>
        <label htmlFor='password' className='input-lable'>Password</label>
        <input type='password' autoComplete='off' name='password' id='password'placeholder='password' 
        value={values.password}
        onChange={handleChange}
         onBlur={handleBlur}/>
          {errors.password && touched.password ?(<p className='form-error'>{errors.password}</p>
         ): null}
      </div>
      <div className='input-button'>
      {/* <Link to=""> */}
      <button className='btn btn-info button' type="submit">LOGIN</button>
      {/* </Link> */}
      </div>
    </form>
   </div>
 );
  
}
export default Login;