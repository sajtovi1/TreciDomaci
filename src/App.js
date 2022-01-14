import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Konvertor from './Konvertor';
import Tabela from './Tabela';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/tabela'>
          <Tabela />
        </Route>
        <Route path='/konverter'>
          <Konvertor />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
