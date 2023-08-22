import React, { createRef, useEffect, useState } from 'react';
import notifyIcon from 'assets/images/notify.svg';
import notifyStyles from './notifyStyles.module.scss';
/**
 * Define the Notify component
 * @param {string} [message] - The notify message.
 * @param {'success' | 'failed'} [type='success'] - The notify type. Can be either 'success' or 'failed'. Defaults to 'success'.
 * @param {number} [timeout=3] - The notify duration in seconds. Defaults to 3 seconds.
 * @param {string} [position='top-left'] - The notify position. Defaults to 'top-left'.
 * @param {string} [className] - The notify class name. Can be used to apply custom styles.
 */
export default function Notify({
  message = '',
  type = 'success',
  timeout = '3',
  position = 'top-left',
  className = '',
}) {
  const notifyRef = createRef();
  const {
    notify: notifyTagStyle,
    success: notifySuccessStyle,
    failed: notifyFailedStyle,
    message: messageTagStyle,
    'top-left': positionTopLeftStyle,
    'top-right': positionTopRightStyle,
    'bottom-left': positionBottomLeftStyle,
    'bottom-right': positionBottomRightStyle,
  } = notifyStyles;
  const classNamePosition = () => {
    switch (position) {
      case 'top-left':
        return positionTopLeftStyle;
      case 'top-right':
        return positionTopRightStyle;
      case 'bottom-left':
        return positionBottomLeftStyle;
      case 'bottom-right':
        return positionBottomRightStyle;
      default:
        return positionTopLeftStyle;
    }
  };
  const classNameNotify = `${notifyTagStyle} ${classNamePosition()}
  ${type === 'success' ? notifySuccessStyle : notifyFailedStyle} ${className}`;
  useEffect(() => {
    setTimeout(() => notifyRef.current.remove(), +timeout * 1000);
  }, [timeout]);
  return (
    <div
      className={classNameNotify}
      style={{ animationDuration: `${timeout}s` }}
      ref={notifyRef}
    >
      <span className={messageTagStyle}>{message}</span>
      <img src={notifyIcon} alt={message} />
    </div>
  );
}
