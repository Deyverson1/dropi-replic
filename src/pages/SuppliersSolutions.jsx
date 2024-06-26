/* This code snippet is a React component named `SuppliersSolutions`. It imports several components
such as `Header`, `ProductCard`, `TwoColumn`, and `Boxes` along with a CSS file. Inside the
component, there are data arrays for product information, first and second row content, and then it
renders these components along with some HTML elements like headings, buttons, and images to display
supplier solutions information on a webpage. */
import Header from '../dashboard/Header';
import ProductCard from '../components/ProductCard';
import TwoColumn from '../components/TwoColumn';
import Boxes from '../components/Boxes';
import '../styles/pages/Suppliers.css'
function SuppliersSolutions() {
  const data = [
    { title: 'Almacenamos', image: 'https://dropi.co/wp-content/uploads/2023/05/proveedores_beneficios_01.jpg' },
    { title: 'EMPAQUETAMOS', image: 'https://dropi.co/wp-content/uploads/2023/05/proveedores_beneficios_02.jpg' },
    { title: 'DESPACHAMOS TUS PRODUCTOS', image: 'https://dropi.co/wp-content/uploads/2023/05/proveedores_beneficios_03.jpg' },
    { title: 'ENVIAMOS TUS PRODUCTOS A TUS CLIENTES FINALES', image: 'https://dropi.co/wp-content/uploads/2023/05/proveedores_beneficios_04.jpg' },
  ]
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
  return (
    <section>
      <Header />
      <ProductCard titleProduct={titleProduct} color={'#ec6f2d'} contentProduct={contentProduct} image={'https://dropi.co/wp-content/uploads/2023/05/proveedores_hero.png'} />
      <TwoColumn firstRow={firstRow} secondRow={secondRow} color={'#ec6f2d'}/>
      <Boxes data={data} color={'#EC6F2D'} />
      <section className='suppliers-card-container'>
        <h2>Conviértete en <em>un proveedor</em></h2>
        <h1>Verificado</h1>
        <button>CONTÁCTANOS</button>
      </section>
      <section className='suppliers-content-video'>
        <iframe src="https://www.youtube-nocookie.com/embed/A7PgU8ObFtQ?controls=1&rel=0&playsinline=0&modestbranding=1&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fdropi.co&widgetid=1" controls autoPlay></iframe>
      </section>
      <section className='suppliers-attach-announce'>
        <h1>¿Cómo funciona el</h1>
        <button>Dropshipping?</button>
        <div>
          <img src="https://dropi.co/wp-content/uploads/2023/05/proveedores_como_funciona.png" alt="" />
        </div>
      </section>
    </section>
  )
}
export default SuppliersSolutions;