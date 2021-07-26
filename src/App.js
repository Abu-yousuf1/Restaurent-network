import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
//import { Route, Router } from 'react-router';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Breakfast from './components/Breakfast/Breakfast';
import Lunch from './components/Lunch/Lunch';
import Dinner from './components/Dinner/Dinner';
import Cart from './components/Cart/Cart';


function App() {
  return (
    <Router>
      <Header/>
      <switch>
        <Route path = "/breakfast">
          <Breakfast/>
        </Route>
        <Route path = "/lunch">
          <Lunch/>
        </Route>
        <Route path = "/dinner">
          <Dinner/>
        </Route>
        <Route path ="/cart">
          <Cart/>
        </Route>
        <Route exact path = "/">
          <Breakfast/>
           </Route>

      </switch>   
    </Router>
  );
};



export default App;
