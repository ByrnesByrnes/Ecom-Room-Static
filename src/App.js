import './dist/css/style.css'
import { 
  Home,
  Browse 
} from './pages'
import { Header } from './components'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import * as ROUTES from './constants/routes'

function App() {
  return (
    <Router>
     <Header />
      <Switch>
        <Route path={ROUTES.BROWSE}>
          <Browse />
        </Route>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>
      </Switch>
    </Router>
  
   
  );
}

export default App;
