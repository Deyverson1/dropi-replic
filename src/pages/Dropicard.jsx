/* This code is a React component named `Dropicard`. It includes imports for CSS styles, `Link` from
`react-router-dom`, and other components like `Header`, `TwoColumn`, and `ProductCard`. */
import "../styles/pages/Dropicard.css";
import { Link } from "react-router-dom";
import Header from "../dashboard/Header";
import TwoColumn from "../components/TwoColumn";
import ProductCard from "../components/ProductCard";
export default function Dropicard() {
  const titleProduct = ["dropicard"];
  const contentProduct = [
    "NUESTRA TARJETA DE CRÉDITO ES UNA NUEVA HERRAMIENTA FINANCIERA, DROPICARD ROMPE LA BRECHA DE AQUELLOS QUE NO ESTÁN BANCARIZADOS Y QUIEREN AGILIZAR SUS PROCESOS DE TRANSFERENCIAS DE WALLET A UN BIEN FINAL",
  ];

  const firstRow = [
    "Simplifica el proceso de activación de tus anuncios de campañas.",
    "Crea tantas tarjetas como necesites.",
    "Recarga tu Dropi Card con el saldo de tu Wallet en un solo clic.",
  ];
  const secondRow = [
    "Puedes hacer múltiples movimientos en un mismo día.",
    "Tu tarjeta aliada con VISA.",
    "Compra online, sin límites.",
  ];
  return (
    <section>
      <Header />
      <ProductCard
        titleProduct={titleProduct}
        color={"#ec6f2d"}
        contentProduct={contentProduct}
        image={"https://i.ytimg.com/vi/1pksP16srkE/maxresdefault.jpg"}
      />
      <TwoColumn firstRow={firstRow} color={"#ec6f2d"} secondRow={secondRow} />
      <section className="secondTextFullContainer">
        <h2 className="secondTextTitle">Así de fácil</h2>
        <div className="secondContainerText">
          <h3 className="secondTextDropi">La obtienes</h3>
        </div>
      </section>
      <div className="infographic">
        <img
          className="desktop"
          src="https://dropi.co/wp-content/uploads/2023/08/Infografia_Horizontal-2-1536x474.png"
          alt=""
        />
        <img
          className="mobile"
          src="https://dropi.co/wp-content/uploads/2023/08/Infografia_Vertical-1.png"
          alt=""
        />
      </div>
      <section className="contactDropicard">
        <h2 className="contactDropicardtextTitle">¡DEJA LAS DUDAS ATRÁS,</h2>
        <span>COMUNÍCATE CON NOSOTROS!</span>
        <div className="contactDropicardcontainerText">
          <Link to="https://api.whatsapp.com/send?phone=573218379821&text=Hola%20vengo%20de%20la%20Web%20y%20deseo%20saber%20m%C3%A1s%20sobre%20la%20capacitaci%C3%B3n%20de%20la%20plataforma!%20">
            <button className="contactDropicardtextDropiCard">
              CONTÁCTANOS
            </button>
          </Link>
        </div>
      </section>
    </section>
  );
}
