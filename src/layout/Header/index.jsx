import React from 'react';
import headerStyles from 'headerStyles.module.scss';
export default function Header({ className, children }) {
  const { header: headerTagStyle } = headerStyles;
  return (
    <header className={`${headerTagStyle} ${className}`}>{children}</header>
  );
}
