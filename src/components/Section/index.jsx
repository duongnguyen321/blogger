import React from 'react';
import sectionStyles from 'sectionStyles.module.scss';
export default function Section({ className, children }) {
  const { section: sectionTagStyle } = sectionStyles;
  return (
    <section className={`${sectionTagStyle} ${className}`}>{children}</section>
  );
}
