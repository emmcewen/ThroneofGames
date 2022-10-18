import React, { useState } from 'react';
// import Nav from './Nav';
import Store from '../pages/Store';
import SignIn from '../pages/SignIn'


export default function GameContainer() {
  const [currentPage, setCurrentPage] = useState('Store');

  const renderPage = () => {
    if (currentPage === 'Store') {
      return <Store />;
    }
    if (currentPage === 'SignIn') {
      return <SignIn />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* <Nav currentPage={currentPage} handlePageChange={handlePageChange} /> */}
      {renderPage()}
    </div>
  );
}
 