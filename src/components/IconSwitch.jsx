import { IconSwitchPropTypes } from './PropTypes';

export default function IconSwitch(props) {
  const { icon, onSwitch } = props;

  function switchHandler(click) {
    onSwitch(click.target.dataset.icon);
  }

  return (
    <div className="icon-wrapper">
      <span data-icon={icon} className="material-icons" onClick={switchHandler}>
        {icon}
      </span>
    </div>
  )
}

IconSwitch.propTypes = IconSwitchPropTypes;
