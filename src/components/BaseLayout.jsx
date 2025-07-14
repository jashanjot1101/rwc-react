import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import './BaseLayout.css';

const BaseLayout = ({ children }) => {
  return (
    <div className="base-layout">
      <NavBar />
      <main className="content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default BaseLayout;