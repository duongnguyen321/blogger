import React from 'react';
import mainStyles from 'mainStyles.module.scss';
export default function Main({ className, children }) {
  const { main: mainTagStyle } = mainStyles;

  return <main className={`${mainTagStyle} ${className}`}>{children}</main>;
}
