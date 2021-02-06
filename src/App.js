import './dist/css/style.css'
import { StateContext, StateContextConsumer} from './context/state'
import { 
  Home,
  Browse ,
  Product,
  Checkout
} from './pages'
import { Header } from './components'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import * as ROUTES from './constants/routes'


export default function App() {

  return (
    <Router>
    <StateContextConsumer>
      {([{cart}]) => (
        <Header cart={cart}/>
      )}
    </StateContextConsumer>
      <Switch>
        <Route exact path={ROUTES.CHECKOUT}>
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
    </Router>
  
   
  );
}
