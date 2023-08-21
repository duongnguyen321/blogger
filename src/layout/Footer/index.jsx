import React from 'react';
import footerStyles from './footerStyles.module.scss';

/**
 * Define the Footer component
 */
export default function Footer({ className = '', children }) {
  const { footer: footerTagStyle } = footerStyles;
  return (
    <footer className={`${footerTagStyle} ${className}`}>
      <div className="container">{children}</div>
    </footer>
  );
}
