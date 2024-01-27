import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { produtos } from "../../produtos";
import { useDispatch, useSelector } from 'react-redux';
import { addProducts, removeProducts, filterProductAsync } from '../../slices/productSlice';

export default function FormHome() {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.productStore.products);
  const [item, setItem] = useState('');
  const [quantidade, setQuantidade] = useState(1);

  const buscarItem = async (e) => {
    const item = await filterProductAsync(e)
    if(item){
      setItem(item)
    }
  }

  const addToTable = (item) => {
    item.qtd = quantidade;
    dispatch(addProducts(item))
  }

  useEffect(() => {
    console.log(products)
  }, [products]);

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Item"
        autoFocus
        variant="outlined"
        onChange={(e) => buscarItem(e.target.value)}
      />

      <TextField
        id="outlined-basic"
        label="Quantidade"
        variant="outlined"
        onChange={(e) => {setQuantidade(e.target.value)}}
        value={quantidade}
      />

      {
        item
        ?
        item.map((it) => 
          <Button
            onClick={(e) => addToTable(it)}
          >{it.nome}</Button>
        )
        :
        (<h4></h4>)
      }
    </Box>
  );
}