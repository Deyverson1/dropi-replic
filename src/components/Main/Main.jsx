import './Main.css'
import Video from './video/Main-Video'
import Cards from './cards/Cards'
import AboutUs from './aboutUs/AboutUs'
import WhyDropi from './whyDropi/WhyDropi'
import Panels from './panels/Panels'

export default function Main() {

    return(
      <main>
         <Video />
         <Cards />
         <AboutUs />
         <WhyDropi />
         <Panels />
      </main>
   )
}