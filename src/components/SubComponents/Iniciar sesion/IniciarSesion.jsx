import Header from "../../Header/Header";
import Cards from "../../Main/cards/Cards";
import Register from "../../Register/Register";

export default function IniciarSesion() {
  const titleRegister = 'Iniciar Sesión'
  return (
    <>
    <Header/>
      <Register background='#EC6F2D' title={titleRegister} titleColor='#fff' paddingBottom='80px' />
      <Cards/>
    </>
  )
}