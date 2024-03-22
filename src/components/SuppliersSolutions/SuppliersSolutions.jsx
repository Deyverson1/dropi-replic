import Header from '../Header/Header';
import ProductCard from '../ProductCard/ProductCard';
import TwoColumn from '../TwoColumn/TwoColumn';
import './Suppliers.css'
function SuppliersSolutions(){
  const titleProduct = ['PROVEEDOR']
  const contentProduct = ['CARGA TU STOCK A NUESTRA PLATAFORMA PARA QUE LOS DROPSHIPPERS LOS VENDAN Y DESPACHA AL CLIENTE FINAL']

  const firstRow = [
    "Contamos con más de seis bodegas para almacenar tus productos.",
    "Pagamos en un lapso de 24 horas después de recibir el dinero de tu producto.",
    "Aumentar la rotación de tu inventario a través de miles de comercios electrónicos que pueden interesarse en vender tus productos."
  ]
  const secondRow = [
    "Conviértete en un proveedor estrella vendiendo desde otros países (Panamá, Chile, México, Ecuador).",
    "Crear un medio de distribución fácil y tecnológico, fuera de lo convencional.",
  ]
  return(
    <>
    <Header/>
    <ProductCard titleProduct={titleProduct} color={'#ec6f2d'} contentProduct={contentProduct} image={'https://dropi.co/wp-content/uploads/2023/05/proveedores_hero.png'}/>
    <TwoColumn firstRow={firstRow} secondRow={secondRow}/>
    </>
  )
}
export default SuppliersSolutions;