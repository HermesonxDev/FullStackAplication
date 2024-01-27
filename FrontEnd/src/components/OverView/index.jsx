import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';

export default function OverView() {

  const [qtdItens, setQtdItens] = useState('');
  const [total, setTotal] = useState('');
  const products = useSelector(state => state.productStore.products)

  useEffect(() => {
    setQtdItens(products.reduce((total, item) => Number(total) + Number(item.qtd), 0))
    setTotal(products.reduce((total, item) => Number(total) + (Number(item.valor) * Number(item.qtd)), 0).toFixed(2))
  }, [products])

  return (
    <Box
      sx={{
        display: 'flex',
        alignContent: 'center',
        flexWrap: 'wrap',
        '& > :not(style)': {
          textAlign: 'center',
          m: 1,
          width: 250,
          height: 250,
        },
      }}
    >
      <Paper elevation={3}>
        <h4>Resumo</h4>
        <hr />
        <p>Total: <b>R${total}</b></p>
        <p>Qtd itens: <b>R${qtdItens}</b></p>
        <Button variant="outlined">Finalizar venda</Button>
      </Paper>
    </Box>
  );
}
