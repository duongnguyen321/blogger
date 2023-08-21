import React from 'react';
import headerStyles from './headerStyles.module.scss';

/**
 * Define the Header component
 */
export default function Header({ className = '', children }) {
  const { header: headerTagStyle } = headerStyles;
  return (
    <header className={`${headerTagStyle} ${className}`}>
      <div className="container">{children}</div>
    </header>
  );
}
