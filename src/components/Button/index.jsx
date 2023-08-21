import React from 'react';
import buttonStyles from './buttonStyles.module.scss';

/**
 * Define the Button component
 */
export default function Button(props) {
  const {
    type = 'primary',
    className,
    title,
    children,
    onClick,
    disabled,
  } = props;
  const {
    button: buttonTagStyle,
    primary: buttonPrimaryStyle,
    second: buttonSecondStyle,
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
    >
      {title || children}
    </button>
  );
}
