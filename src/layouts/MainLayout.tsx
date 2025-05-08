import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="font-sans antialiased text-gray-800">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;