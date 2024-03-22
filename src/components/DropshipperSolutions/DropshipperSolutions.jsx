import './Dropshipper.css'
import ProductCard from '../ProductCard/ProductCard'
import Header from '../Header/Header'
import Boxes from '../Boxes/Boxes'
function DropshipperSolutions(){
  const data = [
    {title: 'CONTAMOS CON UN STOCK DE MILES DE PRODUCTOS QUE SE AJUSTAN A LAS NECESIDADES DEL MERCADO', image: 'https://dropi.co/wp-content/uploads/2023/05/proveedores_beneficios_01.jpg'},
    {title: 'ALMACENAMOS', image: 'https://dropi.co/wp-content/uploads/2023/05/proveedores_beneficios_02.jpg'},
    {title: 'DESPACHAMOS TUS PRODUCTOS', image: 'https://dropi.co/wp-content/uploads/2023/05/proveedores_beneficios_03.jpg'},
    {title: 'ENVIAMOS TUS PRODUCTOS A TUS CLIENTES FINALES', image: 'https://dropi.co/wp-content/uploads/2023/05/proveedores_beneficios_04.jpg'},

  ]
  const titleProduct = ['DROPSHIPPING']
  const contentProduct = ['ES UN MODELO DE NEGOCIO QUE PERMITE A CUALQUIER EMPRESA, EMPRENDIMIENTO O PERSONA VENDER PRODUCTOS DE DIFERENTES PROVEEDORES SIN NECESIDAD DE COMPRARLOS PREVIAMENTE']

  return(
    <>
    <Header/>
    <ProductCard titleProduct={titleProduct} color={'#F39A3D'} contentProduct={contentProduct} image={'https://dropi.co/wp-content/uploads/2023/05/dropshippers_hero.png'}/>
    <Boxes data={data} color={'#F39A3D'}/>
    </>
  )
}
export default DropshipperSolutions;