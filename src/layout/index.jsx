import React from 'react';
import Header from 'layout/Header';
import Main from 'layout/Main';
import Footer from 'layout/Footer';
import StateProvider, { Consumer } from 'services/context';

export default function Layout({ children }) {
  return (
    <>
      <Header>header</Header>
      <StateProvider>
        <Consumer>
          {(store)=> <Main store={store}>{children}</Main>}
        </Consumer>
      </StateProvider>
      <Footer>footer</Footer>
    </>
  );
}
