/* This code snippet is a React component named `BrandSolutions`. It imports CSS styles and various
components such as `Header`, `ProductCard`, `TwoColumn`, `Boxes`, and `Integration`. */
import "../styles/pages/Brand.css";
import Header from "../dashboard/Header";
import ProductCard from "../components/ProductCard";
import TwoColumn from "../components/TwoColumn";
import Boxes from "../components/Boxes";
import Integration from "../components/Integrations";
function BrandSolutions() {
  const data = [
    {
      title: "FLETES ECONÓMICOS Y TARIFAS COMPETITIVAS PARA TU NEGOCIO",
      image:
        "https://dropi.co/wp-content/uploads/2023/05/marca_propia_beneficios_01.jpg",
    },
    {
      title:
        "ALMACENAMOS, RECIBIMOS Y CUIDAMOS TUS PRODUCTOS EN NUESTROS CENTROS LOGÍSTICOS",
      image:
        "https://dropi.co/wp-content/uploads/2023/05/marca_propia_beneficios_02.jpg",
    },
    {
      title: "EMPACAMOS TUS PRODUCTOS POR TÍ",
      image:
        "https://dropi.co/wp-content/uploads/2023/05/marca_propia_beneficios_03.jpg",
    },
  ];
  const titleProduct = "MARCA PROPIA";
  const subTitle = "TIENES UNA";
  const contentProduct = [
    "TE OFRECEMOS APOYO FULFILLMENT, BRINDANDO SOLUCIONES EN TUS PROCESO LOGÍSTICOS Y ALMACENAMIENTO DE INVENTARIO",
  ];
  const firstRow = [
    "Conviértete en una marca estrella vendiendo en otros países.",
    "Construye tu marca con una tecnología fuera de lo convencional y optimiza procesos logísticos.",
    "Monitorea tus envíos desde la app.",
  ];
  const secondRow = [
    "Descarga reportes desde la app.",
    "Administra tu billetera electrónica.",
    "Retira tu dinero cuando quieras.",
  ];
  return (
    <>
      <Header />
      <ProductCard
        titleProduct={titleProduct}
        contentProduct={contentProduct}
        subTitle={subTitle}
        color={"#FFBE47"}
        image={
          "https://dropi.co/wp-content/uploads/2023/06/BANNER-MARCA-PROPia-1024x1024.png"
        }
      />
      <TwoColumn firstRow={firstRow} secondRow={secondRow} color={"#FFBE47"} />
      {/* <Boxes data={data} color={'#FFBE47'} /> */}
      <Integration />
      <section className="suppliers-content-video">
        <iframe
          src="https://www.youtube-nocookie.com/embed/A7PgU8ObFtQ?controls=1&rel=0&playsinline=0&modestbranding=1&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fdropi.co&widgetid=1"
          controls
          autoPlay
        ></iframe>
      </section>
      <section className="brand-footer-content">
        <div>
          <h1>Automatiza tus</h1>
          <button>Pedidos con dropi</button>
        </div>
        <main>
          <img
            src="https://dropi.co/wp-content/uploads/2023/05/marca_propia_como_funciona-1536x819.png"
            alt=""
          />
        </main>
      </section>
    </>
  );
}
export default BrandSolutions;
