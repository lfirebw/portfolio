import React from 'react';
import logo from './logo.svg';
import './assets/styles/App.css';
import MainLayout from '@/layouts/MainLayout';
import { Home }  from '@/pages';
function App() {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
}

export default App;
