import './Dropshipper.css'
import ProductCard from '../ProductCard/ProductCard'
import Header from '../Header/Header'
function DropshipperSolutions(){
  const titleProduct = ['DROPSHIPPING']
  const contentProduct = ['ES UN MODELO DE NEGOCIO QUE PERMITE A CUALQUIER EMPRESA, EMPRENDIMIENTO O PERSONA VENDER PRODUCTOS DE DIFERENTES PROVEEDORES SIN NECESIDAD DE COMPRARLOS PREVIAMENTE']

  return(
    <>
    <Header/>
    <ProductCard titleProduct={titleProduct} color={'#F39A3D'} contentProduct={contentProduct} image={'https://dropi.co/wp-content/uploads/2023/05/dropshippers_hero.png'}/>
    </>
  )
}
export default DropshipperSolutions;