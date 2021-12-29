import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import CommentsTable from "./CommentsTable";
import HistoryTable from "./HistoryTable";
import TabPanel from "./TabPanel";
import TicketCreationPageWithRouter from "./TicketCreationPage";
import { Link, Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import { ALL_TICKETS } from "../constants/mockTickets";
import { COMMENTS } from "../constants/mockComments";
import { HISTORY } from "../constants/mockHistory";

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

function TicketInfo(props) {
  const [commentValue, setCommentValue] = useState('');
  const [tabValue, setTabValue] = useState(0);
  const [ticketComments, setTicketComments] = useState(COMMENTS);
  const [ticketHistory, setTicketHistory] = useState(HISTORY);
  const [currentUser, setCurrentUser] = useState({
    name: "Dave Brubeck",
    id: 4242,
  });
  const [ticketData, setTicketData] = useState({
    id: 42,
    name: "Something",
    date: "2021-07-16",
    category: "Hardware & Software",
    status: "New",
    urgency: "High",
    resolutionDate: "",
    ticketOwner: "Robert Oppenheimer",
    approver: "",
    assignee: "",
    attachment: null,
    description: "Desc",
  });

  useEffect(
    () => {
      // get required ticket by id
      const { ticketId } = props.match.params;
      const ticket = ALL_TICKETS.find((item) => item.id === +ticketId);
      setTicketData({
        ...ticketData,
        id: ticket.id,
        date: ticket.date,
        resolutionDate: ticket.resolutionDate,
        name: ticket.name,
        status: ticket.status,
        urgency: ticket.urgency,
        action: ticket.action,
        category: ticket.category,
        ticketOwner: ticket.ticketOwner,
      })
    }, [props.match.params]
  );

  const handleTabChange = (event, value) => {
    setTabValue(value)
  };

  const handleEnterComment = (event) => {
    setCommentValue(event.target.value);
  };

  const addComment = () => {
    // put request for comment creation here

    const newComment = {
      date: new Date().toLocaleDateString(),
      user: currentUser.name,
      comment: commentValue,
    };
    setTicketComments([...ticketComments, newComment]);
    setCommentValue('');
  };

  const handleSubmitTicket = () => {
    // set ticket status to 'submitted'
    console.log('SUBMIT ticket');
  };

  const handleEditTicket = () => {
    console.log('EDIT ticket');
  };

  const handleCancelTicket = () => {
    // set ticket status to 'canceled' status
    console.log("CANCEL ticket");
  };

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
  } = ticketData;

  const { url } = props.match;
  console.log(url);

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
                        {date}
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
                        {resolutionDate}
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
                onChange={handleTabChange}
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
                onChange={handleEnterComment}
              />
              <div className="enter-comment-section__add-comment-button">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={addComment}
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

TicketInfo.propTypes = {
  match: PropTypes.object,
};

const TicketInfoWithRouter = withRouter(TicketInfo);
export default TicketInfoWithRouter;
