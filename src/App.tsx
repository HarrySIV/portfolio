import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from 'react-router-dom';

import { Homepage } from './pages/homepage/Homepage';
import { Blog } from './pages/Blog';
import { ErrorPage } from './pages/ErrorPage';

export function App() {
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
      <Router>
        <main
          className="z-10 absolute w-full bg-no-repeat bg-[center_top_60vh]"
          style={{
            backgroundImage: `url(/assets/iceberg.png)`,
          }}
        >
          {routes}
          <h6 className="bg-black text-white text-center">
            © 2022 Harry Sanders
          </h6>
        </main>
      </Router>
    </div>
  );
}
