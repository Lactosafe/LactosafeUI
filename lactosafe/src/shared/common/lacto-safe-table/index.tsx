import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';

interface Props{
    title:Array<string>,
    rowData:any
}

const LactoSafeTable:React.FC<Props> = ({title,rowData}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {title?.map((title,index)=>( <TableCell key={index} align='center'>{title}</TableCell>))}           
           
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {rowData.map((row:any,index:any) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row}
                </TableCell>
            </TableRow>
          ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
  
export default LactoSafeTable
