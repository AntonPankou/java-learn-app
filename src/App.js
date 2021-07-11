import "./App.css";
import { LoginPage } from "./components/LoginPage";
import { MainPage } from "./components/MainPage";
import TicketsTable from "./components/TicketsTable";
import TicketInfo from "./components/TicketInfo";
import HistoryTable from "./components/HistoryTable";
import TicketCreationPage from "./components/TicketCreationPage";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <TicketCreationPage />
        {/* <TicketInfo /> */}
        {/* <MainPage /> */}
        {/* <Route>
          <LoginPage exact path='/loginPage' /> 
        </Route> */}
        {/* <Route exact path='/mainPage'>
          <MainPage />
        </Route> */}
        {/* <Route>
          <TicketsTable />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
