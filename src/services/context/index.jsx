import { useState } from 'react';
import propTypes from "prop-types"
import { Provider } from './Provider';

/**
 * Create a StateProvider component
 *
 * @param {React.ReactNode} children - The children of the StateProvider
 * @returns {JSX.Element}
 */

StateProvider.propTypes = {
  children: propTypes.node
}
export default function StateProvider({ children }) {
  const [state, setState] = useState({});

  /**
   * Define an action function to update the state
   *
   * @param {string} type - The type of the action
   * @param {*} payload - The payload of the action
   */
  const action = (type, payload) => {
    setState({ ...state, [type]: payload });
  };

  return (
    <Provider
      value={{
        state,
        action,
      }}
    >
      {children}
    </Provider>
  );
}
