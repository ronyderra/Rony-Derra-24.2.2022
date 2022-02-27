import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CustomSearch from '../components/CustomSearch'

const cards = [1];
const theme = createTheme();

export default function Home() {

  return (
    <ThemeProvider theme={theme}>
        <Container sx={{ py: 8 }} maxWidth="md">
        <CustomSearch />
        </Container>
    </ThemeProvider>
  );
}