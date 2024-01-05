import React from 'react';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';

const Layout = ({children}) => {
    return (
      <div className="w-full h-screen bg-gray-100">
        <Header />
        {children}
        <Footer />
      </div>
    );
};

export default Layout;