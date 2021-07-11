import React from "react";
import {
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

const columns = [
  { id: "id", label: "ID" },
  { id: "name", label: "Name" },
  { id: "date", label: "Desired Date" },
  { id: "urgency", label: "Urgency" },
  { id: "status", label: "Status" },
  { id: "action", label: "Action" },
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

  render() {
    const { tickets } = this.props;
    const { page, rowsPerPage } = this.state;
    const handleChangePage = this.handleChangePage;
    const handleChangeRowsPerPage = this.handleChangeRowsPerPage;

    return (
      <Paper>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.id}>
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
                        return column.id === "name" ? (
                          <TableCell key={column.id}>
                            <Link to={`/${value}`}>{value}</Link>
                          </TableCell>
                        ) : (
                          <TableCell key={column.id}>{value}</TableCell>
                        );
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

export default TicketsTable;
