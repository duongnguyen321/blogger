import React from 'react';
import Link from '@H/Link';
import avatarStyles from 'avatarStyles.module.scss';

export default function Avatar({ name }) {
  const {
    wrap: wrapTagStyle,
    avatar: avatarTagStyle,
    name: nameTagStyle,
  } = avatarStyles;
  if (!name || typeof name !== 'string')
    return (
      <Link to={'#'} className={wrapTagStyle}>
        <span className={avatarTagStyle}>A</span>{' '}
        <span className={nameTagStyle}>Avatar</span>
      </Link>
    );

  // Remove the duplicate white space from name
  name = name.replace(/\s{2,}/g, ' ').trim();

  const firstChar = name.charAt(0).toUpperCase();
  const avatarPosition = name.lastIndexOf(' ') + 1;
  return (
    <Link to={'#'} className={wrapTagStyle}>
      <img className={avatarTagStyle} data-name={name.charAt(avatarPosition)} />{' '}
      <span className={nameTagStyle}>{firstChar + name.slice(1)}</span>
    </Link>
  );
}
