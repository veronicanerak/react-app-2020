import React from 'react';
import "../styles/styles.scss";
import ContactUs from './Pages/ContactUs'
import Users from './Pages/Users'
import Home from './Pages/Home'
import BookDetail from './Pages/BookDetail'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MainMenu from './Organisms/MainMenu';
import Historical from './Pages/Historical'
import Books from './Pages/Books';


const App = () => (
  <Router>
    <MainMenu />
    <Switch>
      <Route path="/" exact component={ Home } />
      <Route path="/books/:id" component={ BookDetail } />
      <Route path="/books" component={ Books } />
      <Route path="/users" component={ Users } />   
      <Route path="/historical/:value" component={ Historical } />      
      <Route path="/contact" component={ () => <ContactUs formName="Contact US" /> } />
      <Route component={ () => (
        <div className="ed-grid">
          <h1>Error 401</h1>
          <span>Page not found</span>
        </div>
      ) } />
    </Switch>
  </Router>
)

export default App;
