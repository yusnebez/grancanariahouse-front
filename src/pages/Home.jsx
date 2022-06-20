import { Presentacion} from '../components/Presentación'
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
      <Presentacion />
      <Textintro />
      <ListVilla />
      <Footer />
    </div>
  )
}