import React from 'react';
import footerStyles from 'footerStyles.module.scss';
export default function Footer({ className, children }) {
  const { footer: footerTagStyle } = footerStyles;
  return (
    <footer className={`${footerTagStyle} ${className}`}>{children}</footer>
  );
}
