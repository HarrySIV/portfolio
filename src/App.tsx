import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Header } from './components/heading/Header';

import { Homepage } from './pages/Homepage';

export function App() {
  const routes = (
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
  return (
    <div className="App">
      <Router>
        <Header />
        <main>{routes}</main>
      </Router>
    </div>
  );
}
