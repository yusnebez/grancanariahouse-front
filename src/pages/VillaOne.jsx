import {useEffect, useState} from 'react'
import {useVilla} from '../context/GeneralContext'
import { useParams, useNavigate } from 'react-router-dom'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import {loadStripe} from '@stripe/stripe-js'
import {Elements,CardElement} from '@stripe/react-stripe-js'
import {AiFillBulb } from 'react-icons/ai'

const stripePromise = loadStripe("pk_test_51KyCtOLAYtJWOUuQIGiOmZMo9wjtzy45m1RobqQV2ne2BCAYpniDmsIFT9eDLkUrOaww9f8Ae8mIGzdGmoH0yu9b00P8wGxWCB")

export const VillaOne = () => {

  const navigate = useNavigate()
  const params = useParams()
  const {getVilla} = useVilla()
  const [villa, setVilla] = useState({
    title: '',
    description: '',
    image:'',
    icono: <AiFillBulb/>
  })
 
  useEffect(() => {
    (async () => {
      if (params.id) {
        const data = await getVilla(params.id)
        setVilla(data)
      }
    })()
}, [])



  return ( 
    <div>
      <Nav />
    <div className='container grid grid-cols-1 gap-2 mx-auto mt-10'>
      <div className='content-center justify-center col-span-3'><img className='bg-cover' src={villa.image} alt=""/></div>
      <div className='col-span-3 mt-10 mb-10 text-xl font-bold text-center'><h1>{villa.title}</h1></div>
      <p>{villa.icono}</p>
    </div>
    <div className="items-center mt-10 ml-24 bg-white border rounded-lg shadow-md jut mflex-col mflex md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" 
    onClick={() => navigate(`/pay/${villa._id}`)}>
    <p className='text-lg font-bold text-center'>Reservar por {villa.price}</p>
    </div>
    <Footer />
  </div>
  )
}

