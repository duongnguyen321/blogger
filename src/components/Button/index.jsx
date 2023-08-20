import React from 'react';
import buttonStyles from 'buttonStyles.module.scss';

export default function Button({
  type = 'primary',
  className,
  title,
  children,
  onClick,
  disabled,
}) {
  const {
    button: buttonTagStyle,
    primary: buttonPrimaryStyle,
    second: buttonSecondStyle,
  } = buttonStyles;
  return (
    <button
      className={`${buttonTagStyle} ${
        type === 'primary' ? buttonPrimaryStyle : buttonSecondStyle
      } ${className} `}
      onClick={onClick}
      disabled={disabled}
    >
      {title || children}
    </button>
  );
}
