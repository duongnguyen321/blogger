import React from 'react';
import notifyIcon from 'assets/images/notify.svg';
import notifyStyles from './notifyStyles.module.scss';

/**
 * Define the Notify component
 */
export default function Notify({ className, message, type = 'success' }) {
  const {
    notify: notifyTagStyle,
    success: notifySuccessStyle,
    failed: notifyFailedStyle,
    message: messageTagStyle,
  } = notifyStyles;
  return (
    <div
      className={`${notifyTagStyle} ${
        type === 'success' ? notifySuccessStyle : notifyFailedStyle
      } ${className}`}
    >
      <span className={messageTagStyle}>{message}</span>
      <img src={notifyIcon} alt={message} />
    </div>
  );
}