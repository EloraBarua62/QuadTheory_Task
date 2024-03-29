import React from 'react';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';

const Layout = ({children}) => {
    return (
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    );
};

export default Layout;