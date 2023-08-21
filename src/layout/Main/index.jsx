import React, { cloneElement } from 'react';
import mainStyles from './mainStyles.module.scss';

/**
 * Define the Main component
 * @param {String} className The class name of mainTag
 * @param {ReactElement} children The children of mainTag
 * @param {store} store The context store state, action
 */
export default function Main({ className = '', children, store }) {
  const { main: mainTagStyle } = mainStyles;
  return (
    <main className={`${mainTagStyle} ${className}`}>
      <div className="container">
      {cloneElement(children, { ...store })}
      </div>
    </main>
  );
}
