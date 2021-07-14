import React from "react";
import {
  ButtonGroup,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const columns = [
  { id: "id", label: "ID", align: "left" },
  { id: "name", label: "Name", align: "left" },
  { id: "date", label: "Desired Date", align: "left" },
  { id: "urgency", label: "Urgency", align: "left" },
  { id: "status", label: "Status", align: "left" },
  { id: "action", label: "Action", align: "center" },
];

class TicketsTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      rowsPerPage: 5,
    };
  }

  handleChangePage = () => {
    console.log("change page");
  };

  handleChangeRowsPerPage = (event) => {
    this.setState({
      rowsPerPage: +event.target.value,
    });
  };

  handleCancelSubmit = () => {
    console.log("Cancel submit");
  };

  handleSubmitTicket = () => {
    console.log("Submit ticket");
  };

  render() {
    const { tickets } = this.props;
    const { page, rowsPerPage } = this.state;
    const { url } = this.props.match;
    const {
      handleChangePage,
      handleChangeRowsPerPage,
      handleCancelSubmit,
      handleSubmitTicket,
    } = this;

    return (
      <Paper>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell align={column.align} key={column.id}>
                    <b>{column.label}</b>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {tickets
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow hover role="checkbox" key={index}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        if (column.id === "name") {
                          return (
                            <TableCell key={column.id}>
                              <Link to={`${url}/${row.id}`}>{value}</Link>
                            </TableCell>
                          );
                        }
                        if (column.id === "action") {
                          return row.status === "draft" ? (
                            <TableCell align="center" key={column.id}>
                              <ButtonGroup>
                                <Button
                                  onClick={handleCancelSubmit}
                                  variant="contained"
                                  color="secondary"
                                >
                                  Cancel
                                </Button>
                                <Button
                                  onClick={handleSubmitTicket}
                                  variant="contained"
                                  color="primary"
                                >
                                  Submit
                                </Button>
                              </ButtonGroup>
                            </TableCell>
                          ) : (
                            <TableCell key={column.id}></TableCell>
                          );
                        } else {
                          return <TableCell key={column.id}>{value}</TableCell>;
                        }
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 100]}
          component="div"
          count={tickets.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}

const TicketsTableWithRouter = withRouter(TicketsTable);
export default TicketsTableWithRouter;
