import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import  Album  from './pages/home';
import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

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

      

        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Counter /> */}
        <Album />
      </header>
    </div>
  );
}

export default App;
