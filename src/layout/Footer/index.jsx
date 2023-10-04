import propTypes from "prop-types"
import footerStyles from './footerStyles.module.scss';

/**
 * @param {string} className - The class name for the footer tag.
 * @param {React.ReactNode} children - The children of the footer.
 */

Footer.propTypes = {
  className: propTypes.string,
  children: propTypes.node
}
export default function Footer({ className = '', children }) {
  const { footer: footerTagStyle } = footerStyles;
  return (
    <footer className={`${footerTagStyle} ${className}`}>
      <div className="container">{children}</div>
    </footer>
  );
}
