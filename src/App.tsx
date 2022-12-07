import React, { useState } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from 'react-router-dom';
import { NavLinks } from './components/heading/nav/NavLinks';

import { Homepage } from './pages/homepage/Homepage';
import { Blog } from './pages/Blog';
import { LoadingSpinner } from './components/uielements/LoadingSpinner';
import { ErrorPage } from './pages/ErrorPage';

export function App() {
  const [isLoading, setIsLoading] = useState(false);
  const routes = (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="error" element={<ErrorPage />} />
      <Route path="*" element={<Navigate to="/error" replace />} />
    </Routes>
  );
  return (
    <div className="App">
      <Router>
        <main>{isLoading ? <LoadingSpinner /> : routes}</main>
      </Router>
    </div>
  );
}
