import React from 'react';
import { Route } from 'react-router-dom'

import Counter from '../pages/counter'
import Quintuplapus from '../pages/quintuplapus'
import Landing from '../pages/landing'
import Posts from '../pages/posts'

import Header from '../sub/header'
import Burger from '../sub/burger'

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