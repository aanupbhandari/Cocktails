import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import pages
import About from './pages/About'
import Home from './pages/Home'
import Error from './pages/Error'
import SingleCocktail from './pages/SingleCocktail'
// import Navbar
import Navbar from './components/Navbar'

import './index.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/cocktails/:id'>
          <SingleCocktail />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
