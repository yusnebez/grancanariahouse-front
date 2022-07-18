import { Routes, Route } from 'react-router-dom'
import {GeneralProvider} from './context/GeneralContext'
import {
  Home, Contact, HolidayRental, 
  LongTermRental, NoFoundPage, Sales, 
  PanelControl, NewVillaForm, Login,
  Signup, VillaOne, EditVillaForm,
  PayCard} 
  from './pages/index.jsx'


const App = () => {
  
  return (
    <div>
      <GeneralProvider>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/holidayrental' element={<HolidayRental />}/>
          <Route path='/longtermrental' element={<LongTermRental />}/>
          <Route path='/sales' element={<Sales />}/>
          <Route path='/panelcontrol' element={<PanelControl />}/>
          <Route path='/new' element={<NewVillaForm/>}/>
          <Route path='/villa/:id' element={<VillaOne/>}/>
          <Route path='/villa' element={<VillaOne/>}/>
          <Route path='/edit/:id' element={<EditVillaForm/>}/>
          <Route path='/pay/:id' element={<PayCard/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='*' element={<NoFoundPage />}/>
        </Routes>
      </GeneralProvider>
    </div>
  )
}

export default App
