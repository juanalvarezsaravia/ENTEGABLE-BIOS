
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SearchProvider } from './SearchContext';
import Search from "./pages/Search";
import Results from './pages/Results';
import Details from './pages/Details';
import Header from './components/Header';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Contact from './pages/Contact';
import About from './pages/About';
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
            <Route path="/signUp" element={<SignUp />} />
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




