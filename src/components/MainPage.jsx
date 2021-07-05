import React from "react";
import TabPanel from "./TabPanel";
import TicketsTable from "./TicketsTable";
import { AppBar, Button, Tab, Tabs } from "@material-ui/core";

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const myTickets = [
  {
    id: 0,
    name: "Ticket1",
    date: new Date().toLocaleDateString(),
    urgency: "high",
    status: "submitted",
    action: "",
  },
  {
    id: 1,
    name: "Ticket2",
    date: new Date().toLocaleDateString(),
    urgency: "meduim",
    status: "submitted",
    action: "",
  },
  {
    id: 2,
    name: "Ticket3",
    date: new Date().toLocaleDateString(),
    urgency: "low",
    status: "submitted",
    action: "Hoc age",
  },
  {
    id: 3,
    name: "Ticket4",
    date: new Date().toLocaleDateString(),
    urgency: "low",
    status: "draft",
    action: "Cognito ergo sum",
  },
  {
    id: 4,
    name: "Ticket5",
    date: new Date().toLocaleDateString(),
    urgency: "medium",
    status: "draft",
    action: "",
  },
];

const allTickets = [
  {
    id: 7,
    name: "Ticket7",
    date: new Date().toLocaleDateString(),
    urgency: "meduim",
    status: "submitted",
    action: "",
  },
  {
    id: 8,
    name: "Ticket8",
    date: new Date().toLocaleDateString(),
    urgency: "low",
    status: "submitted",
    action: "Alea jacta est",
  },
  {
    id: 9,
    name: "Ticket9",
    date: new Date().toLocaleDateString(),
    urgency: "low",
    status: "draft",
    action: "Ars longa, vita brevis",
  },
  {
    id: 0,
    name: "Ticket1",
    date: new Date().toLocaleDateString(),
    urgency: "high",
    status: "submitted",
    action: "",
  },
  {
    id: 1,
    name: "Ticket2",
    date: new Date().toLocaleDateString(),
    urgency: "meduim",
    status: "submitted",
    action: "",
  },
  {
    id: 2,
    name: "Ticket3",
    date: new Date().toLocaleDateString(),
    urgency: "low",
    status: "submitted",
    action: "Hoc age",
  },
  {
    id: 3,
    name: "Ticket4",
    date: new Date().toLocaleDateString(),
    urgency: "low",
    status: "draft",
    action: "Cognito ergo sum",
  },
  {
    id: 4,
    name: "Ticket5",
    date: new Date().toLocaleDateString(),
    urgency: "medium",
    status: "draft",
    action: "",
  },
  {
    id: 6,
    name: "Ticket6",
    date: new Date().toLocaleDateString(),
    urgency: "high",
    status: "submitted",
    action: "",
  },
];

export class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      prop: 42,
      tabValue: 0,
      myTickets: myTickets,
      allTickets: allTickets,
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

    return (
      <>
        <div className="buttons-container">
          <Button
            onClick={this.handleCreate}
            variant="contained"
            color="primary"
          >
            Create Ticket
          </Button>
          <Button
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
      </>
    );
  }
}
