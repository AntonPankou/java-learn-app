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
import { COMMENTS_TABLE_COLUMNS } from "../constants/tablesColumns";

function CommentsTable(props) {
  const { comments } = props;

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {COMMENTS_TABLE_COLUMNS.map((item) => {
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

export default CommentsTable;
