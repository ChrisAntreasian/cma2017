import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import Quintuplapus from '../quintuplapus'
import Landing from '../landing'

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
      <Link to="/quintuplapus">Quintuplapus</Link>
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