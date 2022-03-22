import React from 'react'
import {Formik, Form, Field, ErrorMessage} from "formik"
import * as yup from 'yup'


function FormValidation() {
    const defaultValidation= {
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirm_password:'',
        gender:'',
        termsAndCondition: false

    }

    const validationSchema = yup.object().shape({
      firstName: yup.string().required("Enter your valid name"),
      lastName: yup.string().required("please enter last name"),
      email: yup.string().required("Please enter valid email").email('enter valid email'),
      password: yup.string().required("Please enter passwoed").min(6),
      gender: yup.string().required("please select gender"),
      termsAndCondition: yup.boolean().oneOf([true],"Please accept terms and conditons"),
      confirm_password: yup.string().oneOf([yup.ref('password'),null], 'password must be same').required('Cofirm passwoed is required')
    })

    const handleSubmit= (value)=>{
      console.log("value", value)
    }
  return (
    <>
    <div className="container">
      <div className='col-md-12 mt-5'>
    <h1 className='ding'>Sign Up</h1>
       <Formik 
       initialValues={defaultValidation}
       validationSchema={validationSchema}
       onSubmit={handleSubmit}
       >
           <Form>
               <div className='col-md-12 mt-4'>
               <Field type='text' name='firstName' placeholder='enter first name' className='form-controle' />
               <p className='text-danger'>
                 <ErrorMessage name='firstName' />
                  </p>
               </div>

               <div className='col-md-12 mt-4'>
               <Field type='text' name='lastName' placeholder='enter last name' className='form-controle' />
               <p className='text-danger'>
                 <ErrorMessage name='lastName' />
                  </p>
               </div>
               <div className='col-md-12 mt-4'>
               <Field type='email' name='email' placeholder='enter email' className='form-controle' />
               <p className='text-danger'>
                 <ErrorMessage name='email' />
                  </p>
               </div>
               <div className='col-md-12 mt-4'>
               <Field type='password' name='password' placeholder='enter password' className='form-controle' />
               <p className='text-danger'>
                 <ErrorMessage name='password' />
                  </p>
               </div>

               <div className='col-md-12 mt-4'>
               <Field type='password' name='confirm_password' placeholder='enter password' className='form-controle' />
               <p className='text-danger'>
                 <ErrorMessage name='password' />
                  </p>
               </div>


               <div className='col-md-12 mt-4'>
                 <Field component='select' name="gender" placeholder='select your gender' className='form-controle'>
                   <option value=" " > Please select gender</option>
                   <option value="male">Male</option>
                   <option value="frmale">female</option>
                   </Field>
               </div>

               <div className='col-md-12 mt-4'>
                <label className='form-inline px-2'>
                  <Field type='checkbox' name="termsAndCondition">
                     </Field>
                     I accept terms and contidions
                   
                </label>
                <p className='text-danger'>
                 <ErrorMessage name='termsAndCondition' />
                  </p>
                
               </div>
              
              

               <button  className='btn btn-primary mt-5' type='submit' > Submit</button>
               
           </Form>
           
           
           
       </Formik> 
       </div>
       </div>

    </>
  )
}

export default FormValidation;