import React from "react";
import CommentsTable from "./CommentsTable";
import HistoryTable from "./HistoryTable";
import TabPanel from "./TabPanel";
import TicketCreationPageWithRouter from "./TicketCreationPage";
import { Link, Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import { ALL_TICKETS } from "../constants/mockTickets";

import {
  Button,
  ButtonGroup,
  Paper,
  Tab,
  Tabs,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  TextField,
} from "@material-ui/core";

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const comments = [
  {
    date: new Date().toLocaleDateString(),
    user: "Ella Fitzgerald",
    comment: "Cry me a river",
  },
  {
    date: new Date().toLocaleDateString(),
    user: "Sarah Vaughn",
    comment: "DJ Eban",
  },
  {
    date: new Date().toLocaleDateString(),
    user: "Aretha Franklin",
    comment: `I'm about to give you all of my money
    And all I'm askin' in return, honey
    Is to give me my propers when you get home`,
  },
];

const history = [
  {
    date: new Date().toLocaleDateString(),
    user: "Miles Davis",
    action: "Played on trumpet",
    description: "So what",
  },
  {
    date: new Date().toLocaleDateString(),
    user: "John Coltrain",
    action: "Played on saxophone",
    description: "Flamenco sketch",
  },
  {
    date: new Date().toLocaleDateString(),
    user: "Bill Evans",
    action: "Played on piano",
    description: `Ah, distinctly I remember it was in the bleak December;
      And each separate dying ember wrought its ghost upon the floor.
          Eagerly I wished the morrow;—vainly I had sought to borrow
          From my books surcease of sorrow—sorrow for the lost Lenore—
      For the rare and radiant maiden whom the angels name Lenore—
                  Nameless here for evermore.`,
  },
  {
    date: new Date().toLocaleDateString(),
    user: "Cannonball Adderley",
    action: "Played on saxosphone",
    description: "..",
  },
];

class TicketInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      commentValue: "",
      tabValue: 0,
      ticketComments: comments,
      ticketHistory: history,
      currentUser: {
        name: "Dave Brubeck",
        id: 4242,
      },
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

  componentDidMount() {
    const { ticketId } = this.props.match.params;
    const ticket = ALL_TICKETS.find((item) => item.id === +ticketId);
    this.setState({
      ticketData: {
        ...this.state.ticketData,
        id: ticket.id,
        date: ticket.date,
        name: ticket.name,
        status: ticket.status,
        urgency: ticket.urgency,
        action: ticket.action,
        category: ticket.category,
        ticketOwner: ticket.ticketOwner,
      },
    });
  }

  handleTabChange = (event, value) => {
    this.setState({
      tabValue: value,
    });
  };

  handleEnterComment = (event) => {
    this.setState({
      commentValue: event.target.value,
    });
  };

  addComment = () => {
    const newComment = {
      date: new Date().toLocaleDateString(),
      user: this.state.currentUser.name,
      comment: this.state.commentValue,
    };
    this.setState({
      ticketComments: [...this.state.ticketComments, newComment],
      commentValue: "",
    });
  };

  handleSubmitTicket = () => {
    // set ticket status to 'submitted'
    console.log("SUBMIT ticket");
  };

  handleEditTicket = () => {
    console.log("EDIT ticket");
  };

  handleCancelTicket = () => {
    // set ticket status to 'canceled' status
    console.log("CANCEL ticket");
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

    const { commentValue, tabValue, ticketComments, ticketHistory } =
      this.state;

    const { url } = this.props.match;

    const { handleCancelTicket, handleEditTicket, handleSubmitTicket } = this;

    return (
      <Switch>
        <Route exact path={url}>
          <div className="ticket-data-container">
            <div className={"ticket-data-container__back-button back-button"}>
              <Button component={Link} to="/main-page" variant="contained">
                Ticket list
              </Button>
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
                          {new Date(date).toLocaleDateString()}
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
            {status === "draft" && (
              <div className="ticket-data-container__button-section">
                <ButtonGroup variant="contained" color="primary">
                  <Button
                    component={Link}
                    to="/main-page"
                    onClick={handleSubmitTicket}
                  >
                    Submit
                  </Button>

                  <Button
                    component={Link}
                    to={`/create-ticket/${id}`}
                    onClick={handleEditTicket}
                  >
                    Edit
                  </Button>
                  <Button
                    component={Link}
                    to="/main-page"
                    onClick={handleCancelTicket}
                  >
                    Cancel
                  </Button>
                </ButtonGroup>
              </div>
            )}
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
                <TabPanel value={tabValue} index={0}>
                  <HistoryTable history={ticketHistory} />
                </TabPanel>
                <TabPanel value={tabValue} index={1}>
                  <CommentsTable comments={ticketComments} />
                </TabPanel>
              </div>
            </div>
            {tabValue && (
              <div className="ticket-data-container__enter-comment-section enter-comment-section">
                <TextField
                  label="Enter a comment"
                  multiline
                  rows={4}
                  value={commentValue}
                  variant="filled"
                  className="comment-text-field"
                  onChange={this.handleEnterComment}
                />
                <div className="enter-comment-section__add-comment-button">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.addComment}
                  >
                    Add Comment
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Route>
        <Route path="/create-ticket/:ticketId">
          <TicketCreationPageWithRouter />
        </Route>
      </Switch>
    );
  }
}

const TicketInfoWithRouter = withRouter(TicketInfo);
export default TicketInfoWithRouter;
