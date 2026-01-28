/* This code snippet is a React component named `Integration` that displays a list of integrations with
their titles and images. Here's a breakdown of what the code is doing: */
import "../styles/components/Integrations.css";
function Integration() {
  const dataIntegrations = [
    {
      title: "WooCommerce",
      image:
        "https://wokpress.com/wp-content/uploads/2018/10/woocommerce-logo-e1429552613105.png",
    },
    {
      title: "Shopify",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKn9aLoty_UXkNdEqUL4GHeE1j90-br8l09A&s",
    },
    {
      title: "Chat Center",
      image: "https://chatcenter.net/wp-content/uploads/2025/04/Logo-CNN.svg",
    },
    // {title: '3pod 3dpod', image: 'https://dropi.co/wp-content/uploads/2023/10/3pod.png'},
  ];
  return (
    <>
      <div className="integrations">
        <h1>Integraciones</h1>
        <button>Disponibles</button>
      </div>
      <article className="integrations-cards-content">
        {dataIntegrations.map((dato, index) => (
          <main key={index} className="integrations-card">
            <div>
              <img src={dato.image} alt="" />
            </div>
            <h1>{dato.title}</h1>
            <button>Ver</button>
          </main>
        ))}
      </article>
    </>
  );
}
export default Integration;
