import { ProductItemPropTypes } from '../PropTypes';

export default function ShopCard({ item }) {
  return (
    <div className="shop-card">
      <span className="shop-item-name">{item.name}</span>
      <span className="shop-card-color">{item.color}</span>
      <img src={item.img} className="shop-card-img" alt={item.name + ', ' + item.color} />
      <div className="shop-card-price-btn-container">
        <span className="shop-item-price">${item.price}</span>
        <button className="add-to-cart-btn">Add to cart</button>
      </div>
    </div>
  )
}

ShopCard.propTypes = ProductItemPropTypes;
