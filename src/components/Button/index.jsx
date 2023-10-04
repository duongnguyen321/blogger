import propTypes from "prop-types"
import buttonStyles from './buttonStyles.module.scss';

/**
 * Define the Button component
 * @param {string} [type='primary'] - The button type. Can be either 'primary' or 'second'. Defaults to 'primary'.
 * @param {string} className - The button class name. Can be used to apply custom styles.
 * @param {string} title - The button title. Only applicable for regular buttons.
 * @param {node} children - The button content. Only applicable for regular buttons.
 * @param {function} onClick - The button click event handler.
 * @param {boolean} disabled - Whether the button is disabled or not.
 */

Button.propTypes = {
  type: propTypes.oneOf(['primary','secondary']),
  className: propTypes.string,
  title: propTypes.string,
  children: propTypes.node,
  onClick: propTypes.func,
  disabled: propTypes.bool
}
export default function Button({
  type = 'primary',
  className = '',
  title,
  children,
  onClick,
  disabled,
}) {
  const {
    button: buttonTagStyle,
    primary: buttonPrimaryStyle,
    secondary: buttonSecondStyle,
  } = buttonStyles;
  /**
   * Define the button styles based on the type prop
   */
  const buttonStyle =
    type === 'primary' ? buttonPrimaryStyle : buttonSecondStyle;
  return (
    <button
      className={`${buttonTagStyle} ${buttonStyle} ${className} `}
      onClick={onClick}
      disabled={disabled}
      title={title}
    >
      {title || children}
    </button>
  );
}
