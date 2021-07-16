import "./App.css";
import { LoginPage } from "./components/LoginPage";
import MainPageWithRouter from "./components/MainPage";
import TicketInfo from "./components/TicketInfo";
import TicketCreationPageWithRouter from "./components/TicketCreationPage";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginPage />
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
