import { IconSwitchPropTypes } from './PropTypes';

export default function IconSwitch(props) {
  const { icon, onSwitch } = props;

  return (
    <div className="icon-wrapper">
      <span data-icon={icon} className="material-icons" onClick={() => onSwitch(icon)}>
        {icon}
      </span>
    </div>
  )
}

IconSwitch.propTypes = IconSwitchPropTypes;
