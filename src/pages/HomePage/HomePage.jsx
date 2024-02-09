import { useEffect } from 'react'
import './HomePage.scss'
import axios from 'axios'
import Swal from 'sweetalert2'
import { WOW } from 'wowjs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import Video from '../../components/VideoPlayer/Video'
import Carousel from '../../components/Carousel/Carousel'
import About from '../../components/About/About'
import Activities from '../../components/Activites/Activities'
import AllCollapseExample from '../../components/Tips/Tips'
import Ecolodge from '../../components/Ecolodge/Ecolodge'
import SpecialTrip from '../../components/SpecialTirp/Special'
function HomePage() {
  return (
    <>
      <div className='col-12'>
        <Video />
        <Carousel />
        <About />
        <Activities />
        <AllCollapseExample />
        <Ecolodge />
        <SpecialTrip />

      </div>
    </>
  )
}
export default HomePage
