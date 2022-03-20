import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/home'
import Favorites from './Pages/favorites'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

function App() {
  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? "dark" : "light";
  const mainPrimaryColor = darkState ? '#FF5722' : '#03A9F4';
  const mainSecondaryColor = darkState ? '#FF5722' : '#673AB7';
  const darkTheme = createTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor
      },
      secondary: {
        main: mainSecondaryColor
      }
    }
  });
  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <header className="App-header">
          <AppBar position="relative">
            <Toolbar>
              <Typography variant="h6" color="inherit" noWrap>
                Hello Weather
                <Switch checked={darkState} onChange={handleThemeChange} />
              </Typography>
            </Toolbar>
          </AppBar>
        </header>
        <main>
          <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6, }}>
            <Container maxWidth="sm"  >
              <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom> Weather Search</Typography>
              <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
                <nav>
                  <Button style={{ margin: '0px 10px 0px 0px' }} variant="contained"><Link style={{ color: 'white', textDecoration: 'none' }} to="/WeatherTask/Home">Home</Link></Button>
                  <Button variant="outlined"><Link style={{ color: 'black', textDecoration: 'none' }} to="/WeatherTask/Favorites">Favorites</Link></Button>
                </nav>
              </Stack>
            </Container>

          </Box>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/WeatherTask/Home" element={<Home />} />
            <Route path="/WeatherTask/Favorites" element={<Favorites />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
