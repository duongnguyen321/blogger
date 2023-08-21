import React from 'react';
import { Link } from 'helper';
import tagStyles from './tagStyles.module.scss';

/**
 * Define the Tag component
 */
export default function Tag({ to = '#', text, className }) {
  const { tag: tagTagStyle } = tagStyles;

  return (
    <Link to={to} className={`${tagTagStyle} ${className}`}>
      {text}
    </Link>
  );
}