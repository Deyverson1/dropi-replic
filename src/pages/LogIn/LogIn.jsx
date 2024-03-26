import Header from "../../dashboard/Header/Header";
import Cards from "../../dashboard/Cards/Cards";
import RegisterCard from "../../components/Register/Register";

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