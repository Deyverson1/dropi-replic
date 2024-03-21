import './Carrusel.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
export default function Carrusel() {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 6
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      }
    return(
        <div className='carousel-container'>
            <h5>Aliados</h5>
            <div className="slide-container">
                <Carousel 
                className='carousel' 
                arrows={true} 
                responsive={responsive}
                draggable={true}
                swipeable={true}
                showDots={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                rewind={true}
                >
                    <img className='image' src="https://dropi.co/wp-content/uploads/elementor/thumbs/aliado_coodinadora-q66plbfyib5bhjbkjx5c6xl193n5juv9k37cvmx7c8.png" alt="" />
                    <img className='image' src="https://dropi.co/wp-content/uploads/elementor/thumbs/aliado_envia-q66plcdsp56lt5a7efjyrfchuhiirjyzw7uucwvt60.png" alt="" />
                    <img  className='image' src="https://dropi.co/wp-content/uploads/elementor/thumbs/aliado_servientrega-q66plcdsp56lt5a7efjyrfchuhiirjyzw7uucwvt60.png" alt="" />
                    <img className='image' src="https://dropi.co/wp-content/uploads/elementor/thumbs/aliado_interrapidisimo-q66plcdsp56lt5a7efjyrfchuhiirjyzw7uucwvt60.png" alt="" />
                    <img className='image' src="https://dropi.co/wp-content/uploads/elementor/thumbs/aliado_domina-q66plcdsp56lt5a7efjyrfchuhiirjyzw7uucwvt60.png" alt="" />
                    <img className='image' src="https://dropi.co/wp-content/uploads/elementor/thumbs/aliado_shopify-q66plcdsp56lt5a7efjyrfchuhiirjyzw7uucwvt60.png" alt="" />
                    <img className='image' src="https://dropi.co/wp-content/uploads/elementor/thumbs/aliado_woocommerce-q66plcdsp56lt5a7efjyrfchuhiirjyzw7uucwvt60.png" alt="" />  
                    <img className='image' src="https://dropi.co/wp-content/uploads/elementor/thumbs/logo_99minutos-qdnryspe0e4x89ch40f9dt692h05b8bwbrjtelwfvs.png" alt="" />
                
                </Carousel>
            </div>
        </div>
    )
}