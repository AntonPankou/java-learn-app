import "./App.css";
import LoginPage from "./components/LoginPage";
import MainPageWithRouter from "./components/MainPage";
import TicketInfo from "./components/TicketInfo";
import TicketCreationPageWithRouter from "./components/TicketCreationPage";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { useState } from "react";

function App() {
  const [isAuthorized, setAuth] = useState(false);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {isAuthorized ? <Redirect to="/main-page" /> : <LoginPage authCallback={setAuth} />}
        </Route>
        <Route path="/main-page">
          <MainPageWithRouter />
        </Route>
        <Route path="/create-ticket">
          <TicketCreationPageWithRouter />
        </Route>
        <Route exact path="/ticket-info/:ticketId">
          <TicketInfo />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
