import './productCard.css'
function ProductCard({titleProduct, contentProduct, subTitle, color, image}) {
  return (
    <section className='product-card-container'>
     <div>
     <img className='product-image' src={image} alt="" />
     </div>
      <div className='list-container-product'>
        <span className='product-card-subtitle'>{subTitle}</span>
        <span className="product-card-button" style={{backgroundColor: color }}>{titleProduct}</span>
        <div className='product-card-list'>
          <p className='product-card-text'>{contentProduct}</p>
        </div>
      </div>
    </section>
  )
}
export default ProductCard;