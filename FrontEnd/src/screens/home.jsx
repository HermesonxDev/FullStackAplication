import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FormHome from '../components/Form';
import GridHome from '../components/GridHome';
import OverView from '../components/OverView';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function AppGrid() {
  return (
    <div style={{display: 'flex', flexDirection: 'row', flexGrow: 1}}>
      <FormHome />
      <GridHome />
      <OverView />
    </div>
  );
}