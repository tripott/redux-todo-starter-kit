import React from 'react'
//import { Router, Link } from '@reach/router'
//import Home from './Home.js'

import VisibleToDoList from '../containers/VisibleToDoList'
import AddToDo from '../containers/AddToDo'
import Footer from './Footer'

const App = () => {
  console.log('4. App component is rendering.')
  return (
    <div>
      <h1>To Dos</h1>
      <AddToDo />
      <VisibleToDoList />
      <Footer />
    </div>
  )
}

export default App
