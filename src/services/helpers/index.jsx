import React from 'react';
import { useLocation, Link, NavLink } from 'react-router-dom';

/**
 * A custom link component that supports highlighting the current page and
 * navigating to different pages.
 * @param {string} to - The link destination. Can be a string for a relative path or an object with a `pathname` and `search` property for an absolute path. Defaults to '/'.
 * @param {'nav' | 'link'} type - The link type. Can be either 'nav' for a navigation link or 'link' for a regular link. Defaults to 'link'.
 * @param {string} title - The link title. Only applicable for regular links.
 * @param {node} children - The link content. Only applicable for regular links.
 * @param {string} className - The link class name. Can be used to apply custom styles or add hover effects.
 */
export default function Links({
  to = '/',
  type = 'link',
  title,
  children,
  className = '',
}) {
  const location = useLocation();

  return (
    <>
      {location.pathname === to ? (
        // If the current page is the link, render an anchor tag with a highlighted class
        <a href="#" className={`${className} highlight`}>
          {title || children}
        </a>
      ) : (
        // Otherwise, render a NavLink or a regular link depending on the type prop
        <>
          {type === 'nav' ? (
            // If the type is nav, render a NavLink
            <NavLink to={to} className={className}>
              {title || children}
            </NavLink>
          ) : (
            // Otherwise, render a regular link
            <Link to={to} className={className}>
              {title || children}
            </Link>
          )}
        </>
      )}
    </>
  );
}

/**
 * A constant that determines whether the current page is being served from localhost.
 */
export const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    window.location.hostname === '[::1]' ||
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/,
    ),
);
