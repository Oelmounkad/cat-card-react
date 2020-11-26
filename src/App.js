import Footer from './components/Footer'

import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import AddForm from './pages/AddForm';
import Listing from './pages/Listing';
import CatState from './context/CatState'

const App = () => {
  return (
    <CatState>
    <Router>
      
      <Switch>
          <Route exact path='/' component={Listing} />
          <Route exact path='/add' component={AddForm} />
      </Switch>

      <Footer />

    </Router>
    </CatState>
  );
}

export default App;
