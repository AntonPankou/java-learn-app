import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@material-ui/core";

class TicketInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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

    return (
      <div className="ticket-data-container">
        <div className="ticket-data-container__title">
          <Typography variant="h4">{`Ticket(${id}) - ${name}`}</Typography>
        </div>
        <div className="ticket-data-container__info">
          {/* <div className='ticket-line'>
            <Typography variant="subtitle1">Created on:</Typography><Typography variant="subtitle2">{date.toLocaleDateString()}</Typography>
          </div> */}
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
      </div>
    );
  }
}

export default TicketInfo;
