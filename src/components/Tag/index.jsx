import React from 'react';
import Link from '@H/Link';
import tagStyles from 'tagStyles.module.scss';

export default function Tag({ to = '#', text, className }) {
  const { tag: tagTagStyle } = tagStyles;

  return (
    <Link to={to} className={`${tagTagStyle} ${className}`}>
      {text}
    </Link>
  );
}
