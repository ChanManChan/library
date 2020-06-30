import React from 'react';
import Router from './Router';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='container'>
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
