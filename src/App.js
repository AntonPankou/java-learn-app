import './App.css';
import { LoginPage } from './components/LoginPage';
import { MainPage } from './components/MainPage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        {/* <div>
          <LoginPage />
        </div> */}
        <Route>
          <LoginPage exact path='/loginPage' /> 
        </Route>
        <Route path='/mainPage'>
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
