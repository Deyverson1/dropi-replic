/* This code is a React component called `CarruselProveedores` that creates a carousel of suppliers.
Here's a breakdown of what the code does: */
import '../styles/pages/proveedores-carousel.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsiveProveedorees } from '../components/Responsive';
export default function CarruselProveedores() {
  const data = [
    { title: 'Alma Cosmetic', image: 'https://dropi.co/wp-content/uploads/2023/05/LOGO-ALMA-4.png' },
    { title: 'Car Block', image: 'https://dropi.co/wp-content/uploads/2023/05/carblock.png' },
    { title: 'Distriecom', image: 'https://dropi.co/wp-content/uploads/2023/11/LOGO-DISTRIECOM.png' },
    { title: 'Distrishop', image: 'https://dropi.co/wp-content/uploads/2024/02/LOGO-DISTRISHOP.png' },
    { title: 'Faka Store', image: 'https://dropi.co/wp-content/uploads/2023/09/LOG-FAKA-STORE.png' },
    { title: 'GGP Comercializadora', image: 'https://dropi.co/wp-content/uploads/2023/11/LOGO-GGP.png' },
    { title: 'Imbambú', image: 'https://dropi.co/wp-content/uploads/2023/12/LOGO-IMBAMBU-1-1024x1024.png' },
    { title: 'Importadora internacional Bogotá', image: 'https://dropi.co/wp-content/uploads/2023/11/logo-importadora.png' },
    { title: 'Nia', image: 'https://dropi.co/wp-content/uploads/2023/08/nia-logo-1024x1024.png' },
    { title: 'Rago', image: 'https://dropi.co/wp-content/uploads/2023/07/RAGO-LOGO-1024x1024.png' },
    { title: 'Stockeado', image: 'https://dropi.co/wp-content/uploads/2024/01/STOCKEADO-LOGO.png' },
    { title: 'Suppli', image: 'https://dropi.co/wp-content/uploads/2023/06/LOGO-SUPPLI-BLANCO-1024x1024.png' },
    { title: 'Xhobbies', image: 'https://dropi.co/wp-content/uploads/2023/05/xhobbies.png' },
  ]
  
  return (
    <section draggable='false'  className='proveedores-carousel-container'>
      <div className='text-container-proveedores'>
        <h5 className='button-carousel-proveedores'>Premiun <span>Dropi</span></h5>
      </div>
      <div  className="proveedores-slide-container">
        <Carousel
          className='proveedores-carousel'
          arrows={true}
          responsive={responsiveProveedorees}
          draggable={true}
          swipeable={true}
          showDots={true}
          autoPlay={true}
          shouldResetAutoplay={true}
          autoPlaySpeed={3000}
          rewind={true}
    
          infinite={true}
          slidesToSlide={1}
          // centerMode={true}
          // renderDotsOutside={true}
          // minimumTouchDrag={50}
        >
          {data.map((dato, index) => (
            <div key={index} className='container-slide'>
              <div><img draggable='false' className='image-proveedores' src={dato.image} alt="" />
              </div>
              <h5 className='text-slide-proveedores'>{dato.title}</h5>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  )
}