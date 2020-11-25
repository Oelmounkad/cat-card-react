import Footer from './components/Footer'
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import AddForm from './pages/AddForm';
import Listing from './pages/Listing';

const App = () => {
  return (
    <Router>
      <Switch>
          <Route exact path='/' component={Listing} />
          <Route exact path='/add' component={AddForm} />
      </Switch>

      <Footer />

    </Router>
  );
}

export default App;
