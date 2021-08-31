import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import PlaceDetails from './Components/PlaceDetails/PlaceDetails';


function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Switch>


        <Route path="/review">
          <PlaceDetails></PlaceDetails>
        </Route>

        <Route path="/">
          <Header></Header>
          <Home></Home>
          <Footer></Footer>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
