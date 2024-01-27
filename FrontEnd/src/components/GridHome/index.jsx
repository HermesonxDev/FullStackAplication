import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector, useDispatch } from 'react-redux';
import { removeProducts } from '../../slices/productSlice';

export default function GridHome() {

  const dispatch = useDispatch();
  const products = useSelector(state => state.productStore.products);
  const removeFromTable = (codigo) => {
    dispatch(removeProducts(codigo))
  };

  return (
    <TableContainer sx={{mt: 1, p: 1}} component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#Código</TableCell>
            <TableCell align="right">#Nome</TableCell>
            <TableCell align="right">#Quantidade</TableCell>
            <TableCell align="right">#Valor unitário</TableCell>
            <TableCell align="right">#Valor total</TableCell>
            <TableCell align="right">#Ação</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
          products ? 
            products.map((row) => (
              <TableRow
                key={row.nome}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.codigo}
                </TableCell>
                <TableCell align="right">{row.nome}</TableCell>
                <TableCell align="right">{row.qtd}</TableCell>
                <TableCell align="right">{row.valor}</TableCell>
                <TableCell align="right">{row.descricao}</TableCell>
                <TableCell align="right">
                  <DeleteIcon 
                    onClick={(e) => {removeFromTable(row.codigo)}}
                  />
                </TableCell>
              </TableRow>
          )) :
            products.map((row) => (
              <TableRow
                key={row.nome}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.codigo}
                </TableCell>
                <TableCell align="right">{row.nome}</TableCell>
                <TableCell align="right">{row.qtd}</TableCell>
                <TableCell align="right">{row.valor}</TableCell>
                <TableCell align="right">{row.descricao}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}