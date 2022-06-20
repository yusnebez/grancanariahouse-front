import { useNavigate } from 'react-router-dom'


export const VillaCard = ({villa}) => {


  const navigate = useNavigate()

  
  return (
    <div className="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" 
    onClick={() => navigate(`/villa/${villa._id}`)}>
      <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={villa.image} alt=""></img>
      <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{villa.title}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{villa.descriptionshort}</p>
    </div>
    </div>
    )
}



