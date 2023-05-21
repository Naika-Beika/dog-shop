import React from 'react';
import './App.css';
import { Footer } from './components/Footer';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';

function App () {
  return (
    <div className='App'>
      <Header />
      <main className='content'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;