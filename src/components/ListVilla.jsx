import {useVilla} from '../context/GeneralContext'
import {VillaCard} from '../components/VillaCard'



export const ListVilla = () => {
  
  const {villa} = useVilla()
  
  if (villa.length ===0){ return
    <div>
      <h1>Villas no disponibles</h1>
    </div>
  }

  return (
    <div>
      <div className='container grid grid-cols-2 gap-2 mx-auto mt-20'>
          {villa.map( villa => (
          <VillaCard villa={villa} key={villa._id}/>
          ))}
      </div>
    </div>
      )
}
