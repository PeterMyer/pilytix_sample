import TableHead from "@mui/material/TableHead";
import { TableRow, TableCell, TableSortLabel } from "@mui/material";
import Typography from '@mui/material/Typography';

export default function CustomTableHead({ order, orderBy, onRequestSort }) {

    const createSortHandler = ( property ) => ( event ) => {
        onRequestSort( event, property );
      };

    const headCells = [
        { id: 'name', numeric: false, label: 'Lead Name'},
        { id: 'type', numeric: false,  label: 'Type'},
        { id: 'salesRepName', numeric: false,  label: 'Sales Rep'},
        { id: 'stage', numeric: false,  label: 'Stage', "paddingRight":0},
        { id: 'pilytixTier', numeric: false,  label: 'Lead Score', "paddingRight":0  },
        { id: 'repProbability', numeric: true,  label: 'Rep Probability',"paddingLeft":0, "paddingRight":0 },
        { id: 'pilytixProbability', numeric: true, label: 'PX Probability'},
        { id: 'amount', numeric: true,  label: 'Amount'},
        { id: 'date', numeric: true, label: 'Date'},
        { id: 'product', numeric: false,  label: 'Product'}]
  
    return (
      <TableHead 
        sx = {{
          backgroundColor: "#80AAF4"
        }}>
        <TableRow>
          {headCells.map(( headCell ) => (
            <TableCell 
              sx = {{
                "paddingLeft": headCell['paddingLeft'],
                "paddingRight": headCell['paddingRight']
              }}
              hover
              key = { headCell.id }
              align = { headCell.numeric ? 'right' : 'left' }
              sortDirection = { orderBy === headCell.id ? order : false }>
              <TableSortLabel
                active = { orderBy === headCell.id }
                direction = { orderBy === headCell.id ? order : 'asc' }
                onClick = {createSortHandler( headCell.id )}>
               <Typography variant="subtitle1">
                  {headCell.label}
                </Typography>
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };