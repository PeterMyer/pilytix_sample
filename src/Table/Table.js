import {React, useState} from 'react';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import CustomTableHead from './CustomTableHead';
import { FormControlLabel } from '@mui/material';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import { formatter } from '../Utils/currencyFormatter';
import getComparator from './Utils/getComparator'
import Modal from '../Modal/Modal'

export default function BasicTable({opportunities}) {
  /**
   * A basic table to display all non-nested information from opportunities.json
   */
  let data = opportunities

  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('name');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [show, setShow] = useState(false)
  const [rowId, setRowId] = useState(null)
  const [opportunity, setOpportunity] = useState(data[0])
  const rowIndex = data.reduce((obj, item, index) => ({...obj, [item.oppId]:index}),{})
  const oppIndex = data.reduce((obj, item, index) => ({...obj, [index]:item.oppId}),{})
  const [dense, setDense] = useState(false);

  function handleRowClick(event, row, rowIndex) {
      setRowId(rowIndex[row.oppId])
      setOpportunity(row)
      setShow(true)
  }

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el, index) =>{ 
      rowIndex[el[0].oppId] = index
      oppIndex[index] = el[0].oppId
      return el[0]
    }
    );
  }

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

  return (
    <>
      <TableContainer 
        component = { Paper } >
        <Table 
          aria-label = "simple table"
          size = {dense ? 'small' : 'medium'}>
          <CustomTableHead
            order= {order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            rowCount = {data.length}/>
          <TableBody>
            { stableSort( data, getComparator( order, orderBy ))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(( row, index ) => (
                <TableRow
                  onClick = {( event ) => handleRowClick( event, row, rowIndex )}
                  key = { row.oppId }
                  sx = {{ "&:last-child td, &:last-child th": { border: 0 }}}>
                  <TableCell 
                    component = "th"
                    scope = "row">
                    <Typography variant = "body2">
                        {row.oppName.slice(13)}
                    </Typography>
                  </TableCell>
                  <TableCell align = "left">
                    <Typography variant = "body2">
                      {row.oppName.substring(0,4)}
                    </Typography>
                  </TableCell>
                  <TableCell align = "left">
                    <Typography variant = "body2">
                      {row.salesRepName}
                    </Typography>
                  </TableCell>
                  <TableCell 
                    align = "left" 
                    sx={{ "padding-right":0 }}>
                    <Typography variant = "body2">
                      {row.stage.slice(3)}
                    </Typography>
                  </TableCell>
                  <TableCell 
                    align = "left" 
                    sx = {{ "padding-right":0 }}>
                    <Typography variant = "body2">
                      {row.pilytixTier}
                    </Typography>
                  </TableCell>
                  <TableCell 
                    align = "right" 
                    sx = {{ "padding-left":0, "padding-right":0 }}>
                      <Typography variant = "body2">
                        { Math.floor(row.repProbability * 100 )}%
                      </Typography>
                  </TableCell>
                  <TableCell align = "right">
                    <Typography variant = "body2">
                      {Math.floor(row.pilytixProbability * 100)}%
                    </Typography>
                  </TableCell>
                  <TableCell align = "right">
                    <Typography variant = "body2">
                      {formatter.format(row.amount)}
                    </Typography>
                  </TableCell>
                  <TableCell align = "right">
                    <Typography variant = "body2">
                      { row.oppName.substring(6,11) }
                    </Typography>
                  </TableCell>
                  <TableCell align = "left">
                    <Typography variant="body2">
                      {row.product}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))
            }
            { emptyRows > 0 && (
              <TableRow style = {{ height: (dense ? 33 : 53) * emptyRows }}>
                <TableCell 
                  colSpan = {6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
        <TablePagination
            rowsPerPageOptions = {[5, 10]}
            component = "div"
            count = { data.length }
            rowsPerPage = { rowsPerPage }
            page = { page }
            onPageChange = { handleChangePage }
            onRowsPerPageChange = { handleChangeRowsPerPage }
          />
      </TableContainer>
      <FormControlLabel
          control = {
            <Switch 
              checked = { dense }
              onChange = { handleChangeDense }/>
          }
          label = "Dense padding"
        />
      <Modal
        onClose = {() => setShow( false )}
        show = { show }
        opportunities = { data }
        rowId = { rowId }
        setRowId = { setRowId }
        oppIndex = { oppIndex }
        opportunity = { opportunity }
        setOpportunity = { setOpportunity }
        rowIndex = { rowIndex }
        />
    </>  
  );
}
