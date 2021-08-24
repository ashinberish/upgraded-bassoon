import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Loader from './components/loader';
import GlobalStyle from './components/styles/GlobalStyle';
import Navbar from './components/navbar';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import React from 'react';


function App() {
  console.log('%c Built by Ashin Berish','font-weight:bold;background-color:#000000; color: #fff; padding: 20px 20px ')
  const location = useLocation();
  return (
    <div>
      <GlobalStyle />
      <Loader />
      <Navbar />
      <AnimatePresence exitBeforeEnter initial={false}>
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <Home />    
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        </Switch>
      </AnimatePresence>
    </div>
    )
}

export default App;
