import '../styles/pages/register.css'
import Header from "../dashboard/Header"
import Cards from "../dashboard/Cards"
import ContactAlies from "../dashboard/ContactAlies"
import CarouselDashboard from "../dashboard/Carousel"
import RegisterCard from "../components/Register"
export default function RegisterPage() {
  return (
    <>
      <Header />
      <RegisterCard background='#EC6F2D' title={'Regístrate'} titleColor='#fff' paddingBottom='80px' />
      <section>
        <div className="register-container-val">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-playstation-triangle" style={{ transform: 'rotate(90deg)' }} width="124" height="124" viewBox="0 0 24 24" color='white' strokeWidth=".7" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z" /><path d="M9.5 13h5l-2.5 -3.5z" fill='white' /></svg>
        </div>
      </section>
      <Cards />
      <ContactAlies button={'Regístrate'} />
      <CarouselDashboard />
    </>
  )
}