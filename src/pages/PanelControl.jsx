import {Nav} from '../components/Nav'
import { ListAdmin } from '../components/ListAdmin'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {useVilla} from '../context/GeneralContext'
import { Footer } from '../components/Footer'


export const PanelControl = () => {

 

  
  
  
  return (
    <div>
     <Nav/>
     <Link to="/new" className="container grid w-1/2 grid-cols-1 p-2 mx-auto text-lg font-bold text-center text-white bg-blue-700 border rounded-md mt-15 ml-30 hover:text-blue-400">
          Create New Villa
      </Link>
  
     <ListAdmin/>
     <Footer />
     
    </div>
  )
}

