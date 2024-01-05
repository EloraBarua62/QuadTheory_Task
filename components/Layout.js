import React from 'react';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';

const Layout = ({children}) => {
    return (
      <>
        <Header />
        {children}
        <Footer />
      </>
    );
};

export default Layout;