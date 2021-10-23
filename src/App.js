import './App.css';

import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NoMatch from './components/NoMatch/NoMatch';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Shipment from './components/Shipment/Shipment';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]} >
      <Router>
        <h1>User: {loggedInUser.email}</h1>
        <Header></Header>

        <Switch>
          <Route exact path="/">
            <Shop></Shop>
          </Route>

          <Route path="/shop">
            <Shop></Shop>
          </Route>

          <Route path='/review'>
            <Review></Review>
          </Route>

          <PrivateRoute path='/shipment'>
            <Shipment></Shipment>
          </PrivateRoute>

          <Route path='/login'>
            <Login></Login>
          </Route>

          <PrivateRoute path='/inventory'>
            <Inventory></Inventory>
          </PrivateRoute>

          <Route path='/product/:productKey' >
            <ProductDetail></ProductDetail>
          </Route>

          <Route path='*'>
            <NoMatch></NoMatch>
          </Route>

        </Switch>

      </Router>
    </UserContext.Provider>
  );
}

export default App;
