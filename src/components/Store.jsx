import { useState } from 'react';
import IconSwitch from './IconSwitch';
import ListView from './ListView/ListView';
import CardsView from './CardsView/CardsView';

const products = [{
  name: "Nike Metcon 2",
  price: "130",
  color: "red",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "blue",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
}, {
  name: "Nike free run",
  price: "170",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
}, {
  name: "Nike Metcon 3",
  price: "150",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
}];

export default function Store() {
  const icons = ['view_list', 'view_module'];
  const [currentIcon, changeIcon] = useState(icons[0]);

  function onSwitch(switchState) {
    changeIcon(icons.find(icon => icon !== switchState));
  }

  function showProducts() {
    if (currentIcon === 'view_list') return <ListView products={products} />;
    else return <CardsView products={products} />;
  }

  return (
    <>
      <IconSwitch onSwitch={onSwitch} icon={currentIcon} />
      {showProducts()}
    </>
  )
}
