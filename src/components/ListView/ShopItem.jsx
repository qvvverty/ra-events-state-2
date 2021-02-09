import { ProductItemPropTypes } from '../PropTypes';

export default function ShopItem({ item }) {
  return (
    <div className="shop-item">
      <img src={item.img} className="shop-item-img" alt={item.name + ', ' + item.color} />
      <span className="shop-item-name">{item.name}</span>
      <span>{item.color}</span>
      <span className="shop-item-price">${item.price}</span>
      <button className="add-to-cart-btn">Add to cart</button>
    </div>
  )
}

ShopItem.propTypes = ProductItemPropTypes;
