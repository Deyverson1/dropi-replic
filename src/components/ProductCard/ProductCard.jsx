import './productCard.css'
function ProductCard({titleProduct, contentProduct}) {
  return (
    <div className='product-card-container'>
      <img className='product-image' src="https://dropi.co/wp-content/uploads/2023/08/dropicard.png" alt="" />
      <div className='list-container-product'>
        <button className="product-card-button">{titleProduct}</button>
        <div className='product-card-list'>
          <p className='product-card-text'>{contentProduct}</p>
        </div>
      </div>
    </div>
  )
}
export default ProductCard;