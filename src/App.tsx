import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { NavLinks } from './components/heading/NavLinks';

import { Homepage } from './pages/homepage/Homepage';
import { Blog } from './pages/Blog';
import { LoadingSpinner } from './components/uielements/LoadingSpinner';

export function App() {
  const [isLoading, setIsLoading] = useState(false);
  const routes = (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
  return (
    <div className="App">
      <Router>
        <NavLinks />
        <main>{isLoading ? <LoadingSpinner /> : routes}</main>
      </Router>
    </div>
  );
}
