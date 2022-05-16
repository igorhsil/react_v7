import React, { StrictMode, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ThemeContext from './components/ThemeContext';

import { render } from 'react-dom';
import SearchParams from './components/SearchParams.js';
import Details from './pages/Details.js';

const App = () => {
  const theme = useState('darkblue');

  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <Router>
          <header>
            <Link to="/">
              <h1>Adopt ME!</h1>
            </Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </Router>
      </ThemeContext.Provider>
    </StrictMode>
  );
};
render(<App />, document.querySelector('#root'));
