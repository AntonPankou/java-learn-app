import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";

const tableColumns = [
  { id: "date", label: "Date" },
  { id: "user", label: "User" },
  { id: "comment", label: "Comment" },
];

class CommentsTable extends React.Component {
  render() {
    const { comments } = this.props;

    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {tableColumns.map((item) => {
                return (
                  <TableCell key={item.id} align="center">
                    <Typography variant="h6">{item.label}</Typography>
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {comments.map((item, index) => {
              return (
                <TableRow key={index}>
                  <TableCell align="center">{item.date}</TableCell>
                  <TableCell align="center">{item.user}</TableCell>
                  <TableCell align="center">{item.comment}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default CommentsTable;
