import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import AllDestinations from './pages/AllDestinations';
import Destination from './pages/Destination';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/destinations' component={AllDestinations} />
        <Route exact path='/destinations/:slug' component={Destination} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
