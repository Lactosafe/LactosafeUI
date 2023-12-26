import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
import './lacto-safe-table.scss'

interface Props{
    title:Array<string>,
    rowData:Array<Array<string>>
}

const LactoSafeTable:React.FC<Props> = ({title,rowData}) => {
  return (
    <>
    <div></div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {title?.map((title,index)=>( <TableCell key={index} align='center' className='table-header'>{title.toUpperCase()}</TableCell>))}           
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rowData.map((row:any,index:any) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {row?.map((data:any,i:any)=>(
                <TableCell key={i} component="th" align='center'scope="row">
                {data}
                </TableCell>
              ))

              }
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
  
export default LactoSafeTable
