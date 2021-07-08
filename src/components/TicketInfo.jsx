import React from "react";
import TabPanel from "./TabPanel";
import {
  AppBar,
  Button,
  Paper,
  Tab,
  Tabs,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@material-ui/core";

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

class TicketInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tabValue: 0,
      ticketData: {
        id: 42,
        name: "Something",
        date: new Date(),
        category: "Hardware & Software",
        status: "New",
        urgency: "High",
        resolutionDate: new Date(2021, 10, 10),
        ticketOwner: "Robert Oppenheimer",
        approver: "",
        assignee: "",
        attachment: null,
        description: "Desc",
      },
    };
  }

  handleTabChange = (event, value) => {
    this.setState({
      tabValue: value,
    });
  };

  render() {
    const {
      approver,
      id,
      name,
      date,
      category,
      status,
      urgency,
      resolutionDate,
      ticketOwner,
      assignee,
      attachment,
      description,
    } = this.state.ticketData;

    const { tabValue } = this.state;

    return (
      <div className="ticket-data-container">
        <div className={"ticket-data-container__back-button back-button"}>
          <Button variant="contained">Ticket list</Button>
        </div>
        <div className="ticket-data-container__title">
          <Typography variant="h4">{`Ticket(${id}) - ${name}`}</Typography>
        </div>
        <div className="ticket-data-container__info">
          <TableContainer className="ticket-table" component={Paper}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Typography align="left" variant="subtitle1">
                      Created on:
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography align="left" variant="subtitle1">
                      {date.toLocaleDateString()}
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography align="left" variant="subtitle1">
                      Category:
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography align="left" variant="subtitle1">
                      {category}
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography align="left" variant="subtitle1">
                      Status:
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography align="left" variant="subtitle1">
                      {status}
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography align="left" variant="subtitle1">
                      Urgency:
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography align="left" variant="subtitle1">
                      {urgency}
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography align="left" variant="subtitle1">
                      Desired Resolution Date:
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography align="left" variant="subtitle1">
                      {resolutionDate.toLocaleDateString()}
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography align="left" variant="subtitle1">
                      Owner:
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography align="left" variant="subtitle1">
                      {ticketOwner}
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography align="left" variant="subtitle1">
                      Approver:
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography align="left" variant="subtitle1">
                      {approver || "Not assigned"}
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography align="left" variant="subtitle1">
                      Assignee:
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography align="left" variant="subtitle1">
                      {assignee || "Not assigned"}
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography align="left" variant="subtitle1">
                      Attachments:
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography align="left" variant="subtitle1">
                      {attachment || "Not assigned"}
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography align="left" variant="subtitle1">
                      Description:
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography align="left" variant="subtitle1">
                      {description || "Not assigned"}
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className="ticket-data-container__comments-section comments-section">
          <div className="">
            <Tabs
              variant="fullWidth"
              onChange={this.handleTabChange}
              value={tabValue}
              indicatorColor="primary"
              textColor="primary"
            >
              <Tab label="History" {...a11yProps(0)} />
              <Tab label="Comments" {...a11yProps(1)} />
            </Tabs>
            <TabPanel>
                
            </TabPanel>
            <TabPanel>

            </TabPanel>
          </div>
        </div>
      </div>
    );
  }
}

export default TicketInfo;
