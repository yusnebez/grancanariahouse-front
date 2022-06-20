import { Formik, Form, Field, ErrorMessage } from "formik"
import { useNavigate, Link } from "react-router-dom"
import {useVilla} from "../context/GeneralContext"
import * as Yup from 'yup'

export const NewVillaForm = () => {
  
  const {createVilla} = useVilla()
  const navigate = useNavigate()
  
  return (
    <div className="w-screen h-screen absolute flex items-center justify-center  bg-[url('https://res.cloudinary.com/zeben/image/upload/v1652107315/comunidad-exclusiva-de-elegantes-villas-modernas-de-alta-calidad-en-nueva-_wvxwpd.jpg')] bg-cover">
      <div className="p-10 bg-white rounded-md shadow-md shadow-black w-[500px]">
        <header className="flex items-center justify-between py-4 font-bold text-black">
          <h3 className="text-xl">New Villa</h3>
          <Link to="/panelcontrol" className="text-sm font-bold text-black hover:border-b-2 border-b-black">
            Go Back
          </Link>
        </header>
        
    <Formik classname='relative grid grid-cols-4'
        initialValues={{
          title:'',
          descriptionshort:'',
          description:'',
          image:'',
          price:'',
        }}
        validationSchema={Yup.object({
          title: Yup.string().required("Title is required"),
          description: Yup.string().required("Description is required"),
          descriptionshort: Yup.string().required("Description is required"),
          price: Yup.string().required("Description is required"),
        })}
        
        onSubmit={(values,actions) => {
           console.log(values)
           createVilla(values),
           
           navigate('/panelcontrol')
        }} 
    >
        {({handleSubmit }) => ( 
                  <Form onSubmit={handleSubmit}>
                      <label
                        htmlFor="title"
                        className="block mb-2 text-sm font-bold text-black"
                      >
                        Title
                      </label>
                      <Field
                        className="w-full px-4 py-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                        placeholder="Villa title"
                        name="title"
                        // autoFocus
                      />
                      <ErrorMessage
                        component="p"
                        name="title"
                        className="text-sm text-red-400"
                      />
        
                      <label
                        htmlFor="descriptionshort"
                        className="block mb-2 text-sm font-bold text-black"
                      >
                        Description short
                      </label>
                      <Field
                        component="textarea"
                        name="descriptionshort"
                        id="descriptionshort"
                        placeholder="Write a description"
                        rows="3"
                        className="w-full px-3 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                      />
                      <ErrorMessage
                        component="p"
                        name="descriptionshort"
                        className="text-sm text-red-400"
                      />

                      <label
                        htmlFor="description"
                        className="block mb-2 text-sm font-bold text-black"
                      >
                        Description
                      </label>
                      <Field
                        component="textarea"
                        name="description"
                        id="description"
                        placeholder="Write a description"
                        rows="3"
                        className="w-full px-3 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                      />
                      <ErrorMessage
                        component="p"
                        name="description"
                        className="text-sm text-red-400"
                      />
        
                      <label
                        htmlFor="image"
                        className="block mb-2 text-sm font-bold text-black"
                      >
                       Link Image
                      </label>
                      <Field
                        component="textarea"
                        name="image"
                        id="image"
                        placeholder="Link of Image"
                        rows="3"
                        className="w-full px-3 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                      />
                      <ErrorMessage
                        component="p"
                        name="image"
                        className="text-sm text-red-400"
                      />
                      
                      <label
                        htmlFor="price"
                        className="block mb-2 text-sm font-bold text-black"
                      >
                       Price
                      </label>
                      <Field
                        component="textarea"
                        name="price"
                        id="price"
                        placeholder="price"
                        rows="3"
                        className="w-full px-3 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                      />
                      <ErrorMessage
                        component="p"
                        name="price"
                        className="text-sm text-red-400"
                      />
        
                      <button
                        type="submit"
                        className="px-4 py-2 mx-4 mt-2 text-white bg-blue-600 rounded hover:bg-blue-500 w-96"
                      >Save</button>
                  </Form>
        )}
      </Formik>
    </div>
  </div>
  )
}

