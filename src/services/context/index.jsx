/**
 * Import React
 */
import React, { createContext, useState } from 'react';

/**
 * Create a StateContext
 */
export const { Provider, Consumer } = createContext({});

/**
 * Create a StateProvider component
 */
export default function StateProvider({ children }) {
  const [state, setState] = useState({});
  /**
   * Define an action function to update the state
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
