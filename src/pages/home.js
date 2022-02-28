import * as React from 'react';
import Container from '@mui/material/Container';
import CustomSearch from '../Components/CustomSearch'

const Home = () => {
  return (
      <Container sx={{ py: 8 }} maxWidth="md">
        <CustomSearch />
      </Container>
  );
}
export default Home;