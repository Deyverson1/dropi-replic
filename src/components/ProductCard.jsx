/* The code snippet is a React component named `ProductCard`. It is a functional component
that takes in props such as `titleProduct`, `contentProduct`, `subTitle`, `color`, and `image`. */
import '../styles/components//productCard.css'
function ProductCard({ titleProduct, contentProduct, subTitle, color, image }) {
  return (
    <section className='product-card-container'>
      <div>
        <img className='product-image' src={image} alt="" />
      </div>
      <div className='list-container-product'>
        <span className='product-card-subtitle'>{subTitle}</span>
        <span className="product-card-button" style={{ backgroundColor: color }}>{titleProduct}</span>
        <div className='product-card-list'>
          <p className='product-card-text'>{contentProduct}</p>
        </div>
      </div>
    </section>
  )
}
export default ProductCard;