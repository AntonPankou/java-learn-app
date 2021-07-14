import "./App.css";
import { LoginPage } from "./components/LoginPage";
import MainPageWithRouter from "./components/MainPage";
import TicketInfo from "./components/TicketInfo";
import TicketCreationPage from "./components/TicketCreationPage";

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
          <TicketCreationPage />
        </Route>
        <Route exact path="/ticket-info">
          <TicketInfo />
        </Route>
        {/* <Route>
          <TicketsTable />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
