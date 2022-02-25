import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { cities } from "../contriesData";
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const theme = createTheme();

export default function Album() {

  const [value, setValue] = React.useState(cities[0]);
  const [inputValue, setInputValue] = React.useState('');

  return (
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      <main>
        <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6, }}>
          <Container maxWidth="sm"  >
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Weather Search
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Home</Button>
              <Button variant="outlined">Favorites</Button>
            </Stack>

            <br />
            <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
            <div>{`inputValue: '${inputValue}'`}</div>

            <Autocomplete
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              inputValue={inputValue}
              onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
              }}
              id="controllable-states-demo"
              options={cities}
              sx={{ width: 300, margin: 'auto', pt: 5 }}
              renderInput={(params) => <TextField {...params} label="Controllable" />}
            />


          </Container>
        </Box>


        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={12}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>

                  <CardActions>
                    <Button size="small">Add To Favorites</Button>
                  </CardActions>
                  <Typography gutterBottom variant="h5" component="h2"> Scatterd Clouds</Typography>

                  <CardContent sx={{ flexGrow: 1, flexDirection: 'row' }}>

                    <Card sx={{ height: '100%' }}>
                      sunday
                    </Card>
                    <Card sx={{ height: '100%', }}>
                      monday
                    </Card>


                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}