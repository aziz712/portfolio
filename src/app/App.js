import React from 'react';

import { Navbar } from './components';
import { Header } from './container';
import { About } from './container';
import { Work } from './container';
import { Skills } from './container';
import { Footer } from './container';

import './App.scss';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />

    <Footer />
  
  </div>
);

export default App;
