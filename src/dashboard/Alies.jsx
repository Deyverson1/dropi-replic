/**
 * The Alies component renders a section with a carousel, a call-to-action button for skill
 * enhancement, a video iframe, a contact section, and a section to showcase verified providers.
 * @returns The Alies component is being returned, which includes sections for displaying a carousel,
 * promoting skill enhancement, showcasing a video, providing a contact form, and highlighting verified
 * suppliers.
 */
import "../styles/dashboard/Alies.css";
import { Link } from "react-router-dom";
import CarouselDashboard from "./Carousel";
import ContactAlies from "./ContactAlies";
export default function Alies() {
  return (
    <section>
      {/* <section>
        <CarouselDashboard />
      </section> */}
      <section>
        <div className="alies-cap-container">
          <h3 className="alies-cap-text">Potencia tus habilidades</h3>
          <button className="alies-cap-button">Capacítate</button>
        </div>
      </section>
      <div className="alies-container-video">
        <iframe
          className="alies-video"
          src="https://www.youtube.com/embed/hYmMSAIDAh8?si=QXPGPHUIL7u34xIq"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          title="TOUR PLATAFORMA DROPI"
        ></iframe>
      </div>

      <ContactAlies button={"Contactanos"} />
    </section>
  );
}
