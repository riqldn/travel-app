
import './App.css';
import {Switch,Route} from 'react-router-dom';
import SignUp from './components/SignUp';
import Home from './components/Home';
function App() {
  return (
    <>
    <Switch>
      <Route path="/" exact>
        <Home/>
      </Route>
      <Route path="/signup">
        <SignUp/>
      </Route>
    </Switch>
  

   </>
  );
}

export default App;
