import {loadStripe} from '@stripe/stripe-js'
import {Elements,CardElement, useStripe, useElements} from '@stripe/react-stripe-js'
import { Formik, Form, Field, ErrorMessage } from "formik"
import { useParams } from 'react-router-dom'

const stripePromise = loadStripe("pk_test_51KyCtOLAYtJWOUuQIGiOmZMo9wjtzy45m1RobqQV2ne2BCAYpniDmsIFT9eDLkUrOaww9f8Ae8mIGzdGmoH0yu9b00P8wGxWCB")

export const PayCard = () => {

  const params = useParams
  const stripe = useStripe()
  const elements = useElements()

  const {getVilla} = useVilla()
  const [villa, setVilla] = useState({
    title: '',
    description: '',
    image:''
  })
 
  useEffect(() => {
    (async () => {
      if (params.id) {
        const data = await getVilla(params.id)
        setVilla(data)
      }
    })()
}, [])


  const handleSubmit = async (e) => {
    e.preventDefault();

  const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement)
    })

  }
    
  return (
    <div>

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
  
  )
}

