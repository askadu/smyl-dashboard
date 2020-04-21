import React from 'react';
import Container from 'react-bootstrap/Container';
import Header from './component/common/Header';
import Footer from './component/common/Footer';
import Login from './component/Login/Login';
import Cashback from './component/Cashback/Cashback';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Curators from './component/Curators/Curators';

function App() {
  return (
    <Router>
      <Container>
        <Header />
        <Switch>
          <Route path="/cashback">
            <Cashback />
          </Route>
          <Route path="/curators">
            <Curators />
          </Route>
        </Switch>
        <Footer />
      </Container>
    </Router>

  );
}

export default App;
