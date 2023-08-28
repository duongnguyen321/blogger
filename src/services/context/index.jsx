import React, { createContext, useState } from 'react';
export const { Provider, Consumer } = createContext({});

/**
 * Create a StateProvider component
 *
 * @param {React.ReactNode} children - The children of the StateProvider
 * @returns {JSX.Element}
 */
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
