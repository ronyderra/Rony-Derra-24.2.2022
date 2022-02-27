import React from 'react';
// import Album from './pages/home';
import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/home'
import Favorites from './pages/favorites'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Hello Weather Task
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
                <Button style={{margin: '0px 10px 0px 0px'}} variant="contained"><Link style={{ color: 'white', textDecoration: 'none' }} to="/WeatherTask/Home">Home</Link></Button>
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
  );
}

export default App;
