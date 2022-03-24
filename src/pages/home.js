import * as React from 'react';
import Container from '@mui/material/Container';
import SearchInput from '../Components/SearchInput'

const Home = () => {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <SearchInput />
    </Container>
  );
}
export default Home;