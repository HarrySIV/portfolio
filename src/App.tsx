import React, { useState } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from 'react-router-dom';

import { Homepage } from './pages/homepage/Homepage';
import { Blog } from './pages/Blog';
import { LoadingSpinner } from './components/uielements/LoadingSpinner';
import { ErrorPage } from './pages/ErrorPage';

import iceberg from './assets/iceberg.png';

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
      <img
        src={iceberg}
        alt="An iceberg symbolizing my portfolio and my ability"
        className="absolute z-0"
      />
      <Router>
        <main className="z-1">{isLoading ? <LoadingSpinner /> : routes}</main>
      </Router>
    </div>
  );
}
