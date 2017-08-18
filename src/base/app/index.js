import React from 'react';
import { Route, Link } from 'react-router-dom'

import Home from '../../containers/home'
import About from '../../containers/about'
import Quintuplapus from '../../pages/quintuplapus'
import Landing from '../../pages/landing'

const App = () => (
  <div>
    <header>
      <h4>place holders remove eventually</h4>
      <Link to="/">Home</Link>
      <br />
      <Link to="/about-us">About</Link>
      <br />
      <Link to="/landing">Entrance point to real app</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/quintuplapus" component={Quintuplapus} />
      <Route exact path="/landing" component={Landing} />
    </main>

  </div>
)

export default App