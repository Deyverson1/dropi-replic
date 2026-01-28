/**
 * The function `CarouselDashboard` renders a carousel component displaying images of various allies
 * with responsive settings.
 * @returns The code snippet is a React functional component named `CarouselDashboard` that returns a
 * carousel component displaying images of different allies. The component includes a title "Aliados",
 * a container for the carousel, and a `Carousel` component from the `react-multi-carousel` library.
 * The `Carousel` component is configured with various props such as arrows, responsive settings,
 * draggable, swipeable, showDots,
 */
import "../styles/dashboard/Carousel.css";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { responsive } from "../components/Responsive";
export default function CarouselDashboard() {
  return (
    <div className="carousel-container">
      <h5>Aliados</h5>
      <div className="slide-container">
        <Carousel
          className="carousel"
          arrows={true}
          responsive={responsive}
          draggable={true}
          swipeable={true}
          showDots={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          rewind={true}
          infinite={true}
        >
          <img
            className="image"
            src="https://tienda.coordinadora.com/cdn/shop/files/mi-coordinadora_dc8917d2-6af3-43bb-9e77-f2ea29e10f99.png?crop=center&height=256&v=1699536704&width=256"
            alt=""
          />
          <img
            className="image"
            src="https://dropi.co/wp-content/uploads/elementor/thumbs/aliado_envia-q66plcdsp56lt5a7efjyrfchuhiirjyzw7uucwvt60.png"
            alt=""
          />
          <img
            className="image"
            src="https://dropi.co/wp-content/uploads/elementor/thumbs/aliado_servientrega-q66plcdsp56lt5a7efjyrfchuhiirjyzw7uucwvt60.png"
            alt=""
          />
          <img
            className="image"
            src="https://dropi.co/wp-content/uploads/elementor/thumbs/aliado_interrapidisimo-q66plcdsp56lt5a7efjyrfchuhiirjyzw7uucwvt60.png"
            alt=""
          />
          <img
            className="image"
            src="https://dropi.co/wp-content/uploads/elementor/thumbs/aliado_domina-q66plcdsp56lt5a7efjyrfchuhiirjyzw7uucwvt60.png"
            alt=""
          />
          <img
            className="image"
            src="https://dropi.co/wp-content/uploads/elementor/thumbs/aliado_shopify-q66plcdsp56lt5a7efjyrfchuhiirjyzw7uucwvt60.png"
            alt=""
          />
          <img
            className="image"
            src="https://dropi.co/wp-content/uploads/elementor/thumbs/aliado_woocommerce-q66plcdsp56lt5a7efjyrfchuhiirjyzw7uucwvt60.png"
            alt=""
          />
          {/* <img className='image' src="https://dropi.co/wp-content/uploads/elementor/thumbs/logo_99minutos-qdnryspe0e4x89ch40f9dt692h05b8bwbrjtelwfvs.png" alt="" /> */}
        </Carousel>
      </div>
    </div>
  );
}
