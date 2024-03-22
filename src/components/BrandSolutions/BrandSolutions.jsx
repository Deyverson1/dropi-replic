import './Brand.css'
import ProductCard from '../ProductCard/ProductCard'
import TwoColumn from '../TwoColumn/TwoColumn'
import Header from '../Header/Header'
function BrandSolutions(){
  const titleProduct = 'MARCA PROPIA'
  const subTitle = 'TIENES UNA'
  const contentProduct = ['TE OFRECEMOS APOYO FULFILLMENT, BRINDANDO SOLUCIONES EN TUS PROCESO LOGÍSTICOS Y ALMACENAMIENTO DE INVENTARIO']
  const firstRow = [
    "Conviértete en una marca estrella vendiendo en otros países.",
    "Construye tu marca con una tecnología fuera de lo convencional y optimiza procesos logísticos.",
    "Monitorea tus envíos desde la app."
  ]
  const secondRow = [
    "Descarga reportes desde la app.",
    "Administra tu billetera electrónica.",
    "Retira tu dinero cuando quieras."
  ]
  return(
    <>
    <Header/>
    <ProductCard titleProduct={titleProduct} contentProduct={contentProduct} subTitle={subTitle} color={'#FFBE47'} image={'https://dropi.co/wp-content/uploads/2023/06/BANNER-MARCA-PROPia-1024x1024.png'}/>
    <TwoColumn firstRow={firstRow} secondRow={secondRow} />
    </>
  )
}
export default BrandSolutions;