import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom'
import NavBar from './components/layout/navBar';
import DashBoard from './components/dashBoard/dashBoard';
import Footer from './components/layout/footer';
import Menu from './components/foods/menu';
import ItemDetail from './components/foods/itemDetail';
import Page404 from './components/404/404';
import { createBrowserHistory  } from 'history'
import  Contact  from './components/layout/contact';



const history = createBrowserHistory()

history.listen(_ => {
  window.scrollTo(0, 0)
})

  

const App = ()=> {
  return (
    <BrowserRouter>
      <Router history={history} >
        <div className="App d-flex flex-column">
            <NavBar/>
            <Switch>
              
                <Route exact path='/' component={DashBoard}/>
                <Route exact path='/menu' exact component={Menu}/>
                <Route exact path='/contact' exact component={Contact}/>
                <Route path='/menu/:id' ScrollToTopBehavior exact component={ItemDetail}/>
                <Route component={Page404}/>
            
            </Switch>
            <Footer/>
        </div>
      </Router>
    </BrowserRouter>
  );
}

export default App;
