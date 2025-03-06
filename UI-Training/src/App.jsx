import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';

const Home = () => (
  <div>
    <h2>Home Page</h2>
  </div>
);
const About = () => (
  <div>
    <h2>About Page</h2>
  </div>
);
const Services = () => (
  <div>
    <h2>Services Page</h2>
  </div>
);
const Contact = () => (
  <div>
    <h2>Contact Page</h2>
  </div>
);

const App = () => {
  return (
    <Router>
      <Navigation />
      <Hero />
    </Router>
  );
};

export default App;
