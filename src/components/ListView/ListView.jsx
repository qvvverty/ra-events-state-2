import ShopItem from './ShopItem';

export default function ListView(props) {
  const { products } = props;
  let key = 0;

  return (
    <div>
      {
        products.map(product => <ShopItem key={key += 1} item={product} />)
      }
    </div>
  )
}
