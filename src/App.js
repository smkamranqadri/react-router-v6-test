import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './App.css';

const Nav = () => (
  <>
    <Link to="/">
      <h5>Home</h5>
    </Link>
    <Link to="/about">
      <h5>About</h5>
    </Link>
    <Link to="/contact">
      <h5>Contact</h5>
    </Link>
  </>
);
const Home = () => (
  <>
    <Nav />
    <h1>Home</h1>
  </>
);
const About = () => (
  <>
    <Nav />
    <h1>About</h1>
  </>
);
const Contact = () => (
  <>
    <Nav />
    <h1>Contact</h1>
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
