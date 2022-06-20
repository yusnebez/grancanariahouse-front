import { Formik, Form, Field, ErrorMessage } from "formik"
import {useVilla} from "../context/GeneralContext"
import * as Yup from 'yup'
import {Nav} from '../components/Nav'

export const Login = () => {
  
  const {login} = useVilla()
 
  
  return (
    <div className=" absolute w-screen h-screen  bg-[url('https://res.cloudinary.com/zeben/image/upload/v1652107315/comunidad-exclusiva-de-elegantes-villas-modernas-de-alta-calidad-en-nueva-_wvxwpd.jpg')] bg-cover">
    
    <Formik 
        initialValues={{
          email:'',
          password:''
        }}
        validationSchema={Yup.object({
          email: Yup.string().required("Title is required"),
          password: Yup.string().required("Description is required")
        })}
        
        onSubmit={ (values,actions) => {
           login(values)
        }} 

        
      >
        {({handleSubmit}) => (  
          
          <Form className="relative w-9/12 pt-20 pb-4 m-auto mt-20 bg-white border rounded-lg shadow-md pb md:flex-row md:max-w-xl h-80 rounder-md"
           onSubmit={handleSubmit}>
          <div className="grid w-9/12 m-auto mb-3">
            <Field className="block text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 p-2.5" name='email' placeholder='mail@gmail.com'></Field>
            <ErrorMessage className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" name='email' />
          </div> 
          <div className="grid w-9/12 m-auto mb-2">
            <Field className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type='password' name='password' placeholder='password'></Field>
            <ErrorMessage className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" name='password'/>
          </div>
          <div className="grid w-9/12 m-auto mb-3">
            <button type='submit' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>  
          </div>
          </Form>

        )}
      </Formik>
    
    </div>
  
  )
}

