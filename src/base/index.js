import React from 'react';
import { Route } from 'react-router-dom'

import Counter from '../pages/Counter'
import Quintuplapus from '../pages/Quintuplapus'
import Landing from '../pages/Landing'
import Posts from '../pages/Posts'

import Header from '../sub/Header'
import Burger from '../sub/Burger'

const App = () => (
  <div>
    <Header />
    <main className="main wrap">
      <Route exact path="/" component={Landing} />
      <Route exact path="/quintuplapus" component={Quintuplapus} />
      <Route exact path="/landing" component={Landing} />
      <Route exact path="/posts" component={Posts} />
      <Route exact path="/counter" component={Counter} />
      <Burger />
    </main>

  </div>
)

export default App