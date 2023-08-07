import { AnimatePresence } from "framer-motion";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from "./components/loader";
import Navbar from "./components/navbar";
import GlobalStyle from "./components/styles/GlobalStyle";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";

function App() {
  useEffect(() => {
    console.log(
      "%c Built by Ashin Berish",
      "font-weight:bold;background-color:#000000; color: #fff; padding: 20px 20px ",
    );
  }, []);

  return (
    <div>
      <GlobalStyle />
      <Loader />

      <AnimatePresence mode="wait" initial={false}>
        <Router>
          <Routes>
            <Route
              path="/"
              exact
              element={
                <Navbar>
                  <Home />
                </Navbar>
              }
            />
            <Route
              path="/about"
              exact
              element={
                <Navbar>
                  <About />
                </Navbar>
              }
            />
            <Route
              path="/contact"
              exact
              element={
                <Navbar>
                  <Contact />
                </Navbar>
              }
            />
          </Routes>
        </Router>
      </AnimatePresence>
    </div>
  );
}

export default App;
