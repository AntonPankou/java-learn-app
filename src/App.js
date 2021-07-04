import './App.css';
import { LoginPage } from './components/LoginPage';
import { MainPage } from './components/MainPage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <MainPage />
        {/* <Route>
          <LoginPage exact path='/loginPage' /> 
        </Route> */}
        <Route exact path='/mainPage'>
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
