import Header from "../dashboard/Header";
import Cards from "../dashboard/Cards";
import RegisterCard from "../components/Register";

export default function LogIn() {
  const titleRegister = 'Iniciar Sesión'
  return (
    <>
    <Header/>
      <RegisterCard background='#EC6F2D' title={titleRegister} titleColor='#fff' paddingBottom='80px' />
      <Cards/>
    </>
  )
}