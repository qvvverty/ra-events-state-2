import ShopCard from './ShopCard';

export default function CardsView(props) {
  const { products } = props;
  let key = 0;

  return (
    <div className="cards-container">
      {
        products.map(product => <ShopCard key={key += 1} item={product} />)
      }
    </div>
  )
}
