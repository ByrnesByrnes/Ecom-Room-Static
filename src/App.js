import './dist/css/style.css'
import { StateContext, StateContextConsumer } from './context/state'
import {
  Home,
  Browse,
  Product,
  Checkout,
  Cart,
  About,
  Contact,
 
} from './pages'
import { Header, Footer } from './components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as ROUTES from './constants/routes'


export default function App() {

  return (
    <Router>
      <StateContextConsumer>
        {([{ cart }]) => (
          <Header cart={cart} />
        )}
      </StateContextConsumer>
      <Switch>
        <Route path={ROUTES.CART}>
          <Cart />
        </Route>
        <Route path={ROUTES.ABOUT}>
          <About />
        </Route>
        <Route path={ROUTES.CONTACT}>
          <Contact />
        </Route>
        <Route path={ROUTES.CHECKOUT}>
          <Checkout />
        </Route>
        <Route exact path={ROUTES.BROWSE}>
          <Browse />
        </Route>
        <Route path={`${ROUTES.BROWSE}/:id`}>
          <Product />
        </Route>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>


  );
}
