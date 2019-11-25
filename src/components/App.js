import React from 'react'
//import { Router, Link } from '@reach/router'
//import Home from './Home.js'

import VisibleToDoList from '../containers/VisibleToDoList'
import Footer from './Footer'

const App = () => (
  <div>
    <h1>To Dos</h1>
    <VisibleToDoList />
    <Footer />
  </div>
)

export default App
