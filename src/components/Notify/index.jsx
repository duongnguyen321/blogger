import React from 'react';
import notifyStyles from 'notifyStyles.module.scss';
import notifyIcon from '@A/images/notify.svg';
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
