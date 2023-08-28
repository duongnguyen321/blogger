import React from 'react';
import Header from 'layout/Header';
import Main from 'layout/Main';
import Footer from 'layout/Footer';
import StateProvider, { Consumer } from 'services/context';

/**
 * @param {React.ReactNode} children - The children of the Layout.
 */
export default function Layout({ children }) {
  return (
    <>
      <Header>header</Header>
      <StateProvider>
        <Consumer>{(store) => <Main store={store}>{children}</Main>}</Consumer>
      </StateProvider>
      <Footer>footer</Footer>
    </>
  );
}
