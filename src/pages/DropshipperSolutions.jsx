/* This code snippet is a React component named `DropshipperSolutions`. It is a functional component
that represents a page or section of a website related to dropshipping solutions. */
import "../styles/pages/Dropshipper.css";
import ProductCard from "../components/ProductCard";
import Header from "../dashboard/Header";
import Boxes from "../components/Boxes";
import Integration from "../components/Integrations";
function DropshipperSolutions() {
  const dataCards = [
    {
      title: "INGRESAR A LA PLATAFORMA DE DROPI",
      image:
        "https://dropi.co/wp-content/uploads/2023/06/dropshippers_caracteristicas_01.png",
    },
    {
      title: "BUSCAR LOS PRODUCTOS QUE MÁS LE INTERESEN",
      image:
        "https://dropi.co/wp-content/uploads/2023/06/dropshippers_caracteristicas_02.png",
    },
    {
      title: "REALIZAR CAMPAÑAS MEDIANTE FACEBOOK ADS",
      image:
        "https://dropi.co/wp-content/uploads/2023/06/dropshippers_caracteristicas_03.png",
    },
    {
      title: "MONTAR LAS ÓRDENES",
      image:
        "https://dropi.co/wp-content/uploads/2023/06/dropshippers_caracteristicas_04.png",
    },
    {
      title: "ESPERAR A QUE EL PROVEEDOR DESPACHE A SU CLIENTE",
      image:
        "https://dropi.co/wp-content/uploads/2023/06/dropshippers_caracteristicas_05.png",
    },
  ];
  const data = [
    {
      title:
        "CONTAMOS CON UN STOCK DE MILES DE PRODUCTOS QUE SE AJUSTAN A LAS NECESIDADES DEL MERCADO",
      image:
        "https://dropi.co/wp-content/uploads/2023/05/proveedores_beneficios_01.jpg",
    },
    {
      title: "ALMACENAMOS",
      image:
        "https://dropi.co/wp-content/uploads/2023/05/proveedores_beneficios_02.jpg",
    },
    {
      title: "DESPACHAMOS TUS PRODUCTOS",
      image:
        "https://dropi.co/wp-content/uploads/2023/05/proveedores_beneficios_03.jpg",
    },
    {
      title: "ENVIAMOS TUS PRODUCTOS A TUS CLIENTES FINALES",
      image:
        "https://dropi.co/wp-content/uploads/2023/05/proveedores_beneficios_04.jpg",
    },
  ];
  const titleProduct = ["DROPSHIPPING"];
  const contentProduct = [
    "ES UN MODELO DE NEGOCIO QUE PERMITE A CUALQUIER EMPRESA, EMPRENDIMIENTO O PERSONA VENDER PRODUCTOS DE DIFERENTES PROVEEDORES SIN NECESIDAD DE COMPRARLOS PREVIAMENTE",
  ];

  return (
    <section>
      <Header />
      <ProductCard
        titleProduct={titleProduct}
        color={"#F39A3D"}
        contentProduct={contentProduct}
      />
      <section className="dropshipper-card-container">
        {dataCards.map((dato, index) => (
          <article key={index}>
            <div>
              <img src={dato.image} alt="" />
            </div>
            <h3>{dato.title}</h3>
          </article>
        ))}
      </section>
      <div className="dropshipper-seller">
        <h2>
          El dropshipper vende <strong>sin tener un stock</strong>
        </h2>
      </div>
      {/* <Boxes data={data} color={'#F39A3D'} /> */}
      <section className="suppliers-content-video">
        <iframe
          src="https://www.youtube-nocookie.com/embed/A7PgU8ObFtQ?controls=1&rel=0&playsinline=0&modestbranding=1&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fdropi.co&widgetid=1"
          controls
          autoPlay
        ></iframe>
      </section>
      <Integration />
    </section>
  );
}
export default DropshipperSolutions;
