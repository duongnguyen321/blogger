import React, { useEffect, useState } from 'react';
import notifyIcon from 'assets/images/notify.svg';
import notifyStyles from './notifyStyles.module.scss';

/**
 * Define the Notify component
 * @param {object} props - The component props
 * @param {string} [className] - The notify class name. Can be used to apply custom styles.
 * @param {string} [message] - The notify message.
 * @param {'success' | 'failed'} [type='success'] - The notify type. Can be either 'success' or 'failed'. Defaults to 'success'.
 * @param {number} [timeout=3] - The notify duration in seconds. Defaults to 3 seconds.
 */
export default function Notify({
  className = '',
  message,
  type = 'success',
  timeout = 3,
}) {
  const {
    notify: notifyTagStyle,
    success: notifySuccessStyle,
    failed: notifyFailedStyle,
    message: messageTagStyle,
  } = notifyStyles;

  const classNameNotify = `${notifyTagStyle} 
  ${type === 'success' ? notifySuccessStyle : notifyFailedStyle} ${className}`;
  return (
    <div className={classNameNotify}
      style={{ animationDuration: `${timeout}s` }}
    >
      <span className={messageTagStyle}>{message}</span>
      <img src={notifyIcon} alt={message} />
    </div>
  );
}
