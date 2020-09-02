import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/layout/navBar';
import DashBoard from './components/dashBoard/dashBoard';
import Footer from './components/layout/footer';
import Menu from './components/foods/menu';
import ItemDetail from './components/foods/itemDetail';
import Page404 from './components/404/404';

function App() {
  return (
    <BrowserRouter>
      <div className="App d-flex flex-column">
        <NavBar/>
        <Switch>
          <Route exact path='/' component={DashBoard}/>
          <Route exact path='/menu' exact component={Menu}/>
          <Route path='/menu/:id' exact component={ItemDetail}/>
          <Route component={Page404}/>
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
