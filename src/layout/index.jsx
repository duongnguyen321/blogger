import propTypes from "prop-types"
import Header from '@/layout/Header';
import Main from '@/layout/Main';
import Footer from '@/layout/Footer';
import StateProvider from '@/services/context';
import { Consumer } from "@/services/context/Provider";

/**
 * @param {React.ReactNode} children - The children of the Layout.
 */

Layout.propTypes = {
  children: propTypes.node
}
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
