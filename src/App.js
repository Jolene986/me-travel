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
/*
//logic for homeworld discaunt..QQ
const original = [
  { name: 'Jole', price: '500' },
  { neme: 'Bole', price: '500' },
  { name: 'Lole', price: '500' }
];

const izmenjeni = [...original, { name: 'Gole', price: '500' }];
const novi = izmenjeni.map(item => {
  if (item.name === 'Jole') {
    console.log('vidi if');
    item = { ...item, price: '1000' };
  }
  return item;
});
const novi = [...original].map(item => {
  if (item.name === 'Jole') {
    console.log('vidi if');
    item = { ...item, price: '1000' };
  }
  return item;
});
console.log(original);
console.log(izmenjeni);
console.log(novi);*/

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
