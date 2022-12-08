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
    <div className="relative">
      {/* <img
        src={iceberg}
        alt="An iceberg symbolizing my portfolio and my ability"
        className="z-0 w-1/2 absolute top-[75vh]"
      /> */}
      <Router>
        <main
          className="z-10 absolute w-full bg-no-repeat bg-[center_top_60vh] "
          style={{ backgroundImage: `url(${iceberg})` }}
        >
          {isLoading ? <LoadingSpinner /> : routes}
          <h6 className="bg-black text-white text-center">
            © 2022 Harry Sanders
          </h6>
        </main>
      </Router>
    </div>
  );
}
