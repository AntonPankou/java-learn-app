import React, { useState } from 'react';
import PropTypes from 'prop-types';
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
  TextField,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { TICKETS_TABLE_COLUMNS } from '../constants/tablesColumns';

function TicketsTable(props) {
  
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = () => {
    console.log('change page');
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
  };

  const handleCancelSubmit = () => {
    console.log('Cancel submit');
  };

  const handleSubmitTicket = () => {
    console.log('Submit ticket');
  };

  const { searchCallback, tickets } = props;
  const { url } = props.match;

  return (
    <Paper>
      <TableContainer>
        <TextField
          onChange={searchCallback}
          id='filled-full-width'
          label='Search'
          style={{ margin: 5, width: '500px' }}
          placeholder='Search for ticket'
          margin='normal'
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Table>
          <TableHead>
            <TableRow>
              {TICKETS_TABLE_COLUMNS.map((column) => (
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
                  <TableRow hover role='checkbox' key={index}>
                    {TICKETS_TABLE_COLUMNS.map((column) => {
                      const value = row[column.id];
                      if (column.id === 'name') {
                        return (
                          <TableCell key={column.id}>
                            <Link to={`${url}/${row.id}`}>{value}</Link>
                          </TableCell>
                        );
                      }
                      if (column.id === 'action') {
                        return row.status === 'draft' ? (
                          <TableCell align='center' key={column.id}>
                            <ButtonGroup>
                              <Button
                                onClick={handleCancelSubmit}
                                variant='contained'
                                color='secondary'
                              >
                                Cancel
                              </Button>
                              <Button
                                onClick={handleSubmitTicket}
                                variant='contained'
                                color='primary'
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
        component='div'
        count={tickets.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

TicketsTable.propTypes = {
  searchCallback: PropTypes.func,
  tickets: PropTypes.array,
};

const TicketsTableWithRouter = withRouter(TicketsTable);
export default TicketsTableWithRouter;
