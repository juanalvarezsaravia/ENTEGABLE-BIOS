import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from "./components/Search";
import Results from './components/Results';
import Details from './components/Details';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/results" element={<Results />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
