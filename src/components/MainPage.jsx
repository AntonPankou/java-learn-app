import React from "react";
import TabPanel from "./TabPanel";
import TicketsTable from "./TicketsTable";
import { AppBar, Button, Tab, Tabs } from "@material-ui/core";
import { Link, Switch, Route } from "react-router-dom";
import { withRouter } from "react-router";
import TicketInfoWithRouter from "./TicketInfo";
import { ALL_TICKETS, MY_TICKETS } from "../constants/mockTickets";

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}
class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      prop: 42,
      tabValue: 0,
      myTickets: MY_TICKETS,
      allTickets: ALL_TICKETS,
    };
  }

  handleCreate = () => {
    console.log("Create ticket");
  };

  handleLogout = () => {
    console.log("Logout");
  };

  handleTabChange = (event, value) => {
    this.setState({
      tabValue: value,
    });
  };

  render() {
    const { allTickets, myTickets, tabValue } = this.state;
    const { path } = this.props.match;

    return (
      <>
        <Switch>
          <Route exact path={path}>
            <div className="buttons-container">
              <Button
                component={Link}
                to="/create-ticket"
                onClick={this.handleCreate}
                variant="contained"
                color="primary"
              >
                Create Ticket
              </Button>
              <Button
                component={Link}
                to="/"
                onClick={this.handleLogout}
                variant="contained"
                color="secondary"
              >
                Logout
              </Button>
            </div>
            <div className="table-container">
              <AppBar position="static">
                <Tabs
                  variant="fullWidth"
                  onChange={this.handleTabChange}
                  value={tabValue}
                >
                  <Tab label="My tickets" {...a11yProps(0)} />
                  <Tab label="All tickets" {...a11yProps(1)} />
                </Tabs>
                <TabPanel value={tabValue} index={0}>
                  <TicketsTable tickets={myTickets} />
                </TabPanel>
                <TabPanel value={tabValue} index={1}>
                  <TicketsTable tickets={allTickets} />
                </TabPanel>
              </AppBar>
            </div>
          </Route>
          <Route path={`${path}/:ticketId`}>
            <TicketInfoWithRouter />
          </Route>
        </Switch>
      </>
    );
  }
}

const MainPageWithRouter = withRouter(MainPage);
export default MainPageWithRouter;
