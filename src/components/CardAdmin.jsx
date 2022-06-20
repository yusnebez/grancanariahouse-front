import { useNavigate } from 'react-router-dom'
import {useVilla} from '../context/GeneralContext'

export const CardAdmin = ({villa}) => {

  const {deleteVilla} = useVilla()
  const navigate = useNavigate()

  const handleDelete = (id) => {
    deleteVilla(id)
  }

  return (
    <div>
      
      <div className="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" 
        onClick={() => navigate(`/villa/${villa._id}`)}>
      <img className="object-cover w-full rounded-t-lg h-90 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={villa.image} alt=""></img>
      <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{villa.title}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{villa.descriptionshort}</p>
        </div>
        
        </div>
        <div className='container grid grid-cols-2 mx-auto mb-20'>
        <button className="w-1/2 gap-2 py-1 ml-20 text-sm bg-red-600 rounded-md mb-15" 
        onClick={() => handleDelete(villa._id)}>Delete</button>
        <button className='w-1/2 gap-2 text-sm rounded-md mr-30 mb-15 bg-sky-300' 
        onClick={() => navigate(`/edit/${villa._id}`)}>Edit</button>
        </div>
        </div>
       
      
    
  )
}


        
         
