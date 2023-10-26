
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SearchProvider } from './SearchContext';
import Search from "./components/Search";
import Results from './components/Results';
import Details from './components/Details';
import Header from './components/Header';
import Register from './components/Register';
import Login from './components/Login';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';


function App() {
  return (
    <SearchProvider>
      <Router>
        <div className='AppContainer'>
          <Header />
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/results" element={<Results />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </SearchProvider>
  );
}

export default App;

