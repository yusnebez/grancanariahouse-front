import { Fondo} from '../components/Fondo'
import {Textintro} from '../components/Textintro'
import {Nav} from '../components/Nav'
import '../index.css'
import { ListVilla } from '../components/ListVilla'
import {Footer} from '../components/Footer'

export const Home = () => {


  /*        */
  return (
    <div >
      <Nav />
      <Fondo />
      <Textintro />
      <ListVilla />
      <Footer />
    </div>
  )
}