import PropTypes from 'prop-types';

export const IconSwitchPropTypes = {
  icon: PropTypes.string,
  onSwitch: PropTypes.func
}

export const ProductItemPropTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
    color: PropTypes.string,
    img: PropTypes.string
  })
}
